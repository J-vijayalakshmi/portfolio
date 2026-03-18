import { useRef, useEffect } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 120;

const getFramePath = (index: number) => {
  const paddedIndex = String(index).padStart(3, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  const { scrollYProgress } = useScroll();
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'brightness(0.55)';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.filter = 'none';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (i === 0 && currentFrameRef.current === 0) {
          requestAnimationFrame(() => drawFrame(0));
        }
        if (i === currentFrameRef.current) {
          requestAnimationFrame(() => drawFrame(i));
        }
        if (loadedCount === FRAME_COUNT) {
          requestAnimationFrame(() => drawFrame(currentFrameRef.current));
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        requestAnimationFrame(() => drawFrame(currentFrameRef.current));
      }
    };

    window.addEventListener('resize', handleResize);

    const t1 = setTimeout(() => drawFrame(0), 100);
    const t2 = setTimeout(() => drawFrame(currentFrameRef.current), 500);
    const t3 = setTimeout(() => drawFrame(currentFrameRef.current), 2000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const frame = Math.round(latest);
    if (frame !== currentFrameRef.current) {
      currentFrameRef.current = frame;
      requestAnimationFrame(() => drawFrame(frame));
    }
  });

  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}
