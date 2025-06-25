import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  PictureInPicture2,
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const MusicPlayerFooter: React.FC = () => {
  console.log('MusicPlayerFooter loaded');
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-24 bg-zinc-900 border-t border-zinc-800 text-white p-4">
      <div className="grid grid-cols-3 h-full items-center">
        {/* Track Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://picsum.photos/seed/doraemon/64/64"
            alt="Album Art"
            className="h-16 w-16 rounded-md"
          />
          <div>
            <p className="font-semibold text-sm">Doraemon no Uta</p>
            <p className="text-xs text-zinc-400">Kumiko Osugi</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-4 h-8 w-8 text-zinc-400 hover:text-white">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full bg-white text-black hover:bg-gray-200"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-5 w-5 fill-black" /> : <Play className="h-5 w-5 fill-black" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-lg">
            <span className="text-xs text-zinc-400">1:12</span>
            <Slider defaultValue={[45]} max={100} step={1} className="w-full" />
            <span className="text-xs text-zinc-400">2:40</span>
          </div>
        </div>

        {/* Volume and Other Controls */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <PictureInPicture2 className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 w-32">
            <Volume2 className="h-5 w-5 text-zinc-400" />
            <Slider defaultValue={[80]} max={100} step={1} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MusicPlayerFooter;