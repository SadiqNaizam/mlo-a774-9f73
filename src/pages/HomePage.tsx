import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerFooter from '@/components/layout/MusicPlayerFooter';
import ContentCard from '@/components/ContentCard';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder data for content cards
const featuredPlaylists = [
  {
    id: 'pl1',
    title: 'Dorae-Chill',
    subtitle: 'Lo-fi beats for studying and relaxing.',
    imageUrl: 'https://picsum.photos/seed/doraechill/300/300',
    href: '/playlist',
  },
  {
    id: 'pl2',
    title: 'Anywhere Door Pop',
    subtitle: 'Global pop hits to take you anywhere.',
    imageUrl: 'https://picsum.photos/seed/doraepop/300/300',
    href: '/playlist',
  },
  {
    id: 'pl3',
    title: 'Time-Machine Rock',
    subtitle: 'Classic rock anthems from the past.',
    imageUrl: 'https://picsum.photos/seed/doraerock/300/300',
    href: '/playlist',
  },
  {
    id: 'pl4',
    title: 'Gadget Grooves',
    subtitle: 'Upbeat electronic music to get you moving.',
    imageUrl: 'https://picsum.photos/seed/doraegroove/300/300',
    href: '/playlist',
  },
    {
    id: 'pl5',
    title: 'Pocket Full of Jazz',
    subtitle: 'Smooth jazz for a sophisticated evening.',
    imageUrl: 'https://picsum.photos/seed/doraejazz/300/300',
    href: '/playlist',
  },
];

const newReleases = [
  {
    id: 'ar1',
    title: 'Cosmic Echoes',
    subtitle: 'By The Space Cadets',
    imageUrl: 'https://picsum.photos/seed/doraeartist1/300/300',
    href: '/artist',
  },
  {
    id: 'ar2',
    title: 'Blue Horizon',
    subtitle: 'By Seaside Dreamers',
    imageUrl: 'https://picsum.photos/seed/doraeartist2/300/300',
    href: '/artist',
  },
  {
    id: 'ar3',
    title: 'Future Funk',
    subtitle: 'By Robot Orchestra',
    imageUrl: 'https://picsum.photos/seed/doraeartist3/300/300',
    href: '/artist',
  },
   {
    id: 'ar4',
    title: 'City Lights',
    subtitle: 'By Midnight Cruisers',
    imageUrl: 'https://picsum.photos/seed/doraeartist4/300/300',
    href: '/artist',
  },
  {
    id: 'ar5',
    title: 'Another Dimension',
    subtitle: 'By Quantum Leap',
    imageUrl: 'https://picsum.photos/seed/doraeartist5/300/300',
    href: '/artist',
  },
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="flex h-full">
        <LeftSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Header />
          {/* Add pb-24 for the music player height + some padding */}
          <ScrollArea className="flex-1 px-6 pt-6 pb-28">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Featured Playlists
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {featuredPlaylists.map((playlist) => (
                    <ContentCard
                      key={playlist.id}
                      title={playlist.title}
                      subtitle={playlist.subtitle}
                      imageUrl={playlist.imageUrl}
                      href={playlist.href}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  New Releases
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {newReleases.map((release) => (
                    <ContentCard
                      key={release.id}
                      title={release.title}
                      subtitle={release.subtitle}
                      imageUrl={release.imageUrl}
                      href={release.href}
                    />
                  ))}
                </div>
              </section>
            </div>
          </ScrollArea>
        </main>
      </div>
      <MusicPlayerFooter />
    </div>
  );
};

export default HomePage;