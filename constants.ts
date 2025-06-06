
import { Team, LiveMatch, UpcomingMatch, Tournament } from './types';

export const MOCK_API_LATENCY = 800; // milliseconds

export const TEAMS: Team[] = [
  { id: 't1', name: 'India Kings', shortName: 'IND', logoUrl: 'https://picsum.photos/seed/IndiaKings/60/60' },
  { id: 't2', name: 'Aussie Warriors', shortName: 'AUS', logoUrl: 'https://picsum.photos/seed/AussieWarriors/60/60' },
  { id: 't3', name: 'England Lions', shortName: 'ENG', logoUrl: 'https://picsum.photos/seed/EnglandLions/60/60' },
  { id: 't4', name: 'Pak Stallions', shortName: 'PAK', logoUrl: 'https://picsum.photos/seed/PakStallions/60/60' },
  { id: 't5', name: 'SA Proteas', shortName: 'SA', logoUrl: 'https://picsum.photos/seed/SAProteas/60/60' },
  { id: 't6', name: 'NZ Kiwis', shortName: 'NZ', logoUrl: 'https://picsum.photos/seed/NZKiwis/60/60' },
  { id: 't7', name: 'WI Windies', shortName: 'WI', logoUrl: 'https://picsum.photos/seed/WIWindies/60/60' },
  { id: 't8', name: 'SL Lankans', shortName: 'SL', logoUrl: 'https://picsum.photos/seed/SLLankans/60/60' },
];

export const MOCK_LIVE_MATCHES: LiveMatch[] = [
  {
    id: 'lm1',
    teamA: TEAMS[0],
    teamB: TEAMS[1],
    scoreA: { runs: 150, wickets: 3, overs: 15, balls: 2 },
    scoreB: { runs: 0, wickets: 0, overs: 0 },
    status: `${TEAMS[0].name} are batting`,
    currentBatter: { name: 'V. Kohli', runs: 75, balls: 40 },
    currentBowler: { name: 'P. Cummins', overs: 3.2, wickets: 1, runsConceded: 25 },
    tossWinner: TEAMS[0].name,
    tossDecision: 'Bat',
    matchType: 'T20',
    venue: 'Eden Gardens, Kolkata',
    seriesName: 'Bilateral T20 Series',
    target: 0, // Target will be set after first innings
  },
  {
    id: 'lm2',
    teamA: TEAMS[2],
    teamB: TEAMS[3],
    scoreA: { runs: 280, wickets: 7, overs: 50 },
    scoreB: { runs: 120, wickets: 4, overs: 25, balls: 0 },
    status: `${TEAMS[3].name} need 161 runs to win from 25 overs`,
    tossWinner: TEAMS[3].name,
    tossDecision: 'Field',
    matchType: 'ODI',
    venue: 'Lord\'s, London',
    seriesName: 'Tri-Nation Cup',
    target: 281,
  },
  {
    id: 'lm3',
    teamA: TEAMS[4],
    teamB: TEAMS[5],
    scoreA: { runs: 180, wickets: 10, overs: 19.5 },
    scoreB: { runs: 181, wickets: 5, overs: 19.2 },
    status: `${TEAMS[5].name} won by 5 wickets`,
    matchType: 'T20',
    venue: 'Newlands, Cape Town',
  },
];

export const MOCK_UPCOMING_MATCHES: UpcomingMatch[] = [
  {
    id: 'um1',
    teamA: TEAMS[0],
    teamB: TEAMS[2],
    dateTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
    venue: 'Wankhede Stadium, Mumbai',
    tournamentName: 'Champions Trophy Warm-up',
    matchType: 'ODI',
    seriesName: 'Global Cricket Challenge',
  },
  {
    id: 'um2',
    teamA: TEAMS[1],
    teamB: TEAMS[3],
    dateTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    venue: 'MCG, Melbourne',
    matchType: 'Test',
    seriesName: 'The Ashes Rivalry (Exhibition)',
  },
  {
    id: 'um3',
    teamA: TEAMS[6],
    teamB: TEAMS[7],
    dateTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    venue: 'Kensington Oval, Barbados',
    matchType: 'T20',
    tournamentName: 'Caribbean Premier League',
  },
];

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 'trm1',
    name: 'ICC World T20 Championship',
    startDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    hostCountry: 'Australia',
    participatingTeams: [TEAMS[0], TEAMS[1], TEAMS[2], TEAMS[3], TEAMS[4], TEAMS[5]],
    format: 'T20 League',
    logoUrl: 'https://picsum.photos/seed/WorldT20/100/100',
    description: 'The pinnacle of T20 international cricket, featuring the world\'s best teams.'
  },
  {
    id: 'trm2',
    name: 'Asia Cup ODI Series',
    startDate: new Date(Date.now() + 70 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 85 * 24 * 60 * 60 * 1000).toISOString(),
    hostCountry: 'UAE',
    participatingTeams: [TEAMS[0], TEAMS[3], TEAMS[7]], // India, Pak, SL
    format: 'ODI Series',
    logoUrl: 'https://picsum.photos/seed/AsiaCup/100/100',
    description: 'A fierce contest for supremacy in Asian cricket.'
  },
];
