"use client"
import React, { use } from 'react'
import Image from 'next/image'
import Body from './Body'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Ring from './Ring'

type Props = {}

const SpaceShip = (props: Props) => {
    return (
        <div className='flex justify-center items-center relative w-[600px] h-[600px]'>
            <div className='absolute z-10'>
                <Ring />
            </div>
            <div className='absolute'>
                <Image
                    src="/main-page/sphere-ship.png"
                    alt="SpaceShip Body"
                    width={400}
                    height={400}
                />
            </div>
            <div className='relative left-12 bottom-2'>
                <Body />
            </div>
        </div>
    )
}

export default SpaceShip