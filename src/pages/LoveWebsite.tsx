import { useState } from 'react';
import { Link } from 'react-router-dom';
import { OpeningScreen } from '../components/OpeningScreen';
import { FloatingHearts } from '../components/FloatingHearts';
import { MusicPlayer } from '../components/MusicPlayer';
import { ValentineWeek } from '../components/ValentineWeek';
import { StoryTimeline } from '../components/StoryTimeline';
import { TimeCounter } from '../components/TimeCounter';
import { SecretLetter } from '../components/SecretLetter';
import { VoiceMessage } from '../components/VoiceMessage';
import { ProposalScene } from '../components/ProposalScene';
import { useContent } from '../context/ContentContext';

export function LoveWebsite() {
  const [showMain, setShowMain] = useState(false);
  const { content } = useContent();

  if (!showMain) {
    return <OpeningScreen onEnter={() => setShowMain(true)} />;
  }

  return (
    <div className="relative">
      <FloatingHearts />
      <MusicPlayer musicUrl={content.backgroundMusicUrl} />

      <div className="relative">
        <ValentineWeek />
        <StoryTimeline />
        <TimeCounter />
        <SecretLetter />
        <VoiceMessage />
        <ProposalScene />
        
        <div className="text-center mt-12 pb-20">
          <Link to="/gift">
            <button className="px-8 py-4 bg-pink-500 text-white rounded-2xl shadow-xl hover:scale-105 transition text-lg font-semibold">
              🎁 Open Your Surprise
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
