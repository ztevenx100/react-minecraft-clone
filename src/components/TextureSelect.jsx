import { useStore } from '../hooks/useStore.js';
import * as images from '../assets/images/textures.js';
import { useKeyboard } from '../hooks/useKeyboard.js';
import { useEffect, useState } from 'react';

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture]);
  const { groundTexture, ...imagesBlocks } = images;

  const { dirt, grass, glass, wood, log, bedrock, cobble, cobbleDeepslate, sand } = useKeyboard();

  // Controla la visibilidad del selector
  useEffect(() => {
    if (!visible) {
      setVisible(true); // Activa visibilidad si no está activa
    }

    const visibilityTimeout = setTimeout(() => {
      setVisible(false); // Oculta después de 1 segundo
    }, 1000)

    return () => {
      clearTimeout(visibilityTimeout) // Limpia el timeout al desmontar
    }
  }, [texture, visible]) // Incluye todas las dependencias necesarias

  // Actualiza la textura seleccionada solo si cambia
  useEffect(() => {
    const options = { dirt, grass, glass, wood, log, bedrock, cobble, cobbleDeepslate, sand }

    const selectedTexture = Object.entries(options).find(
      ([, isEnabled]) => isEnabled
    )

    if (selectedTexture) {
      const [textureName] = selectedTexture
      if (textureName !== texture) {
        setTexture(textureName) // Actualiza solo si es diferente
      }
    }
  }, [dirt, grass, glass, wood, log, bedrock, cobble, cobbleDeepslate, sand, texture, setTexture]) // Todas las dependencias necesarias

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {Object.entries(imagesBlocks)
        .map(([imgKey, img]) => {
          const textureName = imgKey.replace('Img', '');
          const src = img?.source?.data?.src;
          //console.log('img: ',img);
          return (
            <img
              className={texture === textureName ? 'selected' : ''}
              key={imgKey}
              src={src}
              alt={textureName}
            />
          )
        }
      )}
    </div>
  )
}