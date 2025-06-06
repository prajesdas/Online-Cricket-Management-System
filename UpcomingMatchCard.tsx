
import React from 'react';
import { UpcomingMatch } from '../types';

interface UpcomingMatchCardProps {
  match: UpcomingMatch;
}

const UpcomingMatchCard: React.FC<UpcomingMatchCardProps> = ({ match }) => {
  const { teamA, teamB, dateTime, venue, tournamentName, matchType, seriesName } = match;

  const matchDate = new Date(dateTime);
  const formattedDate = matchDate.toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const formattedTime = matchDate.toLocaleTimeString(undefined, {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/30 hover:scale-[1.02]">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4 pb-3 border-b border-slate-700">
            <div>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{matchType} - {seriesName || tournamentName || 'Fixture'}</p>
                <p className="text-sm text-gray-300 font-medium">{venue}</p>
            </div>
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">UPCOMING</span>
        </div>

        <div className="flex items-center justify-around mb-4 text-center">
          <div className="flex flex-col items-center w-2/5">
            <img src={teamA.logoUrl} alt={teamA.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-2 border-2 border-slate-600"/>
            <span className="text-sm md:text-base font-semibold text-gray-200">{teamA.name}</span>
          </div>
          <span className="text-xl font-bold text-gray-400">VS</span>
          <div className="flex flex-col items-center w-2/5">
            <img src={teamB.logoUrl} alt={teamB.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-2 border-2 border-slate-600"/>
            <span className="text-sm md:text-base font-semibold text-gray-200">{teamB.name}</span>
          </div>
        </div>
        
        <div className="text-center text-gray-400">
            <p className="text-lg font-semibold text-blue-300">{formattedDate}</p>
            <p className="text-sm">{formattedTime}</p>
        </div>
      </div>
      {tournamentName && (
        <div className="bg-slate-700 p-3 text-center">
          <p className="text-xs text-gray-400">Tournament: <span className="font-medium text-gray-300">{tournamentName}</span></p>
        </div>
      )}
    </div>
  );
};

export default UpcomingMatchCard;
