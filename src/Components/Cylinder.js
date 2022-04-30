import { useRef } from "react";
//import { Cylinder } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export default function Cylinder({ position, args, color }) {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.z = mesh.current.rotation.y += 0.01));

    return (
        <mesh
            castShadow 
            position={position} 
            ref={mesh}
        >
          <cylinderBufferGeometry attach='geometry' args={args}/>
          <meshStandardMaterial attach='material' color={color}/>
          {/* <Cylinder>
            <meshStandardMaterial attach='material' color='hotpink'/>
          </Cylinder> */}
        </mesh>
    );
} 