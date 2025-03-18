import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';

// Fallback model - a simple cube representing a molecule
function SimpleMolecule(props) {
  const ref = useRef();
  const { rotating } = props;
  
  // Rotate the cube
  useFrame((state, delta) => {
    if (rotating && ref.current) {
      ref.current.rotation.y += delta * 0.5;
      ref.current.rotation.x += delta * 0.1;
    }
  });
  
  return (
    <group ref={ref} scale={props.scale || 1}>
      {/* Center sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Surrounding atoms */}
      <mesh position={[1, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-0.8, 0.6, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-0.3, -0.9, 0.2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0.2, 0.3, 0.9]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      
      {/* Bonds */}
      <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[-0.4, 0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.9]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[-0.15, -0.45, 0.1]} rotation={[0.1, 0, -Math.PI / 3]}>
        <cylinderGeometry args={[0.05, 0.05, 0.9]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0.1, 0.15, 0.45]} rotation={[Math.PI / 4, 0.2, Math.PI / 6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.9]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}

function MoleculeViewer({ height = '300px' }) {
  const [rotating, setRotating] = useState(true);
  
  return (
    <div style={{ height: height, width: '100%' }} className="relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <Environment preset="sunset" />
        
        <SimpleMolecule scale={0.8} rotating={rotating} />
        
        <OrbitControls enablePan={false} />
      </Canvas>
      
      <button 
        onClick={() => setRotating(!rotating)} 
        className="absolute bottom-4 right-4 bg-primary text-white text-xs rounded-full py-1 px-3 z-10"
      >
        {rotating ? 'Stop Rotation' : 'Start Rotation'}
      </button>
    </div>
  );
}

export default MoleculeViewer;