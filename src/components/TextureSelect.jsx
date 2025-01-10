import { useStore } from '../hooks/useStore.js'
import * as images from '../assets/images/textures.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import { useEffect, useState } from 'react'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const { dirt, grass, glass, wood, log } = useKeyboard()

  // Controla la visibilidad del selector
  useEffect(() => {
    if (visible) {
      const visibilityTimeout = setTimeout(() => {
        setVisible(false) // Oculta después de 1 segundo
      }, 1000)

      return () => {
        clearTimeout(visibilityTimeout) // Limpia el timeout al desmontar
      }
    }
  }, [visible]) // Solo depende de 'visible'

  // Actualiza la textura seleccionada solo si cambia
  useEffect(() => {
    const options = { dirt, grass, glass, wood, log }

    const selectedTexture = Object.entries(options).find(
      ([, isEnabled]) => isEnabled
    )

    if (selectedTexture) {
      const [textureName] = selectedTexture
      if (textureName !== texture) {
        setTexture(textureName) // Actualiza solo si es diferente
      }
    }
  }, [dirt, grass, glass, wood, log, texture, setTexture]) // Todas las dependencias necesarias

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {Object.entries(images).map(([imgKey, img]) => {
        const textureName = imgKey.replace('Img', '')
        return (
          <img
            className={texture === textureName ? 'selected' : ''}
            key={imgKey}
            src={img}
            alt={textureName}
          />
        )
      })}
    </div>
  )
}