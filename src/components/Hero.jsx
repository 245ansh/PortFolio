import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link as ScrollLink } from 'react-scroll';
import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Full-screen random particles
function MagicParticles({ count = 120 }) {
  const particlesRef = useRef();
  const velocitiesRef = useRef([]);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      
      // Update particle positions with random movement
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Add some random velocity to each particle
        if (!velocitiesRef.current[i]) {
          velocitiesRef.current[i] = {
            vx: (Math.random() - 0.5) * 0.02,
            vy: (Math.random() - 0.5) * 0.02,
            vz: (Math.random() - 0.5) * 0.02
          };
        }
        
        const vel = velocitiesRef.current[i];
        
        // Update positions
        positions[i3] += vel.vx;
        positions[i3 + 1] += vel.vy;
        positions[i3 + 2] += vel.vz;
        
        // Add some randomness to velocity
        vel.vx += (Math.random() - 0.5) * 0.001;
        vel.vy += (Math.random() - 0.5) * 0.001;
        vel.vz += (Math.random() - 0.5) * 0.001;
        
        // Limit velocity
        const maxSpeed = 0.03;
        vel.vx = Math.max(-maxSpeed, Math.min(maxSpeed, vel.vx));
        vel.vy = Math.max(-maxSpeed, Math.min(maxSpeed, vel.vy));
        vel.vz = Math.max(-maxSpeed, Math.min(maxSpeed, vel.vz));
        
        // Wrap around screen boundaries (larger area)
        const boundary = 8;
        if (Math.abs(positions[i3]) > boundary) positions[i3] = -positions[i3] * 0.8;
        if (Math.abs(positions[i3 + 1]) > boundary) positions[i3 + 1] = -positions[i3 + 1] * 0.8;
        if (Math.abs(positions[i3 + 2]) > boundary) positions[i3 + 2] = -positions[i3 + 2] * 0.8;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  useEffect(() => {
    if (particlesRef.current) {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Spread particles across a much larger area (full screen)
        positions[i3] = (Math.random() - 0.5) * 16; // -8 to 8
        positions[i3 + 1] = (Math.random() - 0.5) * 16; // -8 to 8
        positions[i3 + 2] = (Math.random() - 0.5) * 16; // -8 to 8
        
        // Gradients of red for particles
        const redGradient = Math.random();
        if (redGradient > 0.8) {
          // Bright red particles
          colors[i3] = 1.0; // R
          colors[i3 + 1] = 0.0; // G
          colors[i3 + 2] = 0.0; // B
        } else if (redGradient > 0.6) {
          // Hot red particles
          colors[i3] = 0.9; // R
          colors[i3 + 1] = 0.1; // G
          colors[i3 + 2] = 0.1; // B
        } else if (redGradient > 0.4) {
          // Medium red particles
          colors[i3] = 0.7; // R
          colors[i3 + 1] = 0.0; // G
          colors[i3 + 2] = 0.0; // B
        } else if (redGradient > 0.2) {
          // Dark red particles
          colors[i3] = 0.5; // R
          colors[i3 + 1] = 0.0; // G
          colors[i3 + 2] = 0.0; // B
        } else {
          // Very dark red particles
          colors[i3] = 0.3; // R
          colors[i3 + 1] = 0.0; // G
          colors[i3 + 2] = 0.0; // B
        }
      }
      
      particlesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, [count]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

// Enhanced TreeSphere with better visual appeal
function TreeSphere({ scale = 1.5 }) {
  const meshRef = useRef();
  const { mouse } = useThree();
  const [isHovered, setIsHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Smooth rotation with multiple axes
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.001;
      
      // Gentle breathing/pulsing effect
      const pulse = 1 + Math.sin(time * 3) * 0.05;
      const hoverScale = isHovered ? 1.15 : 1;
      const finalScale = scale * pulse * hoverScale;
      meshRef.current.scale.set(finalScale, finalScale, finalScale);
      
      // Red and black color pulsing
      const redIntensity = 0.7 + Math.sin(time * 3) * 0.3;
      
      if (meshRef.current.material) {
        meshRef.current.material.color.setRGB(redIntensity, 0.1, 0.1);
        meshRef.current.material.emissive.setRGB(redIntensity * 0.4, 0, 0);
        meshRef.current.material.emissiveIntensity = 0.3 + Math.sin(time * 4) * 0.2;
      }
      
      // Subtle mouse interaction
      meshRef.current.position.x = mouse.x * 0.1;
      meshRef.current.position.y = mouse.y * 0.1;
    }
  });

  return (
    <group>
      {/* Main sphere with enhanced material */}
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#cc0000" 
          roughness={0.2} 
          metalness={0.6}
          emissive="#660000"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Glowing wireframe overlay */}
      <mesh scale={scale * 1.02}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial 
          color="#cc0000" 
          wireframe 
          transparent 
          opacity={0.4}
        />
      </mesh>
      
      {/* Full-screen random particles */}
      <MagicParticles count={120} />
    </group>
  );
}
const isMobile = window.innerWidth < 768;


