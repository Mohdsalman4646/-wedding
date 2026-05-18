import { useState, useEffect, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {

  const [guestName, setGuestName] = useState('');
  const [showInvitation, setShowInvitation] = useState(false);
  const [welcomeLeaving, setWelcomeLeaving] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef(null);

  // =========================
  // AUDIO
  // =========================

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

  // =========================
  // ENTER BUTTON
  // =========================

  const handleEnter = () => {

    if (!guestName.trim()) return;

    // Start music
    if (!muted && audioRef.current) {

      audioRef.current.play().catch((err) => {
        console.log(err);
      });

    }

    // Close welcome screen
    setWelcomeLeaving(true);

    // Show invitation
    setTimeout(() => {

      setShowInvitation(true);

      // Open curtains after invitation mounts
      setTimeout(() => {
        setCurtainOpen(true);
      }, 500);

    }, 1200);

  };

  // =========================
  // ENTER KEY
  // =========================

  const handleKeyPress = (e) => {

    if (e.key === 'Enter') {
      handleEnter();
    }

  };

  // =========================
  // MUTE / UNMUTE
  // =========================

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

  // =========================
  // JSX
  // =========================

  return (

    <div className="app-container">

      <ParticleBackground />

      {!showInvitation ? (

        // =========================
        // WELCOME SCREEN
        // =========================

        <div className={`welcome-screen ${welcomeLeaving ? 'closing-vertical' : ''}`}>

          <div className="welcome-container">

            <div className="bismillah-welcome">
              بِسْمِ اللَّهِ
            </div>

            <h1 className="welcome-heading">
              You Are Invited
            </h1>

            <p className="welcome-subtitle">
              A celebration of love, family & blessings
            </p>

            <div className="input-wrapper">

              <div className="input-container">

                <span className="search-icon">
                  🔍
                </span>

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

        // =========================
        // INVITATION SCREEN
        // =========================

        <div className="invitation-screen">

        
  {/* LEFT CURTAIN */}
  <div
    className={`curtain left ${
      curtainOpen ? 'opened' : ''
    }`}
  ></div>

  {/* RIGHT CURTAIN */}
  <div
    className={`curtain right ${
      curtainOpen ? 'opened' : ''
    }`}
  ></div>

  {/* INVITATION */}
  <div
    className={`invitation-card ${
      curtainOpen ? 'open-vertical' : ''
    }`}
  >

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

            <p className="with-text">
              With
            </p>

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

            {/* Date */}

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

            <a 
              href="https://maps.app.goo.gl/v34a86tiNKjWUPC8A?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="event-box venue-link"
            >

              <svg className="venue-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>

              <p className="venue-location">
                At : WHITE PALACE
              </p>

              <p className="venue-location">
                Near Moghal Engineering College
              </p>

              <p className="venue-location">
                Bandlaguda, Hyderabad
              </p>

            </a>

            {/* Nikah */}

            <div className="event-box nikah-box">

              <h3 className="nikah-title">
                Nikah
              </h3>

              <div className="nikah-date-section">

                <span className="nikah-date-text">
                  On Monday
                </span>

                <span className="nikah-date-day">
                  1st June 2026
                </span>

              </div>

              <a
                href="https://maps.app.goo.gl/ZkwNBvu5RTxP7r2XA?g_st=awb"
                target="_blank"
                rel="noopener noreferrer"
                className="nikah-venue-link"
              >

                <svg className="venue-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <p className="nikah-detail">
                  <strong>Nikah :</strong> After Zohar
                </p>

                <p className="nikah-detail">
                  Masjid-e-Suffah Ahle Hadees
                </p>

                <p className="nikah-detail">
                  Riyasat Nagar, Hyderabad
                </p>

              </a>

              <div>
                <p className="nikah-dinner-box">
                  <strong>DINNER:9:00PM</strong>
                </p>

                <p className="nikah-dinner">
                  O.R. PALACE,
                </p>
                
                <p className="nikah-dinner">
                  Beside White Palace,
                </p>
                
                <p className="nikah-dinner">
                  Opp.Moghal
                </p>
                
                <p className="nikah-dinner">
                  Engineering College,
                </p>
                
                <p className="nikah-dinner">
                  Bandlaguda, Hyd.
                </p>

              </div>
              

            </div>

            <p className="blessings-heading">
              With best compliments from : Near & Dear
            </p>

          </div>

          {/* MUTE BUTTON */}

          <button
            className="mute-button"
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