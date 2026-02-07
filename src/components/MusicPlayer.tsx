import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export function MusicPlayer({ musicUrl }: { musicUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="bg-white/20 backdrop-blur-lg p-4 rounded-full shadow-xl border border-white/30 hover:bg-white/30 transition-all"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-pink-200" />
        ) : (
          <VolumeX className="w-6 h-6 text-pink-200" />
        )}
      </motion.button>
      {musicUrl && (
        <audio ref={audioRef} loop>
          <source src={musicUrl} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
