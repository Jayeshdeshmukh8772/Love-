import { motion } from 'framer-motion';
import { Mic, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';
import { useContent } from '../context/ContentContext';

export function VoiceMessage() {
  const { content } = useContent();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  if (!content.voiceMessageUrl) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="inline-block mb-6"
        >
          <Mic className="w-16 h-16 text-rose-500" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-rose-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          A Message From My Heart
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="group relative px-10 py-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full text-xl font-medium shadow-2xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-400"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <span className="relative flex items-center gap-3">
            {isPlaying ? (
              <>
                <Pause className="w-6 h-6" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                Tap to hear my voice
              </>
            )}
          </span>
        </motion.button>

        {content.voiceMessageUrl && (
          <audio
            ref={audioRef}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={content.voiceMessageUrl} type="audio/mpeg" />
          </audio>
        )}
      </motion.div>
    </section>
  );
}
