import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export function ValentineWeek() {
  const { content } = useContent();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const selectedDayData = content.valentineDays.find(day => day.id === selectedDay);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-4 text-rose-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Valentine Journey
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Eight days of pure love and devotion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.valentineDays.map((day, index) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedDay(day.id)}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 hover:border-pink-300 transition-all h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={day.image}
                    alt={day.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-rose-600 mb-2 text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  {day.title}
                </h3>
                <p className="text-gray-600 text-center text-sm line-clamp-2">
                  {day.message}
                </p>
                <div className="mt-4 flex justify-center">
                  <Heart className="w-5 h-5 text-pink-400 fill-pink-400 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedDay && selectedDayData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedDay(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white to-pink-50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-pink-200 relative"
            >
              <button
                onClick={() => setSelectedDay(null)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-white transition-all shadow-lg z-10"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <div className="p-8">
                {selectedDayData.image && (
                  <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={selectedDayData.image}
                      alt={selectedDayData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <h2 className="text-4xl md:text-5xl font-serif text-rose-600 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {selectedDayData.title}
                </h2>

                <div className="relative">
                  <div className="absolute -left-4 top-0 text-6xl text-pink-300 opacity-50">"</div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center px-8" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    {selectedDayData.message}
                  </p>
                  <div className="absolute -right-4 bottom-0 text-6xl text-pink-300 opacity-50">"</div>
                </div>

                <div className="mt-8 flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
