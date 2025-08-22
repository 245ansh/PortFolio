import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Particle = ({ color = '#ef4444', size = 1, delay = 0 }) => {
  const x = useMotionValue(Math.random() * 100);
  const y = useMotionValue(Math.random() * 100);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0.5);
  
  useEffect(() => {
    const animateParticle = async () => {
      // Initial fade in
      await animate(opacity, 0.8, { duration: 0.5, delay });
      await animate(scale, 1, { duration: 0.5 });
      
      // Continuous floating animation
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
    
    animateParticle();
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

export default function LoadingScreen({ onComplete }) {
  const [isComplete, setIsComplete] = useState(false);
  const particles = [
    ...Array(20).fill(0).map((_, i) => ({
      color: `hsl(${Math.random() * 60 + 340}, 80%, 60%)`,
      size: 2 + Math.random() * 3,
      delay: i * 0.1
    })),
    ...Array(30).fill(0).map((_, i) => ({
      color: `rgba(255,255,255,${0.5 + Math.random() * 0.5})`,
      size: 1 + Math.random() * 2,
      delay: i * 0.03 + 0.5
    }))
  ];

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a0f0f] z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isComplete ? 0 : 1,
        transitionEnd: { 
          display: isComplete ? 'none' : 'flex' 
        } 
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((props, i) => (
          <Particle key={i} {...props} />
        ))}
      </div>

      <motion.div
        className="relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          transition: {
            scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
          }
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setIsComplete(true);
            onComplete();
          }, 1000);
        }}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(220,38,38,0.4) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />
        
        <motion.div
          animate={{
            rotate: [0, 10],
            scale: [1, 1.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <img 
            src="/groot.svg" 
            alt="Loading..." 
            className="relative z-10 w-100 h-100 md:w-80 md:h-80"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.7))',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
