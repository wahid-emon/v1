import React, { useState, useMemo } from 'react';
import { UserProfile, District, UserType } from './types';
import { MOCK_USERS, BERLIN_DISTRICTS } from './constants';
import { ProfileCard } from './components/ProfileCard';
import { Button } from './components/Button';
import { MeetingPlanner } from './components/MeetingPlanner';

function App() {
  const [view, setView] = useState<'landing' | 'onboarding' | 'dashboard'>('landing');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  
  // Onboarding State
  const [tempName, setTempName] = useState('');
  const [tempType, setTempType] = useState<UserType>('learner');
  const [tempDistrict, setTempDistrict] = useState<District>(District.Mitte);

  // Meeting State
  const [selectedMatch, setSelectedMatch] = useState<UserProfile | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempName) return;

    const newUser: UserProfile = {
      id: 'me',
      name: tempName,
      age: tempType === 'local' ? 70 : 25, // Mock ages for simplicity
      type: tempType,
      district: tempDistrict,
      bio: tempType === 'local' 
        ? "I want to meet young people and share my love for Berlin." 
        : "I want to improve my German conversational skills.",
      interests: ["Walking", "Coffee"], // Default
      languages: [],
      avatarUrl: `https://picsum.photos/seed/${tempName}/200/200`
    };

    setCurrentUser(newUser);
    setView('dashboard');
  };

  // Filter users: Only show opposite type and same district (for simplicity in this demo)
  const matches = useMemo(() => {
    if (!currentUser) return [];
    return MOCK_USERS.filter(u => 
      u.type !== currentUser.type && 
      u.district === currentUser.district
    );
  }, [currentUser]);

  // View: Landing Page
  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-berlin-cream flex flex-col font-sans">
        {/* Hero */}
        <header className="px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
            <div className="text-2xl font-serif font-bold text-berlin-red flex items-center gap-2">
                <span>BerlinBrücke</span>
                <span className="text-3xl text-berlin-green">⸘</span>
            </div>
            <Button variant="ghost" onClick={() => setView('onboarding')}>Log In</Button>
        </header>

        <main className="flex-grow flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-12 gap-12">
            <div className="lg:w-1/2 space-y-8">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-berlin-dark leading-tight">
                    More than just <br/>
                    <span className="text-berlin-red italic">Sprache.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Berlin is full of stories. Connect with elderly locals for companionship or international students for language exchange. 
                    Meet in your neighborhood's parks and cafes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => setView('onboarding')} className="font-bold">
                        Find a Language Buddy
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => {
                         const element = document.getElementById('how-it-works');
                         element?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        How it works
                    </Button>
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500" className="rounded-2xl shadow-xl mt-12 object-cover h-64 w-full" alt="Elderly woman smiling" />
                    <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=400&h=500" className="rounded-2xl shadow-xl mb-12 object-cover h-64 w-full" alt="Students laughing" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-berlin-green/5 rounded-full blur-3xl -z-0"></div>
            </div>
        </main>

        <section id="how-it-works" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-berlin-cream rounded-xl">
                        <div className="w-12 h-12 bg-berlin-red/10 text-berlin-red rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-bold mb-2">Create Profile</h3>
                        <p className="text-gray-600">Tell us if you want company (Local) or practice (Learner) and your district.</p>
                    </div>
                    <div className="p-6 bg-berlin-cream rounded-xl">
                        <div className="w-12 h-12 bg-berlin-green/10 text-berlin-green rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-bold mb-2">Find a Match</h3>
                        <p className="text-gray-600">Browse people nearby who share your interests.</p>
                    </div>
                    <div className="p-6 bg-berlin-cream rounded-xl">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-bold mb-2">Meet Safely</h3>
                        <p className="text-gray-600">Our AI suggests safe public spots and ice-breakers for your first meeting.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }

  // View: Onboarding
  if (view === 'onboarding') {
    return (
      <div className="min-h-screen bg-berlin-cream flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-berlin-dark mb-1">Join the Community</h2>
            <p className="text-gray-500 mb-8">Start your journey to meaningful connections.</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">I am a...</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            type="button"
                            className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${tempType === 'learner' ? 'border-berlin-red bg-berlin-red/5 text-berlin-red ring-2 ring-berlin-red/20 ring-offset-1 font-bold shadow-sm' : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-300 hover:bg-gray-100'}`}
                            onClick={() => setTempType('learner')}
                        >
                            Language Learner
                            <div className={`text-xs font-normal mt-1 ${tempType === 'learner' ? 'text-berlin-red/80' : 'text-gray-400'}`}>Student / Expat</div>
                        </button>
                        <button 
                            type="button"
                            className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${tempType === 'local' ? 'border-berlin-green bg-berlin-green/5 text-berlin-green ring-2 ring-berlin-green/20 ring-offset-1 font-bold shadow-sm' : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-300 hover:bg-gray-100'}`}
                            onClick={() => setTempType('local')}
                        >
                            Local Mentor
                            <div className={`text-xs font-normal mt-1 ${tempType === 'local' ? 'text-berlin-green/80' : 'text-gray-400'}`}>Elderly / Local</div>
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                        required
                        type="text" 
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-berlin-red focus:ring-4 focus:ring-berlin-red/10 focus:outline-none transition-all duration-200"
                        placeholder="e.g. Alex"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">District</label>
                    <div className="relative">
                        <select 
                            value={tempDistrict}
                            onChange={(e) => setTempDistrict(e.target.value as District)}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-berlin-red focus:ring-4 focus:ring-berlin-red/10 focus:outline-none appearance-none transition-all duration-200 cursor-pointer"
                        >
                            {BERLIN_DISTRICTS.map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <Button type="submit" fullWidth size="lg" className="shadow-lg shadow-berlin-red/20">Start Connecting</Button>
                    <button type="button" onClick={() => setView('landing')} className="w-full text-center text-sm font-medium text-gray-500 mt-4 hover:text-berlin-dark transition-colors">Cancel</button>
                </div>
            </form>
        </div>
      </div>
    );
  }

  // View: Dashboard
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-serif font-bold text-berlin-red cursor-pointer" onClick={() => setView('landing')}>BerlinBrücke</span>
                    <div className="hidden md:flex space-x-4">
                        <span className="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white">Find Buddy</span>
                        <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer">Messages</span>
                        <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer">Profile</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-gray-900">{currentUser?.name}</p>
                        <p className="text-xs text-gray-500">{currentUser?.district}</p>
                    </div>
                    <img 
                        src={currentUser?.avatarUrl} 
                        alt="" 
                        className="h-8 w-8 rounded-full bg-gray-200"
                    />
                    <Button size="sm" variant="ghost" onClick={() => setView('landing')}>Logout</Button>
                </div>
            </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-berlin-dark">
                Hello, {currentUser?.name}.
            </h1>
            <p className="text-gray-600 mt-2">
                Here are people in <span className="font-semibold text-berlin-red">{currentUser?.district}</span> looking to connect.
            </p>
        </div>

        {matches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {matches.map(user => (
                    <ProfileCard 
                        key={user.id} 
                        user={user} 
                        onConnect={(u) => setSelectedMatch(u)} 
                    />
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-xl text-gray-500 mb-4">No matches found in {currentUser?.district} yet.</p>
                <p className="text-gray-400">Try changing your district in settings or check back later!</p>
                <Button variant="outline" className="mt-4" onClick={() => setView('onboarding')}>Change Search Settings</Button>
            </div>
        )}
      </main>

      {/* Meeting Planner Modal */}
      {selectedMatch && currentUser && (
        <MeetingPlanner 
            currentUser={currentUser} 
            targetUser={selectedMatch} 
            onClose={() => setSelectedMatch(null)} 
        />
      )}
    </div>
  );
}

export default App;