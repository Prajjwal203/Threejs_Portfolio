import { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
// import { Leva } from 'leva';
import { calculateSizes } from '../constants';
// import { useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: -10.6,
  //     min: -15,
  //     max: 15,
  //   },
  //   positionZ: {
  //     value: -4,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0.2,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: -3.2,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleX: {
  //     value: 0.1,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleY: {
  //     value: 0.1,
  //     min: -10,
  //     max: 10,
  //   },
  //   scaleZ: {
  //     value: 0.1,
  //     min: -10,
  //     max: 10,
  //   }});
    
  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className='min-h-screen w-full flex flex-col relative'>

      <div className='w=full auto-full flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans' >
        <span className='waving-hand'>Hi, I&apos;m Prajjwal👋</span>
        </p>
        <p className='hero_tag text-gray_gradient' >
          Building Products and Brands!
        </p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}
        <Canvas className='w-full h-full'> 
          <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HackerRoom 
              // position={[2, -10.5, 2]} 
              // scale={isMobile ? 0.08 : 0.1} 
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]} 
              scale={sizes.deskScale}

              />

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />

          </Suspense>
        </Canvas>

      </div>

    </section>
  )
}

export default Hero