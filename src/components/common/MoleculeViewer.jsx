import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Component to set scene background based on theme
function SceneBackground() {
  const { scene } = useThree();
  
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    scene.background = new THREE.Color(isDark ? '#000000' : '#ffffff');
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      scene.background = new THREE.Color(isDarkNow ? '#000000' : '#ffffff');
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, [scene]);
  
  return null;
}

// Component to load and display the GLB model
function MoleculeModel({ scale = 1, rotating }) {
  const ref = useRef();
  const { scene } = useGLTF('/models/dna2.glb'); // Update this path if your GLB file is elsewhere
  const { camera } = useThree();

  // Center the model on first load and adjust camera to fit
  useEffect(() => {
    if (ref.current && scene && camera) {
      // Calculate bounding box to center the model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Center the model geometry around origin
      scene.position.sub(center);

      // Reset rotation
      ref.current.rotation.set(0, 0, 0);

      // Compute a camera distance that fits the model nicely in view
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = (camera.fov * Math.PI) / 180;
      const fitHeightDistance = (maxDim / 2) / Math.tan(fov / 2);
      const distance = fitHeightDistance * 1.6; // multiplier to give some padding

      // Position camera along z axis and look at origin
      camera.position.set(0, 0, distance);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [scene, camera]);

  // Rotate the model if rotating is enabled
  useFrame((state, delta) => {
    if (rotating && ref.current) {
      ref.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={ref} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

function MoleculeViewer({ height = '300px' }) {
  const [rotating, setRotating] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const controlsRef = useRef();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ensure OrbitControls target is centered and updated on resize/mount
  useEffect(() => {
    if (!controlsRef.current) return;

    const setTarget = () => {
      try {
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
      } catch (e) {
        // ignore if controls aren't ready yet
      }
    };

    setTarget();
    window.addEventListener('resize', setTarget);
    return () => window.removeEventListener('resize', setTarget);
  }, [isClient]);

  if (!isClient) {
    return (
      <div
        style={{ height, width: '100%' }}
        className="relative flex items-center justify-center bg-white/80 dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-700"
      >
  <span className="text-sm text-slate-600 dark:text-slate-300">Loading 3D molecule...</span>
      </div>
    );
  }

  return (
    <div style={{ height, width: '100%' }} className="relative">
      <Canvas 
        shadows 
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: false
        }}
        dpr={[1, 2]}
        camera={{ 
          position: [0, 0, 5], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        onCreated={({ camera, gl }) => {
          // Ensure consistent camera setup on creation
          camera.lookAt(0, 0, 0);
          gl.setClearColor('#ffffff', 1);
        }}
      >
        <SceneBackground />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <Environment preset="sunset" />

        <MoleculeModel scale={0.8} rotating={rotating} />

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          autoRotate={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>

      <button
        onClick={() => setRotating(!rotating)}
        className="absolute bottom-4 right-4 bg-blue-500 text-white text-xs rounded-full py-1 px-3 z-10"
      >
        {rotating ? 'Stop Rotation' : 'Start Rotation'}
      </button>
    </div>
  );
}

export default MoleculeViewer;