import { motion } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import { useState } from 'react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '8772') {
      onLogin();
    } else {
      setError('Invalid credentials');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full border border-pink-200"
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
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Lock className="w-16 h-16 text-rose-500" />
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500 absolute -top-2 -right-2" />
          </div>
        </motion.div>

        <h2 className="text-3xl font-serif text-center mb-2 text-rose-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          Admin Panel
        </h2>
        <p className="text-center text-gray-600 mb-8">Enter credentials to continue</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-white/50"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-white/50"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
