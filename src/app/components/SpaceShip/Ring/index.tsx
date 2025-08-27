import React from "react";

const Ring = () => {
    const size = 660; // Overall SVG size
    const thickness = 32; // Ring thickness
    const radius = (size - thickness) / 2; // Ring radius
    const numModules = 6; // Number of modules
    const moduleRadius = 20; // Size of each module

    const modules = [];
    for (let i = 0; i < numModules; i++) {
        const angle = (i * 360) / numModules;
        const rad = (angle * Math.PI) / 180;

        const x = size / 2 + radius * Math.cos(rad);
        const y = size / 2 + radius * Math.sin(rad);

        modules.push(
            <circle
                key={i}
                cx={x}
                cy={y}
                r={moduleRadius}
                fill="url(#moduleGradient)"
                stroke="grey"
                strokeWidth={2}
            />
        );
    }

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                className="absolute top-0 left-0"
                style={{ pointerEvents: "none", imageRendering: "pixelated" }}
                shapeRendering="crispEdges"
            >
                {/* Ring gradients to simulate pixel shading */}
                <defs>
                    <linearGradient id="ringGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#d0d0d0" />
                        <stop offset="100%" stopColor="#808080" />
                    </linearGradient>

                    {/* Module shading */}
                    <radialGradient id="moduleGradient" cx="50%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="60%" stopColor="#bbbbbb" />
                        <stop offset="100%" stopColor="#444444" />
                    </radialGradient>
                </defs>

                {/* Main shaded ring */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="url(#ringGradient)"
                    strokeWidth={thickness}
                />

                {/* Attached modules */}
                {modules}
            </svg>
        </div>
    );
};

export default Ring;


// import React from "react";

// const Ring = () => {
//     const size = 660; // Overall SVG size
//     const thickness = 30; // Ring thickness
//     const radius = (size - thickness) / 2; // Ring radius
//     const numCylinders = 6; // Number of cylinder arms
//     const cylinderLength = 80; // Length of each cylinder
//     const cylinderWidth = 12; // Thickness of cylinder arms

//     // generate 6 cylinders
//     const cylinders = [];
//     for (let i = 0; i < numCylinders; i++) {
//         const angle = (i * 360) / numCylinders;
//         const rad = (angle * Math.PI) / 180;

//         // cylinder position (on outer ring)
//         const x = size / 2 + radius * Math.cos(rad);
//         const y = size / 2 + radius * Math.sin(rad);

//         cylinders.push(
//             <rect
//                 key={i}
//                 x={-cylinderWidth / 2}
//                 y={-cylinderLength}
//                 width={cylinderWidth}
//                 height={cylinderLength}
//                 fill="lightgrey"
//                 stroke="grey"
//                 strokeWidth={2}
//                 transform={`translate(${x}, ${y}) rotate(${angle})`}
//                 rx={2}
//                 ry={2}
//             />
//         );
//     }

//     return (
//         <div
//             className="relative flex items-center justify-center"
//             style={{ width: size, height: size }}
//         >
//             <svg
//                 width={size}
//                 height={size}
//                 className="absolute top-0 left-0"
//                 style={{ pointerEvents: "none" }}
//             >
//                 {/* Main ring with shading */}
//                 <circle
//                     cx={size / 2}
//                     cy={size / 2}
//                     r={radius}
//                     fill="transparent"
//                     stroke="white"
//                     strokeWidth={thickness}
//                 />
//                 {/* Shadow layer for depth */}
//                 <circle
//                     cx={size / 2}
//                     cy={size / 2}
//                     r={radius}
//                     fill="transparent"
//                     stroke="grey"
//                     strokeOpacity={0.4}
//                     strokeWidth={thickness / 3}
//                 />

//                 {/* Cylinders attached to the ring */}
//                 {cylinders}
//             </svg>
//         </div>
//     );
// };

// export default Ring;
