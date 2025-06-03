export function GalaxyBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-900 to-black overflow-hidden text-white">
      {/* Fundo das estrelas */}
      <div className="absolute inset-0 pointer-events-none">
        <Stars />
      </div>

      {/* Conteúdo da página por cima do fundo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Stars() {
  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="white"
      strokeWidth="1"
    >
      {[...Array(100)].map((_, i) => (
        <circle
          key={i}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r={Math.random() * 1.2 + 0.3}
          fill="white"
          opacity={Math.random() * 0.8 + 0.2}
        />
      ))}
    </svg>
  );
}
