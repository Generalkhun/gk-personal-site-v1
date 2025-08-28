import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap"

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

    useGSAP(() => {
        // make the ring rotate
        gsap.to(".rotated-ring", {
            rotation: 360,
            duration: 100,
            ease: "linear",
            repeat: -1
        });
    })

    return (
        <div
            className="relative flex items-center justify-center rotated-ring"
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
