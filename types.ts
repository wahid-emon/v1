export type UserType = 'local' | 'learner';

export enum District {
  Mitte = 'Mitte',
  Friedrichshain = 'Friedrichshain',
  Kreuzberg = 'Kreuzberg',
  PrenzlauerBerg = 'Prenzlauer Berg',
  Charlottenburg = 'Charlottenburg',
  Wilmersdorf = 'Wilmersdorf',
  Neukoelln = 'Neukölln',
  Schoeneberg = 'Schöneberg',
  Moabit = 'Moabit',
  Wedding = 'Wedding'
}

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  type: UserType;
  district: District;
  bio: string;
  interests: string[];
  languages: string[]; // e.g. ["German (Native)", "English (Basic)"]
  avatarUrl: string;
}

export interface MeetingSpot {
  title: string;
  address?: string;
  description: string;
  url?: string;
}

export interface ConnectionRequest {
  fromUser: UserProfile;
  toUser: UserProfile;
  status: 'pending' | 'accepted' | 'rejected';
  suggestedSpots?: MeetingSpot[];
  icebreakers?: string[];
}
