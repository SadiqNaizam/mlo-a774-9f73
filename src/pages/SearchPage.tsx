import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerFooter from '@/components/layout/MusicPlayerFooter';

// Custom UI Components
import ContentCard from '@/components/ContentCard';
import SongRow from '@/components/SongRow';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Placeholder data simulating a search result
const sampleSongs = [
  { id: '1', title: 'Yume wo Kanaete Doraemon', artist: 'mao', album: 'Doraemon Theme Songs', duration: '4:06', imageUrl: 'https://picsum.photos/seed/song1/40/40' },
  { id: '2', 'title': 'Boku Doraemon', 'artist': 'Nobuyo Ōyama', 'album': 'Classic Doraemon Hits', 'duration': '2:15', imageUrl: 'https://picsum.photos/seed/song2/40/40' },
  { id: '3', 'title': 'Aoi Sora wa Pocket sa', 'artist': 'Kumiko Osugi', 'album': 'Vintage Doraemon', 'duration': '3:30', imageUrl: 'https://picsum.photos/seed/song3/40/40' },
];

const sampleArtists = [
  { id: 'a1', title: 'mao', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/artist1/150/150', href: '/artist' },
  { id: 'a2', title: 'Kumiko Osugi', subtitle: 'Artist', imageUrl: 'https://picsum.photos/seed/artist2/150/150', href: '/artist' },
];

const sampleAlbums = [
  { id: 'p1', title: 'Doraemon Theme Songs', subtitle: 'Album', imageUrl: 'https://picsum.photos/seed/album1/150/150', href: '/playlist' },
  { id: 'p2', title: 'Classic Doraemon Hits', subtitle: 'Album', imageUrl: 'https://picsum.photos/seed/album2/150/150', href: '/playlist' },
  { id: 'p3', title: 'Vintage Doraemon', subtitle: 'Album', imageUrl: 'https://picsum.photos/seed/album3/150/150', href: '/playlist' },
];


const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="relative flex h-screen overflow-hidden bg-zinc-900 text-white">
      <LeftSidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6 pb-28"> {/* Padding bottom to not hide content behind footer */}
          {/* Search Input */}
          <div className="relative mb-8">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What do you want to listen to?"
              className="pl-12 h-12 text-lg bg-zinc-800 border-transparent focus-visible:ring-blue-500 focus-visible:ring-2 focus-visible:ring-offset-0"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          {/* Conditional rendering for search results */}
          {searchValue ? (
            <div className="space-y-10">
              {/* Songs Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Songs</h2>
                <Table>
                  <TableHeader>
                    <TableRow className="border-zinc-800">
                      <TableHead className="w-12">#</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden md:table-cell">Album</TableHead>
                      <TableHead className="text-right">Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleSongs.map((song, index) => (
                      <SongRow key={song.id} song={song} index={index} />
                    ))}
                  </TableBody>
                </Table>
              </section>

              {/* Artists Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {sampleArtists.map((artist) => (
                    <ContentCard
                      key={artist.id}
                      title={artist.title}
                      subtitle={artist.subtitle}
                      imageUrl={artist.imageUrl}
                      href={artist.href}
                    />
                  ))}
                </div>
              </section>

              {/* Albums Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Albums</h2>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {sampleAlbums.map((album) => (
                    <ContentCard
                      key={album.id}
                      title={album.title}
                      subtitle={album.subtitle}
                      imageUrl={album.imageUrl}
                      href={album.href}
                    />
                  ))}
                </div>
              </section>
            </div>
          ) : (
             <div className="text-center text-muted-foreground mt-20">
                <h2 className="text-2xl font-bold mb-2 text-white">Find your favorite music</h2>
                <p>Search for songs, artists, albums, and more.</p>
             </div>
          )}
        </main>
      </div>

      <MusicPlayerFooter />
    </div>
  );
};

export default SearchPage;