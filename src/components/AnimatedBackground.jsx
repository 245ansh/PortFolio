import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

const Particle = ({ color = '#ef4444', size = 1, delay = 0 }) => {
  const x = useMotionValue(Math.random() * 100);
  const y = useMotionValue(Math.random() * 100);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0.5);
  
  useEffect(() => {
    const animateParticle = async () => {
      await animate(opacity, 0.8, { duration: 0.5, delay });
      await animate(scale, 1, { duration: 0.5 });
      
      while (true) {
        await animate(
          x,
          [x.get(), x.get() + (Math.random() - 0.5) * 30],
          { duration: 3 + Math.random() * 2, ease: 'easeInOut' }
        );
        await animate(
          y,
          [y.get(), y.get() + (Math.random() - 0.5) * 20],
          { duration: 2 + Math.random() * 2, ease: 'easeInOut' }
        );
      }
    };
    
    const animation = animateParticle();
    return () => animation.then(cancel => cancel && cancel());
  }, []);

  return (
    <motion.div
      className={`absolute rounded-full`}
      style={{
        x,
        y,
        opacity,
        scale,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  );
};

export default function AnimatedBackground({ children, className = '' }) {
  const particles = [
    ...Array(30).fill(0).map((_, i) => ({
      color: `hsl(${Math.random() * 60 + 340}, 80%, 60%)`,
      size: 1.5 + Math.random() * 3,
      delay: i * 0.05
    })),
    ...Array(20).fill(0).map((_, i) => ({
      color: `rgba(255,255,255,${0.4 + Math.random() * 0.5})`,
      size: 1 + Math.random() * 2,
      delay: i * 0.03 + 0.5
    }))
  ];

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a0f0f] -z-10" />
      <div className="fixed inset-0 overflow-hidden -z-10">
        {particles.map((props, i) => (
          <Particle key={`particle-${i}`} {...props} />
        ))}
      </div>
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}
