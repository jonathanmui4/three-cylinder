import { useRef } from "react";
//import { Cylinder } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export default function Cylinder() {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <mesh ref={mesh}>
          <cylinderBufferGeometry attach='geometry' args={[2, 2, 6, 40, 4, false]}/>
          <meshStandardMaterial attach='material' color='pink'/>
          {/* <Cylinder>
            <meshStandardMaterial attach='material' color='hotpink'/>
          </Cylinder> */}
        </mesh>
    );
} 