# Premium Islamic Wedding Invitation Website

A luxurious, cinematic, and animated Islamic wedding invitation website built with modern web technologies. This project showcases the marriage of Mohammed Saqlain Shareef and his bride with elegant design, smooth animations, and interactive elements.

## 🌟 Features

### Design & Aesthetics
- **Royal Black & Gold Theme**: Luxurious metallic gold accents on deep black background
- **Glassmorphism Effects**: Modern frosted glass UI components with blur effects
- **Floral Ornaments**: Elegant golden corner decorations inspired by traditional Islamic art
- **Premium Typography**: Beautiful serif fonts (Cinzel, Playfair Display, Great Vibes, Tangerine)
- **Custom Scrollbar**: Gold gradient scrollbar for enhanced user experience
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices

### Interactive Sections

1. **Hero Section** - Fullscreen cinematic banner with animated particles and couple names
2. **Blessings & Family Details** - Family information with elegant styling
3. **Bride and Groom Introduction** - Individual profile cards with animations
4. **Wedding Events Timeline** - Nikah and Walima ceremony details with timeline visualization
5. **Countdown Timer** - Real-time countdown to the Walima ceremony
6. **Photo Gallery** - Interactive image grid with lightbox modal
7. **RSVP Form** - Guest information collection with validation
8. **Wishes & Blessings** - Community wishes display and submission
9. **Navigation** - Responsive navigation bar with mobile menu
10. **Footer** - Contact information and Islamic quote

## 🛠️ Technology Stack

- **React 19** - Modern UI library
- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Motion library for React
- **GSAP 3** - Professional animation library
- **Three.js 0.184** - 3D JavaScript library
- **React Three Fiber** - React renderer for Three.js
- **Lucide React** - Modern icon library
- **Google Fonts** - Premium typography

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+
- npm 7+

### Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ParticleBackground.jsx    # Animated particles
│   ├── Navigation.jsx             # Navigation bar
│   ├── Hero.jsx                   # Hero section
│   ├── Blessings.jsx              # Blessings section
│   ├── BrideGroom.jsx             # Couple cards
│   ├── Timeline.jsx               # Events timeline
│   ├── CountdownTimer.jsx         # Countdown
│   ├── Gallery.jsx                # Photo gallery
│   ├── RSVPForm.jsx               # RSVP form
│   ├── Wishes.jsx                 # Wishes section
│   └── Footer.jsx                 # Footer
├── App.jsx                        # Main app
├── App.css                        # Global styles
├── index.css                      # Tailwind & custom CSS
└── main.jsx                       # Entry point
```

## 🎨 Customization

### Update Content
Edit the component files to change:
- Couple names in `Hero.jsx` and `BrideGroom.jsx`
- Event dates in `Timeline.jsx` and `CountdownTimer.jsx`
- Venue information in `Timeline.jsx`
- Contact details in `Footer.jsx`

### Customize Colors
Edit `tailwind.config.js` to modify the gold and luxury color palettes.

### Modify Animations
- Framer Motion variants in component files
- CSS animations in `index.css`
- Tailwind animation settings in `tailwind.config.js`

## 📱 Responsive Design

Fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Vite's fast build system
- Automatic code splitting
- CSS minification via Tailwind
- GPU-accelerated animations
- Optimized asset loading

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📋 Features Detail

### RSVP Form
- Name and email fields
- Guest count selector
- Dietary restrictions field
- Optional message area
- Form validation & feedback

### Countdown Timer
- Automatic calculation from wedding date
- Real-time updates
- Days, hours, minutes, seconds display

### Animation Effects
- Particle system with canvas
- Framer Motion stagger animations
- Hover effects with shimmer
- Scroll-triggered animations
- Glowing text and borders

## 🎊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 💻 API Integration Ready

The project is structured for easy backend integration:

```javascript
import axios from 'axios';

const submitRSVP = async (formData) => {
  const response = await axios.post('/api/rsvp', formData);
  return response.data;
};
```

## 🔮 Future Enhancements

- Backend API integration
- Real photo gallery
- Guest list management
- Email notifications
- QR code generation
- Background music player
- 3D effects with Three.js
- Multi-language support
- Google Maps integration
- Wedding hashtag tracker

## 💌 Credits

Created with love and Islamic blessings for a beautiful celebration of marriage.

**Technologies:**
- React & Vite for modern development
- Tailwind CSS for responsive design
- Framer Motion for smooth animations
- GSAP for professional effects
- Lucide React for beautiful icons

## 📜 License

Personal use for wedding celebrations

---

**May Allah bless this beautiful union with endless happiness, love, and prosperity!** 🌹

For customization help, refer to individual component files with detailed comments.
