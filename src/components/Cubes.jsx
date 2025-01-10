import { useStore } from '../hooks/useStore'
import { Cube } from './Cube.jsx'
import { useEffect, useMemo } from 'react'

export const Cubes = () => {
  const cubes = useStore(state => state.cubes)

  // Memoriza los cubos para evitar renders innecesarios
  const memoizedCubes = useMemo(() => cubes, [cubes])
  
  return memoizedCubes.map(({ id, pos, texture }) => {
    return (
      <Cube
        key={id}
        id={id}
        position={pos}
        texture={texture}
      />
    )
  })
}