import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bell, Home, Search, Library, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
      isActive
        ? 'text-white bg-blue-500'
        : 'text-zinc-300 hover:text-white hover:bg-zinc-700/50'
    }`;
  
  const userPlaylists = [
    'Chill Beats', '80s Rock Anthems', 'Lo-fi for Studying',
    'Indie Favorites', 'Hip Hop Classics', 'Summer Vibes',
    'Piano Ballads', 'Workout Mix', 'J-Pop Hits', 'K-Pop Bangers'
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-black text-white p-2 space-y-2">
      <div className="bg-zinc-900 rounded-lg p-2 space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-2">
          <Bell className="h-6 w-6 text-yellow-400" />
          <span className="font-bold text-lg text-white">DoraeTunes</span>
        </Link>
        <nav className="flex flex-col space-y-1">
          <NavLink to="/" className={navLinkClasses}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/search" className={navLinkClasses}>
            <Search className="h-5 w-5" />
            <span>Search</span>
          </NavLink>
        </nav>
      </div>
      
      <div className="flex-grow bg-zinc-900 rounded-lg flex flex-col">
        <div className="px-4 py-3 flex items-center justify-between">
          <NavLink to="/library" className={navLinkClasses({ isActive: false }).replace('px-4 py-2', 'p-0')}>
            <Library className="h-5 w-5" />
            <span className="font-semibold">Your Library</span>
          </NavLink>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-300 hover:bg-zinc-700/50 hover:text-white">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <Separator className="bg-zinc-700" />
        <ScrollArea className="flex-grow px-2">
            <div className="py-2 space-y-1">
            {userPlaylists.map((playlistName) => (
                <Link
                key={playlistName}
                to="/playlist" // All link to the generic playlist page for now
                className="block text-zinc-300 hover:text-white text-sm font-medium p-2 rounded-md transition-colors hover:bg-zinc-800/50"
                >
                {playlistName}
                </Link>
            ))}
            </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default LeftSidebar;