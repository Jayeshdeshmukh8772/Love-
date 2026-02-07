import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Clock, Calendar, Heart } from 'lucide-react';

export function TimeCounter() {
  const { content } = useContent();
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(content.relationshipStartDate);
      const now = new Date();
      const diff = now.getTime() - start.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeElapsed({ days, hours, minutes });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000);

    return () => clearInterval(interval);
  }, [content.relationshipStartDate]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.4),transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="inline-block mb-8"
        >
          <Heart className="w-16 h-16 text-rose-400 fill-rose-400" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-rose-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Time Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-pink-200"
          >
            <Calendar className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <motion.div
              key={timeElapsed.days}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-bold text-rose-600 mb-2"
            >
              {timeElapsed.days}
            </motion.div>
            <div className="text-gray-600 text-lg font-medium">Days</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-pink-200"
          >
            <Clock className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <motion.div
              key={timeElapsed.hours}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-bold text-rose-600 mb-2"
            >
              {timeElapsed.days * 24 + timeElapsed.hours}
            </motion.div>
            <div className="text-gray-600 text-lg font-medium">Hours</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-pink-200"
          >
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-4" />
            <div className="text-6xl font-bold text-rose-600 mb-2">∞</div>
            <div className="text-gray-600 text-lg font-medium">Memories</div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-gray-700 italic"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Every second with you is a treasure I hold close to my heart
        </motion.p>
      </motion.div>
    </section>
  );
}
