import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

// Sample molecule model
function Molecule(props) {
  const { scene } = useGLTF('/molecule.glb');
  const ref = useRef();
  
  return (
    <primitive 
      object={scene} 
      ref={ref}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
      rotation={props.rotation || [0, 0, 0]}
      {...props}
    />
  );
}

function MoleculeViewer({ height = '300px' }) {
  const [rotating, setRotating] = useState(true);
  
  return (
    <div style={{ height: height, width: '100%' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <Environment preset="sunset" />
        
        <motion.group
          animate={rotating ? { rotateY: 360 } : { rotateY: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Molecule scale={0.5} />
        </motion.group>
        
        <OrbitControls enablePan={false} />
      </Canvas>
      
      <button 
        onClick={() => setRotating(!rotating)} 
        className="absolute bottom-4 right-4 bg-primary text-white text-xs rounded-full py-1 px-3"
      >
        {rotating ? 'Stop Rotation' : 'Start Rotation'}
      </button>
    </div>
  );
}

export default MoleculeViewer;