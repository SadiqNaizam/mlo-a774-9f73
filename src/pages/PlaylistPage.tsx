import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerFooter from '@/components/layout/MusicPlayerFooter';
import SongRow from '@/components/SongRow';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock, Play } from 'lucide-react';

// Placeholder data for the playlist page
const playlistDetails = {
  title: "Doraemon's Pocket Hits",
  description: "A collection of classic and uplifting tunes, straight from a 4th-dimensional pocket.",
  creator: "Dorae User",
  imageUrl: "https://i.pinimg.com/originals/8e/d3/c7/8ed3c7b74457e5b539c277353b3424d8.jpg",
  songCount: 5,
  duration: "about 15 min"
};

const sampleSongs = [
  {
    id: '1',
    title: 'Doraemon no Uta',
    artist: 'Kumiko Osugi',
    album: 'Doraemon Original Soundtrack',
    duration: '2:55',
    imageUrl: 'https://picsum.photos/seed/doraemon1/40/40',
  },
  {
    id: '2',
    title: 'Yume wo Kanaete Doraemon',
    artist: 'MAO',
    album: 'Modern Doraemon Hits',
    duration: '4:06',
    imageUrl: 'https://picsum.photos/seed/doraemon2/40/40',
  },
  {
    id: '3',
    title: 'Aoi Sora wa Pocket sa',
    artist: 'Kumiko Osugi',
    album: 'Vintage Anime Tunes',
    duration: '3:15',
    imageUrl: 'https://picsum.photos/seed/doraemon3/40/40',
  },
  {
    id: '4',
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    album: 'Stand by Me Doraemon OST',
    duration: '5:14',
    imageUrl: 'https://picsum.photos/seed/doraemon4/40/40',
  },
  {
    id: '5',
    title: 'Boku Doraemon',
    artist: 'Nobuyo Ōyama',
    album: 'Doraemon Classics',
    duration: '2:30',
    imageUrl: 'https://picsum.photos/seed/doraemon5/40/40',
  },
];

const PlaylistPage = () => {
  console.log('PlaylistPage loaded');

  return (
    <div className="relative h-screen w-full flex bg-black text-white overflow-hidden">
      <LeftSidebar />
      <div className="flex-1 flex flex-col bg-zinc-900">
        <Header />
        <main className="flex-1 overflow-y-auto" style={{ background: 'linear-gradient(to bottom, #4A90E2 0%, #121212 30%)' }}>
          <div className="p-8">
            {/* Playlist Header Section */}
            <section className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
              <img
                src={playlistDetails.imageUrl}
                alt={`Cover for ${playlistDetails.title}`}
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-md shadow-2xl"
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-sm font-bold uppercase">Playlist</p>
                <h1 className="text-4xl md:text-7xl font-black text-white mt-2 break-words">
                  {playlistDetails.title}
                </h1>
                <p className="text-muted-foreground mt-4 text-sm">
                  {playlistDetails.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <AvatarFallback>DU</AvatarFallback>
                  </Avatar>
                  <span className="font-bold">{playlistDetails.creator}</span>
                  <span className="hidden sm:inline">• {playlistDetails.songCount} songs,</span>
                  <span className="text-muted-foreground hidden sm:inline">{playlistDetails.duration}</span>
                </div>
              </div>
            </section>

            {/* Action Bar */}
            <section className="mb-8">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full h-14 w-14 p-0">
                <Play className="h-7 w-7 fill-black text-black" />
              </Button>
            </section>

            {/* Track Table */}
            <section className="bg-black/20 p-4 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead className="w-12 text-center text-muted-foreground">#</TableHead>
                    <TableHead className="text-muted-foreground">Title</TableHead>
                    <TableHead className="hidden md:table-cell text-muted-foreground">Album</TableHead>
                    <TableHead className="text-right">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleSongs.map((song, index) => (
                    <SongRow key={song.id} song={song} index={index} />
                  ))}
                </TableBody>
              </Table>
            </section>
          </div>
        </main>
      </div>
      <MusicPlayerFooter />
    </div>
  );
};

export default PlaylistPage;