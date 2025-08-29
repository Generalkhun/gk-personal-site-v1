"use client"
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap"
import Image from "next/image";

const Ring = () => {
    const size = 660; // Overall SVG size
    const thickness = 32; // Ring thickness
    const radius = (size - thickness) / 2; // Ring radius
    const numModules = 6; // Number of modules
    const moduleSize = 120; // Image size

    const modules = [];
    for (let i = 0; i < numModules; i++) {
        const angle = (i * 360) / numModules;
        const rad = (angle * Math.PI) / 180;

        const x = size / 2 + radius * Math.cos(rad);
        const y = size / 2 + radius * Math.sin(rad);

        modules.push(
            <div
                key={i}
                className="absolute"
                style={{
                    left: x - moduleSize / 2,
                    top: y - moduleSize / 2,
                    transform: `rotate(${angle + 90}deg)`, // <<< หันเข้าศูนย์กลาง
                    transformOrigin: "50% 50%",
                }}
            >
                <Image
                    src="/main-page/cylinder-module.png"
                    alt="cylinder-module"
                    width={moduleSize}
                    height={moduleSize}
                    style={{ imageRendering: "pixelated" }}
                />
            </div>
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
            <div>
                <svg  
                width={size}
                height={size}
                className="absolute top-0 left-0"
                style={{ pointerEvents: "none", imageRendering: "pixelated" }}
                shapeRendering="crispEdges">
                    <defs>
                        {/* Pattern สำหรับวงแหวน */}
                        <pattern id="ringTexture" patternUnits="userSpaceOnUse" width={400} height={400}>
                            <image href="/main-page/ring-texture.png" width={400} height={400} />
                        </pattern>

                        {/* Module shading เดิม (ยังคงไว้) */}
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
                        stroke="url(#ringTexture)"
                        strokeWidth={thickness}
                    />
                </svg>
                {/* Attached modules */}
                {modules}
            </div>
        </div>
    );
};

export default Ring;
