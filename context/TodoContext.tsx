"use client";
import React, { createContext, useContext, useReducer, useCallback } from "react";
import { Todo, TodoContextType } from "@/types/todo.types";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext<TodoContextType | undefined>(undefined);


type TodoAction =
  | { type: "ADD_TODO"; payload: Omit<Todo, "id" | "createdAt"> }
  | { type: "UPDATE_TODO"; payload: { id: string; updates: Partial<Todo> } }
  | { type: "DELETE_TODO"; payload: { id: string } }
  | { type: "TOGGLE_TODO"; payload: { id: string } };

const addTodo = (state: Todo[], payload: Omit<Todo, "id" | "createdAt">): Todo[] => [
  ...state,
  { ...payload, id: uuidv4(), createdAt: new Date() },
];

const updateTodo = (state: Todo[], { id, updates }: { id: string; updates: Partial<Todo> }): Todo[] =>
  state.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo));

const deleteTodo = (state: Todo[], { id }: { id: string }): Todo[] =>
  state.filter((todo) => todo.id !== id);

const toggleTodo = (state: Todo[], { id }: { id: string }): Todo[] =>
  state.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));


const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action.payload);
    case "UPDATE_TODO":
      return updateTodo(state, action.payload);
    case "DELETE_TODO":
      return deleteTodo(state, action.payload);
    case "TOGGLE_TODO":
      return toggleTodo(state, action.payload);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


const useTodosReducer = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = useCallback((todo: Omit<Todo, "id" | "createdAt">) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  }, []);

  const updateTodo = useCallback((id: string, updates: Partial<Todo>) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, updates } });
  }, []);

  const deleteTodo = useCallback((id: string) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  }, []);

  const toggleTodo = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  }, []);

  return { todos, addTodo, updateTodo, deleteTodo, toggleTodo };
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const todosState = useTodosReducer();

  return <TodoContext.Provider value={todosState}>{children}</TodoContext.Provider>;
};

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};