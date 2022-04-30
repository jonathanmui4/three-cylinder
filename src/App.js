import Cylinder from './Components/Cylinder';
import { Canvas } from '@react-three/fiber';
import './App.scss';

function App() {
  return (
    <>
      <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 100}}>
        <ambientLight intensity={0.3} />
        <Cylinder position={[0, 1, 0]} />
      </Canvas>
    </>
  );
}

export default App;
