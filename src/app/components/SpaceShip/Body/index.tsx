"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Body = () => {
    const [angle, setAngle] = useState(0);
    useGSAP(() => {
        // move astronaut up and down
        gsap.fromTo('.astronaut-container', {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        }, {
            y: 10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
        // make insideship-container to have a light reflection animation
        gsap.fromTo('.insideship-container', {
            background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%',
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        }, {
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)',
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%',
            duration: 5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }, []);

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
        <div className="relative w-40 h-40 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden insideship-container">
            <div
                className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-transparent border-b-white absolute"
                style={{
                    transform: `rotate(${angle + 90}deg) translateY(-70px)`,
                    transformOrigin: "50% 100%",
                }}
            >
            </div>
            <div className='astronaut-container'>
                <Image
                    className='opacity-60'
                    src="/main-page/astronaut.png"
                    alt="Astronaut"
                    width={160}
                    height={160}
                />
            </div>
        </div>
    );
}

export default Body