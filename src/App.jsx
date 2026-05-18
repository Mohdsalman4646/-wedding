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

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/MUSIC.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.8;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Handle Enter
  const handleEnter = () => {
    if (guestName.trim()) {

      // Start music only after button click
      if (!muted && audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log('Audio playback blocked:', err);
        });
      }

      // Welcome animation
      setWelcomeLeaving(true);

      setTimeout(() => {
        setShowInvitation(true);
        setWelcomeLeaving(false);
      }, 900);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  // Curtain animation
  useEffect(() => {
    if (showInvitation) {
      const t = setTimeout(() => setCurtainOpen(true), 60);
      return () => clearTimeout(t);
    } else {
      setCurtainOpen(false);
    }
  }, [showInvitation]);

  // Mute / Unmute
  useEffect(() => {
    if (!audioRef.current) return;

    if (muted) {
      audioRef.current.pause();
    } else {
      if (showInvitation) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [muted, showInvitation]);

  return (
    <div className="min-h-screen bg-dark-navy relative overflow-hidden">
      <ParticleBackground />

      {!showInvitation ? (
        // Welcome Screen
        <div className={`welcome-screen ${welcomeLeaving ? 'closing-vertical' : ''}`}>
          <div className="welcome-container">

            <div className="bismillah-welcome">بِسْمِ اللَّهِ</div>

            <h1 className="welcome-heading">
              You Are Invited
            </h1>

            <p className="welcome-subtitle">
              A celebration of love, family & blessings
            </p>

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

              <button
                onClick={handleEnter}
                className="enter-button"
              >
                ENTER
              </button>

            </div>
          </div>
        </div>
      ) : (

        // Invitation Screen
        <div className="invitation-screen">

          {/* Curtains */}
          <div className={`curtain left ${curtainOpen ? 'opened' : ''}`}></div>
          <div className={`curtain right ${curtainOpen ? 'opened' : ''}`}></div>

          {/* Main Invitation */}
          <div className={`invitation-card ${showInvitation ? 'open-vertical' : ''}`}>

            <div className="top-border-ornament"></div>

            <div className="full-bismillah">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            <p className="bismillah-english">
              In the name of Allah
            </p>

            <p className="bismillah-english">
              The Most Beneficent, The Most Merciful
            </p>

            <div className="separator-line"></div>

            <p className="blessings-heading">
              With the blessings of :
            </p>

            <p className="blessings-names">
              Late Mrs. & Mr. Mohammed Khader Shareef Sahab
            </p>

            <p className="blessings-names">
              Late Mrs. & Mr. Mohammed Afzal Ghouri Sahab
            </p>

            <h2 className="parents-name">
              Mrs. & Mr. Mohammed Rahmath Shareef
            </h2>

            <p className="invitation-text">
              Solicits your gracious presence on the auspicious occasion of the
            </p>

            <div className="event-type">
              Valima Ceremony
            </div>

            <p className="invitation-text">
              of their elder son
            </p>

            <h1 className="groom-name">
              Mohammed Saqlain Shareef
            </h1>

            <p className="profession">
              MBA, Working as DC in KSA
            </p>

            <p className="with-text">With</p>

            <p className="daughter-text">
              Daughter of
            </p>

            <h3 className="father-name">
              Mrs. & Mr. Mohammed Majid Khan
            </h3>

            <p className="profession">
              Merchant Navy
            </p>

            <p className="insha-allah">
              In Sha Allah
            </p>

            <div className="date-section">
              <div className="date-row">

                <span className="date-left">
                  On Wednesday,
                </span>

                <div className="date-box">
                  <span className="date-day-large">
                    03RD
                  </span>
                </div>

                <span className="date-right">
                  JUNE 2026
                </span>

              </div>
            </div>

            <p className="hijri-date">
              (16th Zilhajja 1447 Hijri)
            </p>

            <p className="dinner-time">
              Dinner: 9:00 p.m.
            </p>

            <div className="date-separator"></div>

            {/* Venue */}
            <div className="event-box valima-box">

              <p className="venue-location">
                At : WHITE PALACE,
              </p>

              <p className="venue-location">
                Near Moghal Engineering College,
              </p>

              <p className="venue-location">
                Opp. Maheshwari Oil Mill, Bandlaguda, Hyd.
              </p>

            </div>

            {/* Nikah */}
            <div className="event-box nikah-box">

              <h3 className="nikah-title">
                Nikah
              </h3>

              <div className="nikah-date-section">

                <span className="nikah-date-text">
                  On Monday,
                </span>

                <span className="nikah-date-day">
                  1st. June 2026
                </span>

              </div>

              <div className="nikah-venue-box">

                <p className="nikah-detail">
                  <strong>Nikah :</strong> After Zohar,
                </p>

                <p className="nikah-detail">
                  at Masjid-e-Suffah Ahle Hadees,
                </p>

                <p className="nikah-detail">
                  Moin Bagh Road, Riyasat Nager, Hyd.
                </p>

              </div>

              <p className="nikah-dinner">
                Dinner: 9:00 p.m.
              </p>

              <div className="nikah-venue-box">

                <p className="nikah-detail">
                  <strong>O R. PALACE,</strong>
                </p>

                <p className="nikah-detail">
                  Beside White Palace,
                </p>

                <p className="nikah-detail">
                  Opp. Moghal Engineering College,
                </p>

                <p className="nikah-detail">
                  Bandlaguda, Hyd.
                </p>

              </div>

            </div>

            <p className="blessings-heading">
              With best compliments from : Near & Dear
            </p>

            <div className="bottom-border-ornament"></div>

          </div>

          {/* Mute Button */}
          <button
            className="mute-button"
            title={muted ? 'Unmute audio' : 'Mute audio'}
            onClick={() => setMuted(!muted)}
          >
            {muted ? '🔇' : '🔊'}
          </button>

        </div>
      )}
    </div>
  );
}

export default App;