import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="flex items-center justify-center h-screen bg-background text-text">
    {children}
  </div>
);
