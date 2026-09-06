import { Float, Html, Line, Sparkles } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

const destinations = [
  { label: 'ABOUT', position: [-2.8, 0.45, -1.6] as [number, number, number], height: 1.4, color: '#77d8ff' },
  { label: 'EXPERIENCE', position: [-1.2, 0.7, -2.2] as [number, number, number], height: 2.1, color: '#b49cff' },
  { label: 'PROJECTS', position: [0.8, 0.5, -1.7] as [number, number, number], height: 1.7, color: '#e7c57a' },
  { label: 'SKILLS', position: [2.5, 0.4, -1.4] as [number, number, number], height: 1.2, color: '#79f2c0' },
]

function WorldArchitecture() {
  const group = useRef<Group>(null)
  const { pointer, camera } = useThree()

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.025
    camera.position.x += (pointer.x * 0.55 - camera.position.x) * 0.025
    camera.position.y += (pointer.y * 0.25 + 0.25 - camera.position.y) * 0.025
    camera.lookAt(0, 0.25, -1)
  })

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, -1.2]}>
        <planeGeometry args={[12, 7]} />
        <meshStandardMaterial color="#090b10" roughness={0.82} metalness={0.35} />
      </mesh>
      <gridHelper args={[12, 24, '#24404d', '#14202a']} position={[0, -0.06, -1.2]} />
      <Line points={[[-5, 0, 0], [-2.5, 0, -1], [0, 0, -0.8], [2.5, 0, -1], [5, 0, -0.2]]} color="#77d8ff" transparent opacity={0.35} lineWidth={1.2} />
      <Line points={[[-2.5, 0.01, -1], [-2.5, 0.01, -3.5]]} color="#b49cff" transparent opacity={0.32} lineWidth={1} />
      <Line points={[[0, 0.01, -0.8], [0, 0.01, -3.5]]} color="#e7c57a" transparent opacity={0.45} lineWidth={1} />
      {destinations.map((destination, index) => (
        <Float key={destination.label} speed={0.8 + index * 0.1} floatIntensity={0.08} rotationIntensity={0.04}>
          <group position={destination.position}>
            <mesh position={[0, destination.height / 2, 0]}>
              <boxGeometry args={[0.8, destination.height, 0.8]} />
              <meshStandardMaterial color="#10161c" emissive={destination.color} emissiveIntensity={0.12} metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, destination.height + 0.05, 0]} rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[0.48, 0.06, 0.48]} />
              <meshStandardMaterial color={destination.color} emissive={destination.color} emissiveIntensity={1.4} />
            </mesh>
            <Html center position={[0, destination.height + 0.35, 0]} distanceFactor={7}>
              <span className="world-3d-label" style={{ borderColor: destination.color, color: destination.color }}>{destination.label}</span>
            </Html>
          </group>
        </Float>
      ))}
      <mesh position={[0, 0.6, -3.8]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.15, 0.025, 10, 64]} />
        <meshStandardMaterial color="#77d8ff" emissive="#77d8ff" emissiveIntensity={2.2} />
      </mesh>
      <Sparkles count={55} scale={[9, 3.5, 5]} size={1.2} speed={0.18} color="#9adfff" opacity={0.48} />
    </group>
  )
}

export function ThreeScene() {
  return (
    <div className="scene-shell" aria-label="Interactive 3D digital world">
      <div className="real-walker-overlay" aria-label="Vaishnavi walking through the digital world">
        <span className="real-walker-scan" />
        <img src="/profile.jpg" alt="Vaishnavi Ananda Patil in her digital world" />
        <span className="walker-ground-glow" aria-hidden="true" />
        <span className="real-walker-caption">VAISHNAVI / MOVING FORWARD</span>
      </div>
      <Canvas camera={{ position: [0, 1.1, 6.4], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
        <color attach="background" args={['#080a0e']} />
        <fog attach="fog" args={['#080a0e', 4.6, 11]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 5, 3]} intensity={1.6} color="#d9f4ff" />
        <pointLight position={[-3, 1, 0]} intensity={8} distance={8} color="#77d8ff" />
        <pointLight position={[3, 2, -3]} intensity={10} distance={8} color="#b49cff" />
        <WorldArchitecture />
      </Canvas>
    </div>
  )
}
