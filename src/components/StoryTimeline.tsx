import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export function StoryTimeline() {
  const { content } = useContent();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-8 h-8 text-pink-300 fill-pink-300" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-4 text-rose-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Beautiful Story
        </h2>
        <p className="text-center text-gray-600 mb-20 text-lg">
          Every moment with you is a memory worth treasuring
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-pink-300 transform -translate-x-1/2" />

          {content.storyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'pr-8 md:pr-1/2 text-right' : 'pl-8 md:pl-1/2 text-left'
              }`}
            >
              <motion.div
                className="absolute left-1/2 top-0 w-6 h-6 bg-rose-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-rose-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-pink-200 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <h3 className="text-2xl font-semibold text-rose-600 mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  {milestone.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-center pt-8"
          >
            <div className="absolute left-1/2 top-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-xl">
              <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
