import { useState, useEffect } from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { Element } from 'react-scroll';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Technical Society of IIIT Kancheepuram';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="home">
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-0"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-full h-full grid grid-cols-12 gap-4">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="bg-blue-500 rounded-full h-2 w-2 animate-pulse"
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 7}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600 rounded-full mb-6 animate-bounce">

              <img src="/../images/techlogo.png" width="50" height="50" className='image_logo' />

            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Technical Affairs
            </h1>

            <div className="h-8 mb-6">
              <p className="text-xl md:text-2xl text-blue-400 font-light">
                {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>

            <p className="text-gray-300 text-lg max-w-2xl mb-8">
              Fostering innovation, technical excellence, and collaborative learning
              through workshops, hackathons, and projects across various domains of technology.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#about" variant="primary" size="lg" className="group">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Join Technical Clubs
              </Button>
            </div>
          </div>
        </div>

        {/* Animated wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f8fafc"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
