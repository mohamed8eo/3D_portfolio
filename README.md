# 3D Portfolio

A visually stunning, interactive 3D portfolio built with React, Vite, Tailwind CSS, and Three.js. This project showcases modern web development skills, interactive 3D models, smooth animations, and a fully responsive design. Perfect for developers, designers, or creatives looking to present their work in a unique and engaging way.

## 🚀 Features

- **Modern React + Vite**: Fast development and build times.
- **3D & Interactive Elements**: Powered by @react-three/fiber, @react-three/drei, and custom GLB models.
- **GSAP Animations**: Smooth, scroll-based and interactive animations.
- **Tailwind CSS**: Utility-first, responsive styling with custom layers and components.
- **Data-driven Content**: All sections (projects, testimonials, skills, etc.) are managed via a single constants file.
- **Contact Form**: Integrated with EmailJS for direct messaging.
- **Responsive Design**: Looks great on all devices.
- **Easy Deployment**: Deploy to GitHub Pages with a single command.

## 🌐 Live Demo

[Live Demo Link](https://3-d-portfolio-eta-bice.vercel.app/) <!-- Replace with your deployed site URL -->

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [GSAP](https://gsap.com/)
- [EmailJS](https://www.emailjs.com/)

## 📁 Folder Structure

```
3D_Portfolio/
├── public/                # Static assets (images, models, etc.)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── HeroModels/    # 3D/visual hero section components
│   │   └── models/        # 3D model components (contact, tech logos)
│   ├── sections/          # Main page sections (Hero, Showcase, Experience, etc.)
│   ├── index.css          # Tailwind and custom styles
│   ├── App.jsx            # Main app structure
│   └── main.jsx           # Entry point
├── constants/             # All data-driven content (projects, skills, testimonials, etc.)
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## ✨ Main Sections

- **Hero**
  
  The landing section with an animated introduction, dynamic 3D model, and a call-to-action button. Sets the tone for the portfolio and introduces the developer.
  <img width="3839" height="1930" alt="image" src="https://github.com/user-attachments/assets/eec9e7c2-8804-4517-8fd0-b7d8799293d9" />


- **Showcase**
  
  Highlights featured projects with images and descriptions, demonstrating technical skills and creativity through real-world examples.

- **Logo Marquee**
  
  An animated, scrolling display of company or client logos, showcasing professional associations and collaborations.

- **Features**
  
  Presents key abilities and strengths, such as quality focus, communication, and timely delivery, using visually engaging cards.

- **Experience**
  
  A timeline of professional roles, responsibilities, and achievements, enhanced with animations and company branding.

- **Tech Stack**
  
  Displays core technical skills and tools using interactive 3D icons and a responsive grid layout.

- **Contact**
  
  A user-friendly contact form powered by EmailJS, accompanied by a 3D visual, allowing visitors to easily get in touch.

- **Footer**
  
  Contains social media links and copyright information, providing easy access to external profiles and legal details.

## ⚡ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
$ git clone https://github.com/your-username/3D_Portfolio.git
$ cd 3D_Portfolio

# Install dependencies
$ npm install
# or
yarn install
```

### Development

```bash
# Start the local dev server
$ npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
# Build for production
$ npm run build
```

### Preview Production Build

```bash
$ npm run preview
```

### Deploy to GitHub Pages

```bash
$ npm run deploy
```

## 🔑 Environment Variables

To enable the contact form, set up an [EmailJS](https://www.emailjs.com/) account and add the following variables to your `.env` file:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🙏 Credits

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [GSAP](https://gsap.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- All open-source contributors and asset creators

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
