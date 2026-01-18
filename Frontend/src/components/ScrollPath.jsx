import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ScrollPath() {
  const mainRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    let ctx;

    const createTimeline = () => {
      ctx && ctx.revert();
      ScrollTrigger.refresh();

      ctx = gsap.context(() => {
        const box = boxRef.current;
        if (!box) return;
        
        const boxStartRect = box.getBoundingClientRect();

        const containers = gsap.utils.toArray(
          ".scrollpath-container:not(.scrollpath-initial)"
        );

        if (containers.length === 0) return;

        const points = containers.map((container) => {
          const marker =
            container.querySelector(".scrollpath-marker") || container;
          const r = marker.getBoundingClientRect();

          return {
            x:
              r.left +
              r.width / 2 -
              (boxStartRect.left + boxStartRect.width / 2),
            y:
              r.top +
              r.height / 2 -
              (boxStartRect.top + boxStartRect.height / 2),
          };
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".scrollpath-initial",
            start: "top center",
            endTrigger: ".scrollpath-final",
            end: "top center",
            scrub: 1,
            markers: false,
          },
        }).to(box, {
          ease: "none",
          motionPath: {
            path: points,
            curviness: 1.5,
          },
        });
      }, mainRef);
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      createTimeline();
    }, 100);

    window.addEventListener("resize", createTimeline);

    return () => {
      clearTimeout(timer);
      ctx && ctx.revert();
      window.removeEventListener("resize", createTimeline);
    };
  }, []);

  return (
    <div ref={mainRef} className="text-white relative">
      {/* Spacer */}
      <div className="h-[20vh] flex items-center justify-center text-xl opacity-50">
        ↓ scroll down ↓
      </div>

      {/* Main */}
      <div
        className="relative h-[300vh]"
      >
        {/* Initial - Starting position */}
        <div className="scrollpath-container scrollpath-initial absolute left-[60%] top-[5%] w-[140px] h-[140px] border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
          {/* Paper Airplane */}
          <svg
            ref={boxRef}
            className="scrollpath-box"
            width="80"
            height="80"
            viewBox="0 0 100 100"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.6))',
            }}
          >
            <defs>
              <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
              <linearGradient id="planeShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4c5fd7" />
                <stop offset="100%" stopColor="#5a3d8a" />
              </linearGradient>
            </defs>
            {/* Main body - top wing */}
            <polygon
              points="10,50 90,20 50,50"
              fill="url(#planeGradient)"
            />
            {/* Bottom wing */}
            <polygon
              points="10,50 90,80 50,50"
              fill="url(#planeShadow)"
            />
            {/* Center fold line */}
            <line
              x1="10"
              y1="50"
              x2="90"
              y2="50"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
            {/* Tail accent */}
            <polygon
              points="10,50 25,45 25,55"
              fill="rgba(255,255,255,0.2)"
            />
          </svg>
        </div>

        {/* Markers - Path waypoints */}
        {[
          "left-[10%] top-[25%]",
          "right-[10%] top-[45%]",
          "left-[20%] top-[65%]",
          "left-[60%] top-[80%]",
          "left-[15%] top-[95%]",
        ].map((pos, i) => (
          <div
            key={i}
            className={`scrollpath-container absolute ${pos} w-[140px] h-[140px] border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center`}
          >
            <div className="scrollpath-marker w-[80px] h-[80px] rounded-lg border border-white/10" />
          </div>
        ))}
      </div>

      {/* Final spacer */}
      <div className="scrollpath-final h-[20vh]" />
    </div>
  );
}
