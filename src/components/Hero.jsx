import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Navbar = () => (
  <nav className="nav-blur px-6 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-white font-bold text-2xl"
      >
        AI.NEXUS
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-x-8"
      >
        {['Solutions', 'Technology', 'Case Studies', 'About'].map((item, i) => (
          <button 
            key={item}
            className="text-white/80 hover:text-white transition-colors"
          >
            {item}
          </button>
        ))}
      </motion.div>
    </div>
  </nav>
);

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" />;
};

export default function Hero() {
  return (
    <div className="hero-section">
      <Navbar />
      <ParticleField />
      <div className="shape-1 floating-shape" />
      <div className="shape-2 floating-shape" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-gradient-text text-7xl font-bold mb-8 leading-tight"
          >
            Redefining Reality
            <br />
            Through AI Innovation
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-12 text-blue-100/80"
          >
            Push the boundaries of what's possible with our next-generation
            AI solutions that transform imagination into reality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-x-6"
          >
            <button className="button-gradient text-white px-8 py-4 rounded-full font-medium text-lg">
              Explore the Future
            </button>
            <button className="glowing-border bg-black/50 text-white px-8 py-4 rounded-full font-medium text-lg">
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
