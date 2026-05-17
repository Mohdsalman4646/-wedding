import { useState, useEffect, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const [guestName, setGuestName] = useState('');
  const [showInvitation, setShowInvitation] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [welcomeLeaving, setWelcomeLeaving] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    if (guestName.trim()) {
      // play entry music from public/MUSIC.mp3 unless muted
      try {
        if (!muted && audioRef.current) {
          audioRef.current.currentTime = 0;
          const p = audioRef.current.play();
          if (p && p.catch) p.catch(() => {});
        }
      } catch (err) {
        // ignore playback errors
      }
      // start welcome screen closing animation, then reveal invitation
      setWelcomeLeaving(true);
      setTimeout(() => {
        setShowInvitation(true);
        setWelcomeLeaving(false);
      }, 900); // match animation duration
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  useEffect(() => {
    if (showInvitation) {
      // small delay so the invitation mounts then curtains animate
      const t = setTimeout(() => setCurtainOpen(true), 60);
      return () => clearTimeout(t);
    } else {
      setCurtainOpen(false);
    }
  }, [showInvitation]);

  // initialize audio once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/MUSIC.mp3');
      audioRef.current.preload = 'auto';
      audioRef.current.loop = true;
      audioRef.current.volume = 0; // start silent for fade-in
      audioRef.current.muted = muted;
    }
    return () => {
      // do not unload so it can be reused; cleanup not strictly necessary
    };
  }, []);

  // keep muted state synced
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted;
    if (muted) {
      try { audioRef.current.pause(); } catch (e) {}
    } else {
      // if invitation already open, ensure playback resumes
      if (showInvitation) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [muted]);

  // when the invitation opens, auto-start background track and fade in
  useEffect(() => {
    if (!showInvitation || !audioRef.current || muted) return;
    try {
      audioRef.current.currentTime = 0;
      const p = audioRef.current.play();
      if (p && p.catch) p.catch(() => {});

      // fade-in to target volume over 2s
      const duration = 2000;
      const start = performance.now();
      const from = audioRef.current.volume || 0;
      const to = 0.8;
      let rafId;
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        audioRef.current.volume = from + (to - from) * t;
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    } catch (e) {
      // ignore
    }
  }, [showInvitation, muted]);

  return (
    <div className="min-h-screen bg-dark-navy relative overflow-hidden">
      <ParticleBackground />
      
      {!showInvitation ? (
        // Welcome Screen
        <div className={`welcome-screen ${welcomeLeaving ? 'closing-vertical' : ''}`}>
          <div className="welcome-container">
            <div className="bismillah-welcome">بِسْمِ اللَّهِ</div>
            <h1 className="welcome-heading">You Are Invited</h1>
            <p className="welcome-subtitle">A celebration of love, family & blessings</p>
            
            <div className="input-wrapper">
              <div className="input-container">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Enter your name to unveil the celebration"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="name-input"
                />
              </div>
              <button onClick={handleEnter} className="enter-button">
                ENTER
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Full Invitation
        <div className="invitation-screen">
          <div className={`curtain left ${curtainOpen ? 'opened' : ''}`}></div>
          <div className={`curtain right ${curtainOpen ? 'opened' : ''}`}></div>
          <div className={`invitation-card ${showInvitation ? 'open-vertical' : ''}`}>
            {/* Top border ornament */}
            <div className="top-border-ornament"></div>

            {/* Islamic greeting - Bismillah */}
            <div className="full-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
            <p className="bismillah-english">In the name of Allah</p>
            <p className="bismillah-english">The Most Beneficent, The Most Merciful</p>

            {/* Decorative separator */}
            <div className="separator-line"></div>

            {/* Blessings section */}
            <p className="blessings-heading">With the blessings of :</p>
            <p className="blessings-names">Late Mrs. & Mr. Mohammed Khader Shareef Sahab</p>
            <p className="blessings-names">Late Mrs. & Mr. Mohammed Afzal Ghouri Sahab</p>

            {/* Parents */}
            <h2 className="parents-name">Mrs. & Mr. Mohammed Rahmath Shareef</h2>

            {/* Main invitation text */}
            <p className="invitation-text">
              Solicits your gracious presence on the auspicious occasion of the
            </p>
            <div className="event-type">Valima Ceremony</div>
            <p className="invitation-text">of their elder son</p>

            {/* Groom details */}
            <h1 className="groom-name">Mohammed Saqlain Shareef</h1>
            <p className="profession">MBA, Working as DC in KSA</p>

            {/* With text */}
            <p className="with-text">With</p>

            {/* Bride info */}
            <p className="daughter-text">Daughter of</p>
           

            {/* Bride's parents */}
            <h3 className="father-name">Mrs. & Mr. Mohammed Majid Khan</h3>
            <p className="profession">Merchant Navy</p>

            {/* Insha Allah */}
            <p className="insha-allah">In Sha Allah</p>

            {/* Date and Time */}
            <div className="date-section">
              <div className="date-row">
                <span className="date-left">On Wednesday,</span>
                <div className="date-box">
                  <span className="date-day-large">03RD</span>
                </div>
                <span className="date-right">JUNE 2026</span>
              </div>
            </div>

            <p className="hijri-date">(16th Zilhajja 1447 Hijri)</p>
            <p className="dinner-time">Dinner: 9:00 p.m.</p>

            <div className="date-separator"></div>

            {/* Venue */}
            <div className="event-box valima-box">
              <p className="venue-location">At : WHITE PALACE,</p>
              <p className="venue-location">Near Moghal Engineering College,</p>
              <p className="venue-location">Opp. Maheshwari Oil Mill, Bandlaguda, Hyd.</p>
            </div>

            {/* NIKAH CEREMONY */}
            <div className="event-box nikah-box">
              <h3 className="nikah-title">Nikah</h3>
              
              <div className="nikah-date-section">
                <span className="nikah-date-text">On Monday,</span>
                <span className="nikah-date-day">1st. June 2026</span>
              </div>

              <div className="nikah-venue-box">
                <p className="nikah-detail"><strong>Nikah :</strong> After Zohar,</p>
                <p className="nikah-detail">at Masjid-e-Suffah Ahle Hadees,</p>
                <p className="nikah-detail">Moin Bagh Road, Riyasat Nager, Hyd.</p>
              </div>

              <p className="nikah-dinner">Dinner: 9:00 p.m.</p>

              <div className="nikah-venue-box">
                <p className="nikah-detail"><strong>O R, PALACE,</strong></p>
                <p className="nikah-detail">Beside White Palace,</p>
                <p className="nikah-detail">Opp. Moghal Engineering College,</p>
                <p className="nikah-detail">Bandlaguda, Hyd.</p>
              </div>
            </div>

            {/* Footer */}
            <p className="blessings-heading">With best compiments from : Near & Dear</p>

            {/* Bottom border ornament */}
            <div className="bottom-border-ornament"></div>
          </div>

          {/* Mute Button */}
          <button
            className="mute-button"
            title={muted ? 'Unmute audio' : 'Mute audio'}
            onClick={() => setMuted((s) => !s)}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
