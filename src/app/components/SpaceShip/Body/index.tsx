"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Body = () => {
    const [angle, setAngle] = useState(0);
    useEffect(() => {
        angle
        console.log("🚀 ~ Body ~ angle:", angle)

    }, [angle])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // get angle between spaceship center and mouse
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const rad = Math.atan2(dy, dx);
            const deg = rad * (180 / Math.PI);

            setAngle(deg);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative w-64 h-64 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center overflow-hidden">
            <div
                className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-transparent border-b-white absolute"
                style={{
                    transform: `rotate(${angle + 90}deg) translateY(-70px)`,
                    transformOrigin: "50% 100%",
                }}
            >
            </div>

            <Image
                src="/main-page/astronaut.png"
                alt="Astronaut"
                width={200}
                height={200}

            />
        </div>
    );
}

export default Body