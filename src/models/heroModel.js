// Hero section data model
export const heroData = {
  badge: {
    text: 'Free Chemistry Database',
    colors: {
      light: 'text-sky-800 bg-sky-100/80 border-sky-300',
      dark: 'text-sky-300 bg-sky-900/30 border-sky-800'
    }
  },
  title: {
    line1: 'for All',
    interactive: 'CHEMISTRY'
  },
  description: "A comprehensive, free database for chemistry enthusiasts and professionals. Explore reactions, reagents, and techniques.",
  cta: {
    primary: {
      text: 'Explore Categories',
      link: '#categories',
      colors: {
        light: 'from-sky-700 to-sky-800',
        dark: 'from-sky-500 to-sky-600'
      }
    },
    secondary: {
      text: 'Support Us',
      link: '/DonatePage',
      colors: {
        light: 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50',
        dark: 'bg-gray-800/80 text-blue-300 border-blue-500 hover:bg-gray-700'
      }
    }
  },
  molecule: {
    height: '500px'
  }
};

export default heroData;
