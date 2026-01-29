import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const GlitchText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`glitch-wrapper ${className}`}>
      <div className="glitch" data-text={children}>
        {children}
      </div>
    </div>
  );
};

// Split Text Component
const SplitText = ({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  const letters = (children as string).split("");
  return (
    <span className={`split-text ${className}`}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className="letter"
          style={{
            animationDelay: `${delay + i * 0.05}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

// Falling Text Component
const FallingText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  const words = (children as string).split(" ");
  return (
    <div className={`falling-text ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );
};

// Scroll Float Component
const ScrollFloat = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        setOffsetY(scrolled * 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-float ${className}`}
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {children}
    </div>
  );
};

// Rotating Text Component
const RotatingText = ({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`rotating-text ${className}`}>
      <span key={index} className="rotating-word">
        {words[index]}
      </span>
    </span>
  );
};

// Bubble Menu Component
const BubbleMenu = ({
  items,
  onItemClick,
}: {
  items: Array<{ id: string; icon: string; label: string }>;
  onItemClick: (id: string) => void;
}) => {
  const [active, setActive] = useState(0);

  return (
    <nav className="bubble-menu">
      {items.map((item, i) => (
        <button
          key={i}
          className={`bubble-item ${active === i ? "active" : ""}`}
          onClick={() => {
            setActive(i);
            onItemClick(item.id);
          }}
        >
          <span className="bubble-icon">{item.icon}</span>
          <span className="bubble-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

// Scroll Stack Component
const ScrollStack = ({ items }: { items: React.ReactNode[] }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight - top) / height),
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="scroll-stack">
      {items.map((item, i) => {
        const itemProgress = Math.max(
          0,
          Math.min(1, (scrollProgress - i * 0.2) * 5),
        );
        return (
          <div
            key={i}
            className="stack-item"
            style={{
              transform: `translateY(${(1 - itemProgress) * 100}px) scale(${0.9 + itemProgress * 0.1})`,
              opacity: itemProgress,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

// Circular Gallery Component
const CircularGallery = ({
  images,
}: {
  images: Array<{ src: string; alt: string; caption: string }>;
}) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentRotation(rotation);
  };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (!isDragging) return;
  //   const diff = e.clientX - startX;
  //   setRotation(currentRotation + diff * 0.5);
  // };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleWindowMouseMove = (e: MouseEvent) => {
        const diff = e.clientX - startX;
        setRotation(currentRotation + diff * 0.5);
      };

      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleWindowMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startX, currentRotation]);

  const radius = 300;
  const angleStep = 360 / images.length;

  return (
    <div className="circular-gallery" onMouseDown={handleMouseDown}>
      <div
        className="gallery-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {images.map((img, i) => {
          const angle = i * angleStep;
          const x = radius * Math.sin((angle * Math.PI) / 180);
          const z = radius * Math.cos((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="gallery-item"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg)`,
              }}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-caption">{img.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AnimatedGallery = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-gallery">
      <div className="gallery-main">
        <button
          className="gallery-nav prev"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="gallery-track">
          {images.map((img: any, i: any) => {
            const offset = i - currentIndex;
            const isActive = i === currentIndex;

            return (
              <div
                key={i}
                className={`gallery-slide ${isActive ? "active" : ""}`}
                style={{
                  transform: `translateX(${Math.max(-1, Math.min(1, offset)) * 110}%) scale(${isActive ? 1 : 0.8})`,
                  opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.4,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <img src={img.src} alt={img.alt} />
                <div className="slide-caption">
                  <h4>{img.caption}</h4>
                  <p>{img.alt}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="gallery-nav next"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="gallery-dots">
        {images.map((_: any, i: any) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(i);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const StaggeredMenu = ({ items, onClose }: any) => {
  return (
    <div className="staggered-menu" onClick={onClose}>
      <div
        className="staggered-menu-items"
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item: any, index: any) => (
          <div
            key={index}
            className="staggered-menu-item"
            onClick={item.onClick}
          >
            <div className="staggered-menu-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {
  GlitchText,
  SplitText,
  FallingText,
  ScrollFloat,
  RotatingText,
  BubbleMenu,
  ScrollStack,
  CircularGallery,
  AnimatedGallery,
};
