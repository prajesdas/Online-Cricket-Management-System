
export interface Team {
  id: string;
  name: string;
  shortName: string;
  logoUrl: string;
}

export interface Score {
  runs: number;
  wickets: number;
  overs: number;
  balls?: number; // Optional for more precision
}

export interface LiveMatch {
  id: string;
  teamA: Team;
  teamB: Team;
  scoreA: Score;
  scoreB: Score;
  status: string; // e.g., "Team A batting", "Innings Break", "Team B won by 5 wickets"
  currentBatter?: { name: string; runs: number; balls: number };
  currentBowler?: { name: string; overs: number; wickets: number; runsConceded: number };
  tossWinner?: string; // Team name
  tossDecision?: 'Bat' | 'Field';
  matchType: 'T20' | 'ODI' | 'Test';
  venue: string;
  seriesName?: string;
  target?: number;
}

export interface UpcomingMatch {
  id: string;
  teamA: Team;
  teamB: Team;
  dateTime: string; // ISO string or formatted date/time
  venue: string;
  tournamentName?: string;
  matchType: 'T20' | 'ODI' | 'Test';
  seriesName?: string;
}

export interface Tournament {
  id: string;
  name: string;
  startDate: string; // ISO string or formatted date
  endDate: string; // ISO string or formatted date
  hostCountry: string;
  participatingTeams: Team[];
  format: 'T20 League' | 'ODI Series' | 'Test Championship' | 'Multi-format Series';
  logoUrl?: string;
  description?: string;
}

export type ViewType = 'live' | 'upcoming' | 'tournaments';
