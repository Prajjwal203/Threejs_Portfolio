import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/webgpu'
import Button from '../components/Button'

const About = () => {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("prajjwals203@gmail.com");
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000)
    }

  return (
    <section className="c-space my-20" id='about'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>
                            Hi I am Prajjwal Singh       
                        </p>
                        <p className='grid-subtext'>
                            With 2 years of experience, I have honed my skills in Frontend and Backend development, with a focus on Animated 3D websites
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid2" className="w-full sm:w-[276px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a strong focus on React and Node.js ecosystems.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
            <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center '>
                <Globe 
                    height={326} 
                    width={326} 
                    backgroundColor="rgba(0, 0, 0, 0)" 
                    backgroundImageOpacity={0.5} 
                    showAtmosphere 
                    showGraticules 
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{
                        lat: 26, lng: 83,
                        text: "I'm here!",
                        color: 'black',
                        size: 25,
                    }]}
                    />
            </div>


                <div>
                    <p className='grid-headtext'>I work remotely across most timezones</p>
                    <p className='grid-subtext'>I am currently based in Lucknow, India. I'm flexible to work from anywhere.</p>
                    <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                    
                </div>
            </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>My passion for Coding</p>
                        <p className='grid-subtext'>I love solving problems and building things through code. Coding isn&apos;t just my profession - it is my passion.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src='/assets/grid4.png' alt='grid4' className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact me</p>
                        <div className='copy-container' onClick={handleCopy} >
                            <img src={ isCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className="w-6 h-6" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>prajjwals203@gmail</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About