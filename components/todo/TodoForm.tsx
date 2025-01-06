"use client"
import React, { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { Todo } from '@/types/todo.types';

export const TodoForm: React.FC<{ closeForm: (value: boolean) => void }> = ({ closeForm }) => {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo({
      title: title.trim(),
      description: description.trim(),
      completed: false,
      priority,
    });

    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white dark:bg-gray-50 transition-all">
      <div className="space-y-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-50 dark:text-gray-700 transition-all"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description (optional)"
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-50 dark:text-gray-700 transition-all resize-none h-24"
        />
      </div>
      <div className="flex items-center gap-4">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Todo['priority'])}
          className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-50 dark:text-gray-700 transition-all"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <div className="flex justify-end gap-4">

      <button
        onClick={() => closeForm(false)}
        className="px-6 py-3 bg-secondary text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
      >
        Cancel
      </button>

      <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}; 