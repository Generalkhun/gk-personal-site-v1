import React from 'react'
import Image from 'next/image'
import Body from './Body'

type Props = {}

const SpaceShip = (props: Props) => {
    return (
        <div className='flex justify-center items-center relative w-[600px] h-[600px]'>
            <Image
                className='absolute animate-spin-slow'
                src="/main-page/sphere-ship.png"
                alt="SpaceShip Body"
                width={600}
                height={600}
            />
            <div className='relative left-16 bottom-6'>
                <Body />
            </div>
        </div>
    )
}

export default SpaceShip