import { useState } from 'react';
import { button, useControls } from 'leva';

import Terrain from './Terrain';

const TerrainManager = () => {
  const [seed, setSeed] = useState(Date.now());

  const { resolution, height, levels, scale } = useControls({
    generate: button(() => setSeed(Date.now())),
    resolution: { value: 50, min: 10, max: 500, step: 1 },
    height: { value: 0.2, min: 0, max: 1 },
    levels: { value: 8, min: 1, max: 16, step: 1 },
    scale: { value: 1, min: 1, max: 16, step: 1 },
  });

  return (
    <Terrain
      seed={seed}
      size={resolution}
      height={height}
      levels={levels}
      scale={scale}
    />
  );
};

export default TerrainManager;
