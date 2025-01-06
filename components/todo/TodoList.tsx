"use client"
import React, { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';

export const TodoList: React.FC = () => {
  const { todos } = useTodo();

  const sortedTodos = [...todos].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">No tasks yet. Add your first task above!</p>
      </div>  
    );
  }

  return (
    <div className="space-y-4 transition-all">
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}; 