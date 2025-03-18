import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';

// Component to load and display the GLB model
function MoleculeModel({ scale = 1, rotating }) {
  const ref = useRef();
  const { scene } = useGLTF('/models/dna.glb'); // Update this path if your GLB file is elsewhere

  // Rotate the model if rotating is enabled
  useFrame((state, delta) => {
    if (rotating && ref.current) {
      ref.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
      ref.current.rotation.x += delta * 0.1;
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

  return (
    <div style={{ height, width: '100%' }} className="relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <Environment preset="sunset" />

        <MoleculeModel scale={0.8} rotating={rotating} />

        <OrbitControls enablePan={false} />
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