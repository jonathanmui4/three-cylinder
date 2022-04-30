import { useGlobalState } from './state';
import Cylinder from './Components/Cylinder';
import BlueButton from './Components/BlueButton';
import PinkButton from './Components/PinkButton';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from '@react-three/drei';
import './App.scss';

softShadows();

function App() {
  const [color] = useGlobalState("color");
  console.log(color);

  return (
    <>
      <Canvas 
        shadows
        colorManagement 
        camera={{position: [-5, 2, 10], fov: 100}}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow 
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh 
            receiveShadow 
            rotation={[-Math.PI/2, 0, 0]} 
            position={[0, -5, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>
        <Cylinder position={[0, 1, 0]} args={[2, 2, 6, 40, 4, false]} color={color} />
        <OrbitControls />
      </Canvas>
      <div className='btndiv'>
        <div></div>
        {color === "pink" ? <BlueButton/> : <PinkButton/>}
        <div></div>
      </div>
    </>
  );
}

export default App;
