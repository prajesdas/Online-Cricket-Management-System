
import React, { useState, useEffect, useCallback } from 'react';
import { LiveMatch, UpcomingMatch, Tournament, ViewType } from './types';
import { fetchLiveMatches, fetchUpcomingMatches, fetchTournaments } from './services/cricketService';
import Navbar from './components/Navbar';
import LiveScoreCard from './components/LiveScoreCard';
import UpcomingMatchCard from './components/UpcomingMatchCard';
import TournamentCard from './components/TournamentCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('live');
  const [liveMatches, setLiveMatches] = useState<LiveMatch[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<UpcomingMatch[]>([]);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (currentView === 'live') {
        const data = await fetchLiveMatches();
        setLiveMatches(data);
      } else if (currentView === 'upcoming') {
        const data = await fetchUpcomingMatches();
        setUpcomingMatches(data);
      } else if (currentView === 'tournaments') {
        const data = await fetchTournaments();
        setTournaments(data);
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentView]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const renderContent = () => {
    if (isLoading) return <div className="flex justify-center items-center h-64"><LoadingSpinner /></div>;
    if (error) return <div className="mt-8"><ErrorDisplay message={error} /></div>;

    switch (currentView) {
      case 'live':
        return liveMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
            {liveMatches.map(match => <LiveScoreCard key={match.id} match={match} />)}
          </div>
        ) : <p className="text-center text-gray-500 mt-8">No live matches currently.</p>;
      case 'upcoming':
        return upcomingMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
            {upcomingMatches.map(match => <UpcomingMatchCard key={match.id} match={match} />)}
          </div>
        ) : <p className="text-center text-gray-500 mt-8">No upcoming matches scheduled.</p>;
      case 'tournaments':
        return tournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
            {tournaments.map(tournament => <TournamentCard key={tournament.id} tournament={tournament} />)}
          </div>
        ) : <p className="text-center text-gray-500 mt-8">No tournaments found.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="container mx-auto px-2 py-4 md:py-8">
        {renderContent()}
      </main>
      <footer className="text-center py-6 text-sm text-slate-400 border-t border-slate-700">
        © {new Date().getFullYear()} Cricket Hub. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
