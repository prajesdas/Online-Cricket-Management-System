
import { LiveMatch, UpcomingMatch, Tournament } from '../types';
import { MOCK_LIVE_MATCHES, MOCK_UPCOMING_MATCHES, MOCK_TOURNAMENTS, MOCK_API_LATENCY } from '../constants';

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export const fetchLiveMatches = async (): Promise<LiveMatch[]> => {
  console.log('Fetching live matches...');
  await delay(MOCK_API_LATENCY);
  // Simulate potential API failure
  // if (Math.random() < 0.1) {
  //   throw new Error("Simulated API error: Failed to fetch live matches");
  // }
  console.log('Fetched live matches:', MOCK_LIVE_MATCHES);
  return MOCK_LIVE_MATCHES;
};

export const fetchUpcomingMatches = async (): Promise<UpcomingMatch[]> => {
  console.log('Fetching upcoming matches...');
  await delay(MOCK_API_LATENCY);
  console.log('Fetched upcoming matches:', MOCK_UPCOMING_MATCHES);
  return MOCK_UPCOMING_MATCHES;
};

export const fetchTournaments = async (): Promise<Tournament[]> => {
  console.log('Fetching tournaments...');
  await delay(MOCK_API_LATENCY);
  console.log('Fetched tournaments:', MOCK_TOURNAMENTS);
  return MOCK_TOURNAMENTS;
};
