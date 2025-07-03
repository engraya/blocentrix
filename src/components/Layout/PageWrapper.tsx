interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <main className={`container mx-auto px-4 py-8 min-h-[calc(100vh-theme(spacing.32))] ${className}`}>
      {children}
    </main>
  );
};

export default PageWrapper; 