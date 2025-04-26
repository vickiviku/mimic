import { ReactNode } from 'react';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <div className="min-h-screen w-full bg-[#f1f5f9] overflow-x-hidden px-4">
        <div className="max-w-7xl mx-auto py-12">
          {children}
        </div>
      </div>
    );
  };
  
  export default LayoutWrapper;
  