export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "DevOps Enthusiast", 
    "Content Reviewer",
    "Java Developer",
    "IamGroot",
    "Backend Architect",
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    
    return () => clearInterval(interval);
  }, [roles.length]);
  
  return (
    <section className="min-h-screen  text-white sm:pt-25 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start gap-6 max-w-xl"
      >
        <p className="text-sm tracking-widest uppercase text-red-500">
          Nurturing backend roots,<br></br> Shaping frontend leaves, I am Groot.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Ansh <span className="text-red-500">Tamrakar</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 relative h-7 flex items-center">
          <motion.span
            key={currentRoleIndex}
            initial={{ 
              opacity: 0, 
              y: 30, 
              scale: 0.8, 
              rotateX: 90,
              filter: "blur(8px)"
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              rotateX: 0,
              filter: "blur(0px)"
            }}
            exit={{ 
              opacity: 0, 
              y: -30, 
              scale: 1.1, 
              rotateX: -90,
              filter: "blur(8px)"
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.6, -0.05, 0.01, 0.99],
              staggerChildren: 0.1
            }}
            className="inline-block absolute left-0 top-1/2 -translate-y-1/2 w-full whitespace-nowrap"
          >
            <motion.span
              initial={{ backgroundPosition: "200% 0" }}
              animate={{ backgroundPosition: "-200% 0" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="inline-block bg-gradient-to-r from-red-500 via-red-300 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent whitespace-nowrap"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </motion.span>
          
          {/* Glitch effect overlay */}
          <motion.div
            key={`glitch-${currentRoleIndex}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0, 0, 1, 0, 1, 0, 0, 0],
              x: [0, -2, 2, -1, 1, 0]
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1]
            }}
            className="absolute inset-0 text-red-500 font-bold pointer-events-none whitespace-nowrap"
            style={{ textShadow: "0 0 10px currentColor", top: "50%", transform: "translateY(-50%)" }}
          >
            {roles[currentRoleIndex]}
          </motion.div>
        </h2>
        <div className=" mt-3 flex flex-wrap gap-4">
          
          {/* GitHub Button */}
          <a
            href="https://github.com/245ansh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-black border border-red-600 text-red-500 rounded-md transition-all duration-300 hover:bg-red-600 hover:text-black hover:shadow-lg hover:shadow-red-500/20 flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          
          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/ansh-tamrakar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-black border border-red-600 text-red-500 rounded-md transition-all duration-300 hover:bg-red-600 hover:text-black hover:shadow-lg hover:shadow-red-500/20 flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          {/* LeetCode Button */}
          <a
            href="https://leetcode.com/u/245ansh/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-black border border-red-600 text-red-500 rounded-md transition-all duration-300 hover:bg-red-600 hover:text-black hover:shadow-lg hover:shadow-red-500/20 flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382v1.965a1.38 1.38 0 0 0 2.76 0v-1.965a1.38 1.38 0 0 0-1.38-1.382zm5.348.037a1.384 1.384 0 0 0-.941 2.364l1.38 1.282a1.38 1.38 0 0 0 1.881-2.022l-1.38-1.282a1.345 1.345 0 0 0-.94-.342zm-10.678.337a1.38 1.38 0 0 0-.962.406L2.874 17.21a1.38 1.38 0 0 0 1.938 1.968l2.513-2.615a1.38 1.38 0 0 0-.038-1.954 1.345 1.345 0 0 0-1-.02zm8.024 3.239a1.38 1.38 0 0 0-1.38 1.382v1.965a1.38 1.38 0 0 0 2.76 0v-1.965a1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
            LeetCode
          </a>         
                    
        </div>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="mt-4 inline-flex items-center text-red-500 hover:underline group cursor-pointer"
        >
          View My Work
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </ScrollLink>
      </motion.div>

      {/* Right Side Graphic or 3D Model */}
      <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full md:w-1/2 h-[200px] md:h-[400px]  rounded-xl  flex items-center justify-center"
>
  <Canvas className="w-[90%] h-full">
    <ambientLight intensity={0.5} />
    <directionalLight position={[3, 3, 3]} />
    <OrbitControls enableZoom={false} />
    <TreeSphere scale={isMobile ? 1 : 1.5} />
  </Canvas>
</motion.div>


    </section>
  );
}
