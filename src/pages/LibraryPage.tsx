import React from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import MusicPlayerFooter from '@/components/layout/MusicPlayerFooter';

// Custom Components
import ContentCard from '@/components/ContentCard';
import SongRow from '@/components/SongRow';

// Shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from '@/components/ui/scroll-area';

// Icons
import { Clock } from 'lucide-react';

// Placeholder Data
const playlists = [
  { id: 'pl1', title: 'Doraemon\'s Pocket Mix', subtitle: 'Gadgets and Grooves', imageUrl: 'https://picsum.photos/seed/playlist1/300/300', href: '/playlist' },
  { id: 'pl2', title: 'Nobita\'s Naptime', subtitle: 'Soothing sounds for study', imageUrl: 'https://picsum.photos/seed/playlist2/300/300', href: '/playlist' },
  { id: 'pl3', title: 'Shizuka\'s Violin Classics', subtitle: 'Elegant & Timeless', imageUrl: 'https://picsum.photos/seed/playlist3/300/300', href: '/playlist' },
  { id: 'pl4', title: 'Gian\'s Karaoke Hits', subtitle: 'Loud and proud', imageUrl: 'https://picsum.photos/seed/playlist4/300/300', href: '/playlist' },
  { id: 'pl5', title: 'Suneo\'s Rich Beats', subtitle: 'Expensive taste in music', imageUrl: 'https://picsum.photos/seed/playlist5/300/300', href: '/playlist' },
];

const likedSongs = [
  { id: 's1', title: 'Yume wo Kanaete Doraemon', artist: 'mao', album: 'Doraemon OST', duration: '4:06', imageUrl: 'https://picsum.photos/seed/song1/40/40' },
  { id: 's2', title: 'Hoshizora no Rhapsody', artist: 'Dora-Band', album: 'Space Adventures', duration: '3:52', imageUrl: 'https://picsum.photos/seed/song2/40/40' },
  { id: 's3', title: 'Anywhere Door Drift', artist: 'Time Patrol', album: 'Chronoscapes', duration: '2:45', imageUrl: 'https://picsum.photos/seed/song3/40/40' },
  { id: 's4', title: 'Bell\'s Echo', artist: 'Dorami', album: 'Future Funk', duration: '3:15', imageUrl: 'https://picsum.photos/seed/song4/40/40' },
  { id: 's5', title: 'Memory Bread Memories', artist: 'Noby', album: 'Sentimental Circuits', duration: '5:01', imageUrl: 'https://picsum.photos/seed/song5/40/40' },
];

const savedAlbums = [
    { id: 'al1', title: '22nd Century Sounds', subtitle: 'Dora-Band', imageUrl: 'https://picsum.photos/seed/album1/300/300', href: '/artist' },
    { id: 'al2', title: 'Time Machine Travels', subtitle: 'The Sewashi Tapes', imageUrl: 'https://picsum.photos/seed/album2/300/300', href: '/artist' },
    { id: 'al3', title: 'Gadget Grooves', subtitle: 'Various Artists', imageUrl: 'https://picsum.photos/seed/album3/300/300', href: '/artist' },
];

const LibraryPage = () => {
    console.log('LibraryPage loaded');

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-white">
            <div className="flex h-full">
                <LeftSidebar />
                <div className="flex-1 flex flex-col h-full">
                    <Header />
                    <ScrollArea className="flex-1 bg-gradient-to-b from-blue-900/50 to-zinc-900">
                        {/* Add padding-bottom to ensure content doesn't hide behind the music player */}
                        <div className="p-6 pb-28">
                            <h1 className="text-4xl font-bold text-white mb-8">Library</h1>

                            <Tabs defaultValue="playlists" className="w-full">
                                <TabsList className="bg-transparent border-b-0 p-0">
                                    <TabsTrigger value="playlists" className="text-zinc-300 data-[state=active]:bg-zinc-700 data-[state=active]:text-white rounded-md">Playlists</TabsTrigger>
                                    <TabsTrigger value="liked" className="text-zinc-300 data-[state=active]:bg-zinc-700 data-[state=active]:text-white rounded-md">Liked Songs</TabsTrigger>
                                    <TabsTrigger value="albums" className="text-zinc-300 data-[state=active]:bg-zinc-700 data-[state=active]:text-white rounded-md">Albums</TabsTrigger>
                                </TabsList>

                                {/* Playlists Tab */}
                                <TabsContent value="playlists" className="mt-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                                        {playlists.map(playlist => (
                                            <ContentCard key={playlist.id} {...playlist} />
                                        ))}
                                    </div>
                                </TabsContent>

                                {/* Liked Songs Tab */}
                                <TabsContent value="liked" className="mt-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="border-zinc-800 hover:bg-transparent">
                                                <TableHead className="w-12 text-zinc-400">#</TableHead>
                                                <TableHead className="text-zinc-400">Title</TableHead>
                                                <TableHead className="hidden md:table-cell text-zinc-400">Album</TableHead>
                                                <TableHead className="text-right text-zinc-400">
                                                    <Clock className="h-4 w-4 inline-block" />
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody className="border-none">
                                            {likedSongs.map((song, index) => (
                                                <SongRow key={song.id} song={song} index={index} />
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TabsContent>
                                
                                {/* Albums Tab */}
                                <TabsContent value="albums" className="mt-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                                        {savedAlbums.map(album => (
                                            <ContentCard key={album.id} {...album} />
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </ScrollArea>
                </div>
            </div>
            <MusicPlayerFooter />
        </div>
    );
};

export default LibraryPage;