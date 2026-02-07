import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
          initial={{ y: '100vh', rotate: 0 }}
          animate={{
            y: '-20vh',
            rotate: 360,
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          <Heart className="fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
