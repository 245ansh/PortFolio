import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link as ScrollLink } from 'react-scroll';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
function TreeSphere({ scale = 1.5 }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ff5050" roughness={0.6} metalness={0.3} />
    </mesh>
  );
}
const isMobile = window.innerWidth < 768;


export default function Hero() {
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
        <h2 className="text-xl md:text-2xl font-medium text-gray-300">
          Full Stack Java Developer
        </h2>
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
  className="w-full md:w-1/2 h-[220px] md:h-[400px]  rounded-xl  flex items-center justify-center"
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
