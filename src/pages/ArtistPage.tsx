import React from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerFooter from '@/components/layout/MusicPlayerFooter';

// Custom Components
import ContentCard from '@/components/ContentCard';
import SongRow from '@/components/SongRow';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Icons
import { Play, CheckCircle } from 'lucide-react';

// --- Placeholder Data ---
const artist = {
  name: 'Official Hige Dandism',
  imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb8e4f454c6016839356f96603',
  bannerUrl: 'https://i.scdn.co/image/ab67618600001016578a635848c412579295531d'
};

const popularSongs = [
  { id: '1', title: 'Pretender', artist: 'Official Hige Dandism', album: 'Traveler', duration: '5:26', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734a368d4a1b0202a0a25666c8' },
  { id: '2', title: 'Cry Baby', artist: 'Official Hige Dandism', album: 'Editorial', duration: '4:01', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738722a578615a133d52677d24' },
  { id: '3', title: 'Mixed Nuts', artist: 'Official Hige Dandism', album: 'Mixed Nuts EP', duration: '3:33', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27367b6683525a7551069f061f7' },
  { id: '4', title: 'Yesterday', artist: 'Official Hige Dandism', album: 'Traveler', duration: '4:59', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734a368d4a1b0202a0a25666c8' },
  { id: '5', title: 'Subtitle', artist: 'Official Hige Dandism', album: 'Subtitle', duration: '4:05', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27376c268efc0f75e20739c1221' },
];

const discography = [
    { title: 'Editorial', subtitle: 'Album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738722a578615a133d52677d24', href: '/playlist' },
    { title: 'Traveler', subtitle: 'Album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734a368d4a1b0202a0a25666c8', href: '/playlist' },
    { title: 'Mixed Nuts EP', subtitle: 'EP', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27367b6683525a7551069f061f7', href: '/playlist' },
    { title: 'Universe', subtitle: 'Single', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2737a285888a71676646b9a8451', href: '/playlist' },
    { title: 'I LOVE...', subtitle: 'Single', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27357c32b509015c5453e878512', href: '/playlist' },
    { title: 'Report', subtitle: 'Album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273f5546d1b46a75f858273a0c5', href: '/playlist' },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto" style={{ paddingBottom: '96px' }}>
          {/* Artist Banner */}
          <section
            className="relative flex h-80 items-end bg-cover bg-center p-8"
            style={{ backgroundImage: `linear-gradient(to top, rgba(18, 18, 18, 0.9), transparent), url(${artist.bannerUrl})` }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-8 w-8 text-blue-400" fill="currentColor" />
                <span className="text-sm font-semibold">Verified Artist</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-extrabold tracking-tighter">{artist.name}</h1>
            </div>
          </section>

          {/* Page Content */}
          <div className="p-8 space-y-12 bg-gradient-to-b from-zinc-900/50 via-zinc-900 to-black">
            <div className="flex items-center gap-6">
                <Button className="bg-blue-500 hover:bg-blue-400 text-white rounded-full p-6">
                    <Play className="h-6 w-6 fill-white" />
                </Button>
                <Button variant="outline" className="border-zinc-500 text-white hover:border-white hover:text-white hover:bg-transparent">
                    Follow
                </Button>
            </div>

            {/* Popular Songs */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Popular</h2>
              <Table>
                <TableHeader className="border-none">
                  <TableRow className="text-muted-foreground hover:bg-transparent border-none">
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Album</TableHead>
                    <TableHead className="text-right pr-8">Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border-none">
                  {popularSongs.map((song, index) => (
                    <SongRow key={song.id} song={song} index={index} />
                  ))}
                </TableBody>
              </Table>
            </section>

            {/* Discography */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Discography</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {discography.map((item) => (
                  <ContentCard
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    imageUrl={item.imageUrl}
                    href={item.href} // Navigates to /playlist as per example
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <MusicPlayerFooter />
    </div>
  );
};

export default ArtistPage;