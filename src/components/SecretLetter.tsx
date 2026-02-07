import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Lock, X, Heart } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export function SecretLetter() {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="group relative px-8 py-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl text-xl font-medium shadow-2xl overflow-hidden mx-auto block"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-400"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative flex items-center gap-3">
            <Lock className="w-6 h-6" />
            Click only if you truly love me
            <Heart className="w-6 h-6 fill-current animate-pulse" />
          </span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ type: 'spring', duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-amber-50 via-white to-pink-50 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-amber-200 relative"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(255,251,235,0.9), rgba(255,245,245,0.9))',
              }}
            >
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-white transition-all shadow-lg z-10"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <div className="p-8 md:p-12 relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-8"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="inline-block"
                  >
                    <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-4" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-serif text-rose-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    My Secret Letter
                  </h2>
                  <p className="text-gray-600 italic">For your eyes only</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="prose prose-lg max-w-none"
                >
                  <div className="text-gray-800 leading-relaxed whitespace-pre-line text-lg space-y-4">
                    {content.secretLetter.split('\n').map((line, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className={line.trim() === '' ? 'h-4' : ''}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-12 flex justify-center gap-3"
                >
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
