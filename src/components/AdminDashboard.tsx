import { motion } from 'framer-motion';
import { LogOut, Save, Heart } from 'lucide-react';
import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { ContentData } from '../types/content';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const { content, updateContent } = useContent();
  const [editedContent, setEditedContent] = useState<ContentData>(content);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateContent(editedContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateValentineDay = (id: string, field: string, value: string) => {
    setEditedContent({
      ...editedContent,
      valentineDays: editedContent.valentineDays.map(day =>
        day.id === id ? { ...day, [field]: value } : day
      ),
    });
  };

  const updateStoryMilestone = (id: string, field: string, value: string) => {
    setEditedContent({
      ...editedContent,
      storyMilestones: editedContent.storyMilestones.map(milestone =>
        milestone.id === id ? { ...milestone, [field]: value } : milestone
      ),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
            <h1 className="text-4xl font-serif text-rose-600" style={{ fontFamily: "'Playfair Display', serif" }}>
              Admin Dashboard
            </h1>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium shadow-lg"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLogout}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-medium shadow-lg"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </motion.button>
          </div>
        </div>

        {saved && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 bg-green-100 border border-green-300 text-green-700 px-6 py-4 rounded-xl text-center font-medium"
          >
            Changes saved successfully!
          </motion.div>
        )}

        <div className="space-y-8">
          <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-pink-200">
            <h2 className="text-2xl font-semibold text-rose-600 mb-6">Valentine Week Days</h2>
            <div className="space-y-6">
              {editedContent.valentineDays.map((day) => (
                <div key={day.id} className="border-b border-pink-100 pb-6 last:border-b-0">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">{day.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        value={day.message}
                        onChange={(e) => updateValentineDay(day.id, 'message', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={day.image || ''}
                        onChange={(e) => updateValentineDay(day.id, 'image', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-pink-200">
            <h2 className="text-2xl font-semibold text-rose-600 mb-6">Story Timeline</h2>
            <div className="space-y-6">
              {editedContent.storyMilestones.map((milestone) => (
                <div key={milestone.id} className="border-b border-pink-100 pb-6 last:border-b-0">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={milestone.title}
                        onChange={(e) => updateStoryMilestone(milestone.id, 'title', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={milestone.description}
                        onChange={(e) => updateStoryMilestone(milestone.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-pink-200">
            <h2 className="text-2xl font-semibold text-rose-600 mb-6">Other Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Relationship Start Date</label>
                <input
                  type="datetime-local"
                  value={editedContent.relationshipStartDate.slice(0, 16)}
                  onChange={(e) => setEditedContent({ ...editedContent, relationshipStartDate: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secret Letter</label>
                <textarea
                  value={editedContent.secretLetter}
                  onChange={(e) => setEditedContent({ ...editedContent, secretLetter: e.target.value })}
                  rows={10}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none resize-none font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Voice Message URL</label>
                <input
                  type="text"
                  value={editedContent.voiceMessageUrl || ''}
                  onChange={(e) => setEditedContent({ ...editedContent, voiceMessageUrl: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Background Music URL</label>
                <input
                  type="text"
                  value={editedContent.backgroundMusicUrl || ''}
                  onChange={(e) => setEditedContent({ ...editedContent, backgroundMusicUrl: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none"
                  placeholder="https://..."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
