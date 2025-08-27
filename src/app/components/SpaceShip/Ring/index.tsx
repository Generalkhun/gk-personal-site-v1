import React from 'react'

type Props = {}

const Ring = () => {
    const size = 460; // Size of the SVG element
    const thickness = 4; // Thickness of the ring
    const radius = (size - thickness) / 2; // Radius of the ring
    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                className="absolute top-0 left-0"
                style={{ pointerEvents: "none" }}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="grey"
                    strokeWidth={thickness}
                />
            </svg>
        </div>
    );
}

export default Ring

// import React, { JSX } from "react";

// const PixelRing = () => {
//     const size = 460; // overall canvas size
//     const radius = 200; // radius in pixels
//     const thickness = 6; // thickness in pixels
//     const step = 8; // angle step in degrees (bigger = blockier)

//     const blocks: JSX.Element[] = [];

//     for (let angle = 0; angle < 360; angle += step) {
//         const rad = (angle * Math.PI) / 180;
//         const x = size / 2 + radius * Math.cos(rad);
//         const y = size / 2 + radius * Math.sin(rad);

//         blocks.push(
//             <rect
//                 key={angle}
//                 x={Math.round(x - thickness / 2)}
//                 y={Math.round(y - thickness / 2)}
//                 width={thickness}
//                 height={thickness}
//                 fill="white"
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
//                 style={{ pointerEvents: "none", imageRendering: "pixelated" }}
//                 shapeRendering="crispEdges"
//             >
//                 {blocks}
//             </svg>
//         </div>
//     );
// };

// export default PixelRing;
