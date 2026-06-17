import React from 'react'

function OrbitWorkflow() {

  const nodes = [
    "Idea",
    "Validation",
    "Research",
    "Business Plan",
    "Branding",
    "Website",
    "Launch"
  ];

  const radius = 280;

  return (
    <div className="relative w-[700px] h-[700px]">

      {/* Rings */}

      <div className="absolute inset-0 rounded-full border border-cyan-500/10" />

      <div className="absolute inset-[70px] rounded-full border border-cyan-500/10" />

      {/* Center Glow */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />

        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-xl">
          S
        </div>

      </div>

      {/* Nodes */}

      {nodes.map((node, index) => {

        const angle =
          ((360 / nodes.length) * index - 90) *
          (Math.PI / 180);

        const x =
          Math.cos(angle) * radius;

        const y =
          Math.sin(angle) * radius;

        return (
          <div
            key={node}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform:
                "translate(-50%, -50%)"
            }}
          >
            <div
              className="
              px-5
              py-3
              rounded-2xl
              bg-[#0B1020]
              border
              border-white/10
              shadow-[0_0_25px_rgba(0,229,255,0.2)]
              whitespace-nowrap
              "
            >
              {node}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default OrbitWorkflow