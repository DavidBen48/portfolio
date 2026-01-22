import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold tracking-tighter text-gray-600">
            David<span className="text-gray-800">.Ben</span>
        </div>
        
        <div className="text-gray-600 text-xs font-mono">
          &copy; 2025 - David Ben. All systems operational.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
