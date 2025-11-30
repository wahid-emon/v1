import React from 'react';
import { UserProfile } from '../types';
import { Button } from './Button';

interface ProfileCardProps {
  user: UserProfile;
  onConnect: (user: UserProfile) => void;
  isCompatible?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user, onConnect, isCompatible }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="h-24 bg-gradient-to-r from-berlin-green/10 to-berlin-red/10 relative">
        <div className="absolute -bottom-8 left-4">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm"
          />
        </div>
        <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${user.type === 'local' ? 'bg-berlin-green/20 text-berlin-green' : 'bg-berlin-red/10 text-berlin-red'}`}>
                {user.type === 'local' ? 'Local Mentor' : 'Language Learner'}
            </span>
        </div>
      </div>
      
      <div className="pt-10 px-4 pb-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-xl font-serif font-bold text-berlin-dark">{user.name}, {user.age}</h3>
                <p className="text-sm text-gray-500 font-medium">{user.district}</p>
            </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 italic">"{user.bio}"</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
            {user.interests.slice(0, 3).map(interest => (
                <span key={interest} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {interest}
                </span>
            ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
            <Button variant="outline" size="sm" fullWidth onClick={() => onConnect(user)}>
                Meet {user.name.split(' ')[0]}
            </Button>
        </div>
      </div>
    </div>
  );
};
