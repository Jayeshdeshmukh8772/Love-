import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export function ProposalScene() {
  const { content } = useContent();
  const [currentLine, setCurrentLine] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = () => {
    setAnswered(true);
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 text-center max-w-4xl"
          >
            <div className="space-y-8 mb-16">
              {content.proposalText.slice(0, currentLine + 1).map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 1.5 }}
                  onAnimationComplete={() => {
                    if (index === currentLine && currentLine < content.proposalText.length - 1) {
                      setTimeout(() => setCurrentLine(currentLine + 1), 1000);
                    } else if (index === content.proposalText.length - 1) {
                      setTimeout(() => setShowButtons(true), 1000);
                    }
                  }}
                  className={`${
                    index === content.proposalText.length - 1
                      ? 'text-5xl md:text-7xl font-serif text-pink-200'
                      : 'text-3xl md:text-5xl text-pink-300'
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {showButtons && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleAnswer}
                  className="px-12 py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-semibold shadow-2xl flex items-center gap-3"
                >
                  <Heart className="w-7 h-7 fill-current" />
                  Yes
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleAnswer}
                  className="px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-2xl font-semibold shadow-2xl flex items-center gap-3"
                >
                  <Heart className="w-7 h-7 fill-current" />
                  Always
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 1 }}
            className="relative z-10 text-center"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * 360) / 50) * 300,
                  y: Math.sin((i * 360) / 50) * 300,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.02,
                }}
              >
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
              </motion.div>
            ))}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-8"
            >
              <Sparkles className="w-24 h-24 text-yellow-300 mx-auto" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-5xl md:text-7xl font-serif text-pink-200 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Thank you for loving me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-2xl md:text-3xl text-pink-300 italic"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              You are my forever and always
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-12 flex justify-center gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
