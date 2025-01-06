"use client"
import React, { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    description?: string;
  };
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodo, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleUpdate = () => {
    if (editedTitle.trim()) {
      updateTodo(todo.id, { ...todo, title: editedTitle });
      setIsEditing(false);
    }
  };

  const priorityColors = {
    low: "bg-muted text-muted-foreground",
    medium: "bg-primary/20 text-primary",
    high: "bg-destructive/20 text-destructive"
  };

  return (
    <Card className="group">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => toggleTodo(todo.id)}
            className={cn(
              "h-8 w-8 shrink-0 rounded-full",
              todo.completed && "bg-primary/5 text-primary"
            )}
          >
            <Check className={cn(
              "h-4 w-4 transition-opacity",
              todo.completed ? "opacity-100" : "opacity-0"
            )} />
          </Button>

          <div className="flex-1 space-y-1">
            {isEditing ? (
              <Input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="h-8"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleUpdate();
                  if (e.key === 'Escape') {
                    setIsEditing(false);
                    setEditedTitle(todo.title);
                  }
                }}
              />
            ) : (
              <>
                <span className={cn(
                  "text-sm font-medium",
                  todo.completed && "line-through text-muted-foreground"
                )}>
                  {todo.title}
                </span>
                {todo.description && (
                  <p className="text-xs text-muted-foreground">
                    {todo.description}
                  </p>
                )}
              </>
            )}
          </div>

          <Badge variant="secondary" className={cn(
            "ml-auto",
            priorityColors[todo.priority]
          )}>
            {todo.priority}
          </Badge>
        </div>

        <div className="flex items-center gap-1 ml-4">
          {isEditing ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleUpdate}
                className="h-8 w-8"
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsEditing(false);
                  setEditedTitle(todo.title);
                }}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(true)}
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}; 