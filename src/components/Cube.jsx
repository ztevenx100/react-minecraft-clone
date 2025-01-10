import { useStore } from '../hooks/useStore.js'
import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as textures from '../assets/images/textures.js'

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [removeCube] = useStore(state => [state.removeCube])

  const [ref] = useBox(() => ({
    type: 'Static',
    position: position || [0, 0, 0] // Asegúrate de que 'position' tenga un valor válido
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()

        if (e.altKey) {
          removeCube(id)
        }
      }}
    >
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture} // Asegúrate de que 'activeTexture' no sea undefined
        attach='material'
      />
    </mesh>
  )
}