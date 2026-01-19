import React, { useState, useRef, useCallback } from "react";

/**
 * GridBackground Component
 *
 * Features:
 * - Subtle grid background
 * - Grid lines glow golden near cursor
 * - Content stays above effects
 */

const GridBackground = ({
    children,
    className = "",
    gridColor = "rgba(160, 130, 60, 0.12)",
    glowColor = "rgba(199, 161, 74, 0.6)",
    gridSize = 40,
    glowSize = 300,
    showGrid = true
}) => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }, []);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setMousePosition({ x: -1000, y: -1000 });
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: "#F8F6F2" }}
        >
            {/* Base Grid Pattern */}
            {showGrid && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
              linear-gradient(${gridColor} 1px, transparent 1px),
              linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
            `,
                        backgroundSize: `${gridSize}px ${gridSize}px`,
                        zIndex: 0
                    }}
                />
            )}

            {/* Glowing Grid Near Cursor - Using mask for grid line glow effect */}
            {showGrid && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                    style={{
                        backgroundImage: `
              linear-gradient(${glowColor} 1.5px, transparent 1.5px),
              linear-gradient(90deg, ${glowColor} 1.5px, transparent 1.5px)
            `,
                        backgroundSize: `${gridSize}px ${gridSize}px`,
                        opacity: isHovering ? 1 : 0,
                        zIndex: 1,
                        maskImage: `radial-gradient(circle ${glowSize}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
                        WebkitMaskImage: `radial-gradient(circle ${glowSize}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GridBackground;
