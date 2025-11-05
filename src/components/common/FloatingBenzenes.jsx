import { useEffect, useRef } from 'react';

function FloatingBenzenes() {
  const canvasRef = useRef(null);
  const benzenesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Function to draw a benzene molecule (IUPAC accurate Kekulé structure with enhanced design)
  const drawBenzene = (ctx, x, y, size, rotation, opacity) => {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(x, y);
    ctx.rotate(rotation);

    const radius = size / 2;
    const innerBondGap = 0.18; // Gap ratio for double bonds (closer to edges)

    // Add subtle shadow for depth
    ctx.shadowColor = 'rgba(56, 189, 248, 0.4)'; // Lighter and brighter shadow
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw hexagon with alternating single and double bonds
    for (let i = 0; i < 6; i++) {
      const angle1 = (Math.PI / 3) * i - Math.PI / 6;
      const angle2 = (Math.PI / 3) * (i + 1) - Math.PI / 6;
      
      const x1 = Math.cos(angle1) * radius;
      const y1 = Math.sin(angle1) * radius;
      const x2 = Math.cos(angle2) * radius;
      const y2 = Math.sin(angle2) * radius;

      // Create gradient for bonds - lighter and brighter
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, '#38bdf8'); // Sky-400 (lighter)
      gradient.addColorStop(0.5, '#7dd3fc'); // Sky-300 (brighter mid-tone)
      gradient.addColorStop(1, '#38bdf8'); // Sky-400 (lighter)
      ctx.strokeStyle = gradient;

      if (i % 2 === 0) {
        // Double bond - draw outer bond (at vertices)
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Inner bond (parallel, closer to center)
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        
        // Calculate inward offset
        const inwardX = midX * innerBondGap;
        const inwardY = midY * innerBondGap;
        
        const ix1 = x1 - inwardX;
        const iy1 = y1 - inwardY;
        const ix2 = x2 - inwardX;
        const iy2 = y2 - inwardY;

        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(ix1, iy1);
        ctx.lineTo(ix2, iy2);
        ctx.stroke();
      } else {
        // Single bond
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    // Reset shadow for vertices
    ctx.shadowBlur = 20;

    // Draw vertices (carbon atoms) with radial gradient - on top of bonds
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      
      const vertexGradient = ctx.createRadialGradient(px, py, 0, px, py, 12);
      vertexGradient.addColorStop(0, '#7dd3fc'); // Sky-300 (brighter center)
      vertexGradient.addColorStop(0.6, '#38bdf8'); // Sky-400 (lighter)
      vertexGradient.addColorStop(1, '#0ea5e9'); // Sky-500 (brighter edge)
      ctx.fillStyle = vertexGradient;
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
      const highlightGradient = ctx.createRadialGradient(px - 3, py - 3, 0, px, py, 8);
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create benzene particles
    const createBenzenes = () => {
      const benzenes = [];
      const numBenzenes = 4; // Fewer benzene molecules (reduced from 5)

      for (let i = 0; i < numBenzenes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        benzenes.push({
          x,
          y,
          size: Math.random() * 350 + 400, // Much larger: 400-750px
          dx: (Math.random() - 0.5) * 0.8, // Much faster movement
          dy: (Math.random() - 0.5) * 0.8, // Much faster movement
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.004, // Much faster rotation
          opacity: Math.random() * 0.15 + 0.2, // Opacity (0.2-0.35)
        });
      }

      benzenesRef.current = benzenes;
    };

    createBenzenes();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      benzenesRef.current.forEach((benzene) => {
        // Calculate mouse influence (repulsion)
        let mouseForceX = 0;
        let mouseForceY = 0;
        
        const dx = benzene.x - mouseRef.current.x; // Distance from mouse to benzene
        const dy = benzene.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 400; // Influence radius
        
        if (distance < maxDistance && distance > 0) {
          const mouseInfluence = 1.2; // Mouse influence strength (increased)
          const force = (1 - distance / maxDistance) * mouseInfluence * 3;
          mouseForceX = (dx / distance) * force;
          mouseForceY = (dy / distance) * force;
        }

        // Update position with mouse influence (stronger repulsion)
        benzene.x += benzene.dx + mouseForceX * 2;
        benzene.y += benzene.dy + mouseForceY * 2;
        benzene.rotation += benzene.rotationSpeed;

        // Wrap around screen (allow going off-screen and coming back)
        if (benzene.x < -benzene.size / 2) {
          benzene.x = canvas.width + benzene.size / 2;
        } else if (benzene.x > canvas.width + benzene.size / 2) {
          benzene.x = -benzene.size / 2;
        }
        
        if (benzene.y < -benzene.size / 2) {
          benzene.y = canvas.height + benzene.size / 2;
        } else if (benzene.y > canvas.height + benzene.size / 2) {
          benzene.y = -benzene.size / 2;
        }

        // Draw benzene (only if at least partially visible)
        if (benzene.x > -benzene.size / 2 && benzene.x < canvas.width + benzene.size / 2 &&
            benzene.y > -benzene.size / 2 && benzene.y < canvas.height + benzene.size / 2) {
          drawBenzene(ctx, benzene.x, benzene.y, benzene.size, benzene.rotation, benzene.opacity);
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default FloatingBenzenes;
