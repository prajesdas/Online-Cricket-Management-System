
import React from 'react';
import { Tournament, Team } from '../types';

interface TournamentCardProps {
  tournament: Tournament;
}

const TeamLogoPill: React.FC<{team: Team}> = ({ team }) => (
  <div className="flex items-center bg-slate-600 p-1 rounded-full" title={team.name}>
    <img src={team.logoUrl} alt={team.name} className="w-5 h-5 rounded-full" />
    <span className="text-xs text-gray-300 ml-1.5 hidden sm:inline">{team.shortName}</span>
  </div>
);

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  const { name, startDate, endDate, hostCountry, participatingTeams, format, logoUrl, description } = tournament;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/30 hover:scale-[1.01]">
      <div className="md:flex">
        {logoUrl && (
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={logoUrl} alt={`${name} logo`} />
          </div>
        )}
        <div className="p-6 flex-grow">
          <div className="uppercase tracking-wide text-sm text-purple-400 font-semibold">{format}</div>
          <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-100 hover:text-purple-300 transition-colors">{name}</h2>
          <p className="mt-2 text-gray-400 text-sm">{description || `Hosted in ${hostCountry}.`}</p>

          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p><strong>Dates:</strong> {formatDate(startDate)} - {formatDate(endDate)}</p>
            <p><strong>Host:</strong> {hostCountry}</p>
          </div>

          {participatingTeams && participatingTeams.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-200 mb-2">Participating Teams:</h4>
              <div className="flex flex-wrap gap-2">
                {participatingTeams.slice(0, 6).map(team => ( // Show max 6 teams for brevity
                  <TeamLogoPill key={team.id} team={team} />
                ))}
                {participatingTeams.length > 6 && <span className="text-xs text-gray-400 self-center">+{participatingTeams.length - 6} more</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
