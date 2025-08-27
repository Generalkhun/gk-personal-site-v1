"use client"
import React, { useEffect, useState } from 'react'

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
        <div className="relative w-64 h-64 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center">
            {/* Astronaut (just a triangle/arrow for now) */}
            <div
                className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-transparent border-b-white absolute"
                style={{
                    transform: `rotate(${angle + 90}deg) translateY(-70px)`,
                    transformOrigin: "50% 100%",
                }}
            />
        </div>
    );
}

export default Body