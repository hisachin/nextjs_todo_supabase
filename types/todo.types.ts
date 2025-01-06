export interface Todo {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    priority: 'low' | 'medium' | 'high';
  }
  
  export interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
    updateTodo: (id: string, todo: Partial<Todo>) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
  }