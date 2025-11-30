import { District, UserProfile } from './types';

export const BERLIN_DISTRICTS = Object.values(District);

export const INTERESTS = [
  "History", "Gardening", "Literature", "Chess", "Cooking", 
  "Politics", "Art", "Walking", "Music", "Knitting", "Tech", "Soccer"
];

export const MOCK_USERS: UserProfile[] = [
  {
    id: '1',
    name: 'Helga Müller',
    age: 74,
    type: 'local',
    district: District.Charlottenburg,
    bio: 'Retired teacher. I love telling stories about old Berlin and walking in the Schlossgarten. My English is rusty, but I have patience.',
    interests: ['History', 'Literature', 'Walking'],
    languages: ['German (Native)', 'English (Basic)'],
    avatarUrl: 'https://picsum.photos/seed/helga/200/200'
  },
  {
    id: '2',
    name: 'Klaus Weber',
    age: 81,
    type: 'local',
    district: District.Schoeneberg,
    bio: 'Former engineer. I enjoy playing chess and discussing politics. I miss having lively debates.',
    interests: ['Chess', 'Politics', 'Tech'],
    languages: ['German (Native)'],
    avatarUrl: 'https://picsum.photos/seed/klaus/200/200'
  },
  {
    id: '3',
    name: 'Renate Fischer',
    age: 68,
    type: 'local',
    district: District.Neukoelln,
    bio: 'I have a small allotment garden. I would love to share coffee and cake with young people.',
    interests: ['Gardening', 'Cooking', 'Knitting'],
    languages: ['German (Native)', 'French (Intermediate)'],
    avatarUrl: 'https://picsum.photos/seed/renate/200/200'
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    age: 24,
    type: 'learner',
    district: District.Neukoelln,
    bio: 'Masters student from UK. I need to practice my B1 German outside of the classroom!',
    interests: ['Art', 'Cooking', 'Music'],
    languages: ['English (Native)', 'German (B1)'],
    avatarUrl: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: '5',
    name: 'Hiroki Tanaka',
    age: 29,
    type: 'learner',
    district: District.Charlottenburg,
    bio: 'Software developer working in English. I want to feel more at home in Berlin.',
    interests: ['Tech', 'Photography', 'History'],
    languages: ['Japanese (Native)', 'English (Fluent)', 'German (A2)'],
    avatarUrl: 'https://picsum.photos/seed/hiroki/200/200'
  },
  {
    id: '6',
    name: 'Elena Rossi',
    age: 26,
    type: 'learner',
    district: District.Schoeneberg,
    bio: 'Italian expat. I miss my grandparents and would love to chat with someone kind.',
    interests: ['Cooking', 'Literature', 'Cinema'],
    languages: ['Italian (Native)', 'English (Fluent)', 'German (A1)'],
    avatarUrl: 'https://picsum.photos/seed/elena/200/200'
  }
];
