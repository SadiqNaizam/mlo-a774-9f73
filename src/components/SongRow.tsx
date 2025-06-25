import React from 'react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { Play, PlusCircle, ListMusic, User, Mic2, Heart } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // e.g., "3:45"
  imageUrl: string;
}

interface SongRowProps {
  song: Song;
  index: number; // The track number in the list
}

const SongRow: React.FC<SongRowProps> = ({ song, index }) => {
  console.log(`SongRow loaded for: ${song.title}`);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent context menu from opening on play click
    console.log(`Playing song: ${song.title}`);
    // Future implementation: dispatch play action to a global state manager
  };

  return (
    <ContextMenuTrigger>
      <TableRow className="group text-sm cursor-pointer hover:bg-muted/50 data-[state=open]:bg-muted/50">
        <TableCell className="w-12 text-center text-muted-foreground">
          <div className="relative flex items-center justify-center h-10">
            <span className="group-hover:opacity-0 transition-opacity">{index + 1}</span>
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none"
              aria-label={`Play ${song.title}`}
            >
              <Play className="h-5 w-5 text-primary" fill="currentColor" />
            </button>
          </div>
        </TableCell>
        <TableCell className="font-medium">
          <div className="flex items-center gap-4">
            <img
              src={song.imageUrl || 'https://via.placeholder.com/40x40?text=D'}
              alt={song.album}
              className="h-10 w-10 rounded-sm object-cover"
              width="40"
              height="40"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-primary">{song.title}</span>
              <span className="text-xs text-muted-foreground">{song.artist}</span>
            </div>
          </div>
        </TableCell>
        <TableCell className="hidden md:table-cell text-muted-foreground">{song.album}</TableCell>
        <TableCell className="text-right text-muted-foreground">{song.duration}</TableCell>
      </TableRow>

      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Add to Queue
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add to Playlist
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <ListMusic className="mr-2 h-4 w-4" />
              New Playlist
            </ContextMenuItem>
            <ContextMenuSeparator />
            {/* These would be dynamically generated */}
            <ContextMenuItem>My Chill Mix</ContextMenuItem>
            <ContextMenuItem>Workout Jams</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          <Heart className="mr-2 h-4 w-4" />
          Save to Liked Songs
        </ContextMenuItem>
        <ContextMenuItem inset>
          <User className="mr-2 h-4 w-4" />
          Go to Artist
        </ContextMenuItem>
        <ContextMenuItem inset>
          <Mic2 className="mr-2 h-4 w-4" />
          Go to Album
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuTrigger>
  );
};

export default SongRow;