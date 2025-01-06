interface PageWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageWrapper({ title, description, children }: PageWrapperProps) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h1>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  )
} 