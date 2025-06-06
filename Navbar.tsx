
import React from 'react';
import { ViewType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const CricketIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.168 0 13.5 5.832 13.5 13.5v.75M4.502 4.5h14.996c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H4.502c-.621 0-1.125-.504-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75h7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5v15" />
  </svg>
);


const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const navItems: { label: string; view: ViewType }[] = [
    { label: 'Live Scores', view: 'live' },
    { label: 'Upcoming Matches', view: 'upcoming' },
    { label: 'Tournaments', view: 'tournaments' },
  ];

  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <CricketIcon />
          <h1 className="ml-3 text-3xl font-bold text-emerald-400" style={{fontFamily: "'Roboto Condensed', sans-serif"}}>Cricket Hub</h1>
        </div>
        <nav className="flex space-x-2 md:space-x-4">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                ${currentView === item.view 
                  ? 'bg-emerald-500 text-white shadow-md' 
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75'}
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
