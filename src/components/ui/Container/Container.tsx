import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container flex flex-row items-center justify-center md md:h-screen">
    {children}
  </div>
);
