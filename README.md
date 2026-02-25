# NextGen Website

A modern, eye-catching Next.js website for NextGen Website - a web development and digital marketing company.

## Features

- ✨ Modern UI with glassmorphism effects
- 🎨 Beautiful gradient animations
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 🎭 Smooth animations using Framer Motion
- 🌟 Custom animated logo component
- 📄 All required pages: Home, About, Services, Testimonial, Contact Us

## Pages

- **Home** (`/`) - Hero section with animated logo and call-to-action
- **About** (`/about`) - Company information, mission, and values
- **Services** (`/services`) - Detailed service offerings
- **Testimonial** (`/testimonial`) - Client testimonials and stats
- **Contact Us** (`/contactus`) - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **App Router** - Next.js routing

## Project Structure

```
├── app/
│   ├── about/
│   ├── contactus/
│   ├── services/
│   ├── testimonial/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── Navbar.tsx
└── package.json
```

## Customization

- Update company information in Footer and Contact pages
- Modify colors in `tailwind.config.js`
- Adjust animations in component files
- Update logo styling in `components/Logo.tsx`

## License

MIT
