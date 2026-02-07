import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OpeningScreenProps {
  onEnter: () => void;
}

export function OpeningScreen({ onEnter }: OpeningScreenProps) {
  const [showButton, setShowButton] = useState(false);
  const text = "For the most special girl in my life...";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-serif text-pink-200 mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-medium shadow-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative flex items-center gap-2">
              Open with love
              <Heart className="w-5 h-5 fill-current" />
            </span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
