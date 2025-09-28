import React, { useRef, useEffect } from "react";

const Starfield = ({ theme }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const diagStarsRef = useRef([]);
  const animationRef = useRef(null);
  const bgRef = useRef(theme === "dark" ? 0 : 255);

  const globalOpacity = 0.5; // 👈 control overall star opacity
  const starSpeed = 0.4; // 👈 control normal star speed (increase/decrease this value)

  const lerp = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr); // Make sure the canvas scales properly on high DPI displays
    };

    resize(); // Initial resize on mount
    window.addEventListener("resize", resize); // Resize listener

    // Ensure stars only initialized once
    if (starsRef.current.length === 0) {
      const numStars = window.innerWidth < 600 ? 50 : 100; // Fewer stars for small screens
      starsRef.current = Array.from({ length: numStars }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * starSpeed,
        dy: (Math.random() - 0.5) * starSpeed,
        opacity: Math.random() * 0.5 + 0.5,
        twinkle: Math.random() * 0.02,
        color: theme === "dark" ? 255 : 0,
      }));
    }

    // Initialize diagonal stars
    if (diagStarsRef.current.length === 0) {
      const numDiagStars = 2;
      diagStarsRef.current = Array.from({ length: numDiagStars }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 2.5,
        speed: Math.random() * 1.5 + 1,
        color: theme === "dark" ? 255 : 0,
        opacity: 1,
      }));
    }

    const animate = () => {
      const targetBg = theme === "dark" ? 0 : 255;
      bgRef.current = lerp(bgRef.current, targetBg, 0.05);

      ctx.fillStyle = `rgb(${bgRef.current},${bgRef.current},${bgRef.current})`;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const targetColor = theme === "dark" ? 255 : 0;

      // Animate regular stars
      starsRef.current.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;

        if (s.x < 0) s.x = window.innerWidth;
        if (s.x > window.innerWidth) s.x = 0;
        if (s.y < 0) s.y = window.innerHeight;
        if (s.y > window.innerHeight) s.y = 0;

        s.opacity += s.twinkle * (Math.random() > 0.5 ? 1 : -1);
        s.opacity = Math.min(Math.max(s.opacity, 0.3), 1);

        s.color = lerp(s.color, targetColor, 0.05);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.color},${s.color},${
          s.opacity * globalOpacity
        })`;
        ctx.fill();
      });

      // Animate diagonal stars
      diagStarsRef.current.forEach((ds) => {
        ds.x += ds.speed;
        ds.y += ds.speed * 0.6;

        if (ds.x > window.innerWidth || ds.y > window.innerHeight) {
          ds.x = -20;
          ds.y = Math.random() * window.innerHeight * 0.5;
        }

        ds.color = lerp(ds.color, targetColor, 0.05);

        const tailLength = 40;
        const gradient = ctx.createLinearGradient(
          ds.x,
          ds.y,
          ds.x - tailLength,
          ds.y - tailLength * 0.6
        );
        gradient.addColorStop(
          0,
          `rgba(${ds.color},${ds.color},${ds.color},${0.9 * globalOpacity})`
        );
        gradient.addColorStop(1, `rgba(${ds.color},${ds.color},${ds.color},0)`);

        ctx.beginPath();
        ctx.moveTo(ds.x, ds.y);
        ctx.lineTo(ds.x - tailLength, ds.y - tailLength * 0.6);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ds.x, ds.y, ds.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ds.color},${ds.color},${ds.color},${
          ds.opacity * globalOpacity
        })`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 w-full h-full" />;
};

export default Starfield;
