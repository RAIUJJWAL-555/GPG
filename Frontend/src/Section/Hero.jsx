import LightRays from "@/components/LightRays.jsx";

function Hero() {

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F8F6F2' }}
    >
      {/* Light Rays Background - Full screen behind content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#FF6B00"
          raysSpeed={1.2}
          lightSpread={2.5}
          rayLength={3}
          pulsating={true}
          fadeDistance={1.2}
          saturation={2.0}
          followMouse={true}
          mouseInfluence={0.2}
        />
      </div>

      {/* Hero content - Centered in the middle of the screen */}
      <div
        className="text-center z-10 pointer-events-none px-4"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ color: '#0B1C2D' }}
        >
          Welcome to Our College
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl font-medium"
          style={{ color: '#6B7280' }}
        >
          Excellence in Education
        </p>
        {/* Gold accent line */}
        <div
          className="w-24 h-1 mx-auto mt-6 rounded-full"
          style={{ backgroundColor: '#C7A14A' }}
        />
      </div>
    </section>
  )
}

export default Hero
