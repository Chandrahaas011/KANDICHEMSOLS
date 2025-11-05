// Hero section controller - Business logic
import { heroData } from '../models/heroModel';

class HeroController {
  static getHeroData() {
    return heroData;
  }

  static getTextPressureConfig(isDarkMode) {
    return {
      text: heroData.title.interactive,
      flex: true,
      alpha: false,
      stroke: false,
      width: true,
      weight: true,
      italic: true,
      textColor: isDarkMode ? "#7dd3fc" : "#0369a1",
      strokeColor: "#ff0000",
      minFontSize: 32,
      className: "!text-4xl md:!text-5xl lg:!text-6xl"
    };
  }

  static getAnimationConfig() {
    return {
      badge: {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { delay: 0.2, type: "spring", stiffness: 200 }
      },
      title: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.3 }
      },
      description: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.4 }
      },
      cta: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5 }
      },
      molecule: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1, delay: 0.6, ease: "easeOut" }
      }
    };
  }

  static getScrollConfig() {
    return {
      offset: ["start start", "end start"],
      yTransform: [0, 1, ['0%', '50%']],
      opacityTransform: [0, 0.5, [1, 0]]
    };
  }
}

export default HeroController;
