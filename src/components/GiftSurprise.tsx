import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Gift, Heart } from 'lucide-react';

interface ChocolateCard {
  id: string;
  message: string;
  chocolateName: string;
  chocolateImage: string;
  cardTheme?: string;
}

const chocolateCards: ChocolateCard[] = [
  {
    id: 'kiss',
    message: "After seeing this gift you will kiss me 😚",
    chocolateName: 'Kismi',
    chocolateImage: './photos_data/KissMe.png',
    cardTheme: 'hearts'
  },
  {
    id: 'galaxy',
    message: "You are my Entire Galaxy ✨",
    chocolateName: 'Galaxy Smooth Milk',
    chocolateImage: './photos_data/Galaxy.png',
    cardTheme: 'space'
  },
  {
    id: 'beats',
    message: "My heart beats for you 💓",
    chocolateName: '5 Star',
    chocolateImage: './photos_data/Beats.png',
    cardTheme: 'hearts'
  },
  {
    id: 'rating',
    message: "You deserve a 5-star rating from me ⭐",
    chocolateName: '5 Star',
    chocolateImage: './photos_data/Rating.png',
    cardTheme: 'stars'
  },
  {
    id: 'lotte',
    message: "Hello my Lotte Choco Pie sweetest love 🎂",
    chocolateName: 'Lotte Choco Pie',
    chocolateImage: './photos_data/Lotte.png',
    cardTheme: 'sweet'
  },
  {
    id: 'melts',
    message: 'I melts like chocolate whenever I see you 🍫',
    chocolateName: 'Dairy Milk',
    chocolateImage: './photos_data/Melt.png',
    cardTheme: 'chocolate'
  }
];

export function GiftSurprise() {
  const [isOpened, setIsOpened] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const handleGiftClick = () => {
    setIsOpened(true);
    setTimeout(() => setShowCards(true), 600);
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
            <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl text-rose-600 mb-16 font-serif"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              I have a sweet surprise for you…
            </motion.p>

            <motion.button
              onClick={handleGiftClick}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity },
                rotate: { duration: 3, repeat: Infinity },
              }}
              className="relative"
            >
              <div className="relative w-48 h-48">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl shadow-2xl border-4 border-amber-300"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(250, 204, 21, 0.5)',
                      '0 0 40px rgba(250, 204, 21, 0.8)',
                      '0 0 20px rgba(250, 204, 21, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <Gift className="w-32 h-32 text-amber-700 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-rose-500 mt-12"
            >
              Tap the gift 🎁
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 w-full max-w-6xl"
          >
            {showCards && (
              <div className="space-y-16">
                {[...Array(4)].map((_, row) => (
                  <motion.div
                    key={row}
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div
                      className={`flex flex-col md:flex-row gap-8 w-full md:max-w-5xl justify-center ${
                        row % 2 === 1 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {chocolateCards.slice(row * 2, row * 2 + 2).map((card, index) => (
                        <motion.div
                          key={card.id}
                          initial={{
                            opacity: 0,
                            scale: 0,
                            x: row % 2 === 0 ? -100 : 100,
                            y: 100,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.1 + index * 0.15,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -10,
                          }}
                          className="flex-1 group cursor-pointer"
                        >
                          <motion.div
                            className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 shadow-2xl border-2 border-pink-200 group-hover:border-rose-400 transition-all overflow-hidden"
                            animate={{
                              y: [0, -8, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          >
                            {/* Gift Box Container - White Box Style */}
                            <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-xl border-2 border-pink-100 mb-4 min-h-[400px] flex flex-col">
                              {/* Gift Box Pattern Background - Wavy Lines */}
                              <div className="absolute inset-0 opacity-20 rounded-2xl">
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <pattern id={`pattern-${card.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                      <path d="M0,20 Q10,10 20,20 T40,20" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" fill="none"/>
                                      <path d="M0,25 Q10,15 20,25 T40,25" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" fill="none"/>
                                      <path d="M0,30 Q10,20 20,30 T40,30" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" fill="none"/>
                                    </pattern>
                                  </defs>
                                  <rect width="100%" height="100%" fill={`url(#pattern-${card.id})`} />
                                </svg>
                              </div>
                              
                              {/* Purple Filler Paper at Bottom */}
                              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-200/40 via-purple-200/20 to-transparent rounded-b-2xl"></div>
                              
                              {/* Card with Message */}
                              <div className="relative z-10 mb-4 flex-shrink-0">
                                <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg border-2 border-gray-300 relative">
                                  {/* Decorative elements based on theme */}
                                  {card.cardTheme === 'hearts' && (
                                    <div className="absolute top-2 right-2 text-red-400 text-xs">
                                      ❤️ ❤️
                                    </div>
                                  )}
                                  {card.cardTheme === 'space' && (
                                    <div className="absolute top-2 right-2 text-purple-400 text-xs">
                                      🪐 🚀 ⭐
                                    </div>
                                  )}
                                  {card.cardTheme === 'stars' && (
                                    <div className="absolute top-2 right-2 text-yellow-400 text-xs">
                                      ⭐ ⭐
                                    </div>
                                  )}
                                  {card.cardTheme === 'sweet' && (
                                    <div className="absolute top-2 right-2 text-pink-400 text-xs">
                                      🎂 💖
                                    </div>
                                  )}
                                  {card.cardTheme === 'chocolate' && (
                                    <div className="absolute top-2 right-2 text-amber-400 text-xs">
                                      🍫 💕
                                    </div>
                                  )}
                                  {card.cardTheme === 'infinity' && (
                                    <div className="absolute top-2 right-2 text-purple-400 text-xs">
                                      ♾️ ✨
                                    </div>
                                  )}
                                  <p className="text-sm md:text-base lg:text-lg text-gray-800 font-medium leading-relaxed text-center pr-8" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    {card.message}
                                  </p>
                                </div>
                              </div>
                              
                              {/* Chocolate Image - Prominently Displayed */}
                              <div className="relative z-10 flex-1 flex justify-center items-center">
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-3 md:p-4 shadow-inner border-2 border-amber-300 w-full max-w-[200px]">
                                  <div className="relative">
                                    <img 
                                      src={card.chocolateImage} 
                                      alt={card.chocolateName}
                                      className="w-full h-32 md:h-40 object-contain rounded-lg mx-auto"
                                      onError={(e) => {
                                        // Fallback to a placeholder if image fails to load
                                        e.currentTarget.src = `https://via.placeholder.com/200x200/FFB6C1/FFFFFF?text=${encodeURIComponent(card.chocolateName)}`;
                                      }}
                                    />
                                    <p className="text-center mt-2 text-xs md:text-sm font-bold text-amber-900 bg-amber-50 rounded px-2 py-1">{card.chocolateName}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Decorative gradient overlay on hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-pink-200/0 via-rose-200/0 to-pink-200/0 group-hover:from-pink-200/20 group-hover:via-rose-200/20 group-hover:to-pink-200/20 transition-all rounded-3xl"
                              initial={false}
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {showCards && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex justify-center mt-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpened(false);
                    setShowCards(false);
                  }}
                  className="px-10 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full text-lg font-semibold shadow-2xl"
                >
                  Read Again
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
