"use client"
import React, { useState } from 'react';
import { TodoProvider } from '@/context/TodoContext';
import { TodoForm } from '@/components/todo/TodoForm';
import { TodoList } from '@/components/todo/TodoList';
import { Button } from '@/components/ui/button';

const Todo: React.FC = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <TodoProvider>
            <div>
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Todo List</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Manage your tasks and stay organized
                        </p>
                    </div>
                    <Button
                        onClick={() => setIsFormOpen(true)}
                        className='bg-primary text-white'
                    >
                        Add Task
                    </Button>
                </div>
                <div className="space-y-8">
                    <TodoList />
                </div>
                {isFormOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <TodoForm closeForm={setIsFormOpen} />
                        </div>
                    </div>
                )}
            </div>
        </TodoProvider>
    );
};

export default Todo;