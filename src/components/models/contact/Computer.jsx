/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 computer-optimized.glb -T 
Files: computer-optimized.glb [486.38KB] > C:\Template-Html-Css\3D_Portfolio\public\models\computer-optimized-transformed.glb [39.72KB] (92%)
*/

import { useGLTF } from '@react-three/drei'

  function Computer(props) {
  const { nodes, materials } = useGLTF('/models/computer-optimized-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/computer-optimized-transformed.glb')

export default Computer