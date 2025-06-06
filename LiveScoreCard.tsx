
import React from 'react';
import { LiveMatch, Team, Score } from '../types';

interface LiveScoreCardProps {
  match: LiveMatch;
}

const TeamScoreDisplay: React.FC<{team: Team, score: Score, isBatting: boolean}> = ({ team, score, isBatting }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center">
      <img src={team.logoUrl} alt={team.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3 border-2 border-slate-600"/>
      <span className={`text-sm md:text-base font-semibold ${isBatting ? 'text-emerald-400' : 'text-gray-300'}`}>{team.name}</span>
    </div>
    <div className="text-right">
      <span className={`text-lg md:text-xl font-bold ${isBatting ? 'text-emerald-400' : 'text-gray-200'}`}>
        {score.runs}/{score.wickets}
      </span>
      <span className="block text-xs text-gray-400">({score.overs}{score.balls !== undefined ? `.${score.balls}` : ''} Ov)</span>
    </div>
  </div>
);

const LiveScoreCard: React.FC<LiveScoreCardProps> = ({ match }) => {
  const { teamA, teamB, scoreA, scoreB, status, matchType, venue, tossWinner, tossDecision, seriesName, currentBatter, currentBowler, target } = match;

  const isTeamABatting = status.toLowerCase().includes(teamA.name.toLowerCase()) && (status.toLowerCase().includes('batting') || status.toLowerCase().includes('to bat'));
  const isTeamBBatting = status.toLowerCase().includes(teamB.name.toLowerCase()) && (status.toLowerCase().includes('batting') || status.toLowerCase().includes('to bat'));
  
  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-[1.02]">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-700">
          <div>
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">{matchType} - {seriesName || 'Match'}</p>
            <p className="text-xs text-gray-400">{venue}</p>
          </div>
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            LIVE
          </div>
        </div>

        <TeamScoreDisplay team={teamA} score={scoreA} isBatting={isTeamABatting} />
        <TeamScoreDisplay team={teamB} score={scoreB} isBatting={isTeamBBatting} />

        { (currentBatter || currentBowler) && (
            <div className="mt-3 pt-3 border-t border-slate-700 text-xs text-gray-400 space-y-1">
                {currentBatter && <p><strong>Batting:</strong> {currentBatter.name} ({currentBatter.runs}* off {currentBatter.balls})</p>}
                {currentBowler && <p><strong>Bowling:</strong> {currentBowler.name} ({currentBowler.wickets}/{currentBowler.runsConceded} in {currentBowler.overs} ov)</p>}
            </div>
        )}
        
        {tossWinner && (
          <p className="text-xs text-gray-500 mt-2">
            Toss: {tossWinner} won the toss and chose to {tossDecision?.toLowerCase()}.
          </p>
        )}
      </div>
      <div className="bg-slate-700 p-3 text-center">
        <p className="text-sm font-medium text-emerald-300">{status}</p>
        {target && (isTeamBBatting && scoreA.wickets === 10 || scoreA.overs === (matchType === 'T20' ? 20 : 50)) ? 
            <p className="text-xs text-gray-400">{teamB.name} need {target - scoreB.runs} runs to win.</p> 
            : null
        }
         {target && (isTeamABatting && scoreB.wickets === 10 || scoreB.overs === (matchType === 'T20' ? 20 : 50)) && teamA.name === tossWinner && tossDecision === 'Field' ? // If A is chasing
            <p className="text-xs text-gray-400">{teamA.name} need {target - scoreA.runs} runs to win.</p> 
            : null
        }
      </div>
    </div>
  );
};

export default LiveScoreCard;
