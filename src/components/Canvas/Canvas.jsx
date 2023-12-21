import React, { useEffect, useRef } from 'react';

import canvasFun from '../../assets/canvas.js';

const Canvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    canvasFun(canvasRef.current);
  }, []);

  console.log(canvasRef);
  return <canvas ref={canvasRef} id="canvas"></canvas>;
};

export default Canvas;
