/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React,{Suspense, useEffect, useRef, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {HomeInfo, Loader} from '../components/index';
// import Island from '../models/Island';
// import Island2 from '../models/Island2';
import Tapu from '../models/Tapu';
import  Sky  from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
// import TempIsland from '../models/temp';
// import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
import Boat from '../../../glb/Boat';
import sakura from '../assets/sakura.mp3';
import terebhi from '../assets/terebhi.mp3';
import audio from '../assets/audio.mp3';
import { soundoff } from '../assets/icons';
import { soundon } from '../assets/icons';



const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const audioRef=useRef(new Audio(terebhi));
  audioRef.current.volume=0.6;
  audioRef.current.loop=true;
  const [isPlayingMusic,setIsPlayingMusic]=useState(false);


  useEffect(()=>{
    if(isPlayingMusic) {
      audioRef.current.play();
    }

    return ()=>{
      audioRef.current.pause();
    }

  },[isPlayingMusic])

const adjustIslandForScreenSize=()=>{
  let screenScale=0;
  let screenPosition=[0,-6.5,-43];
  let rotation=[0.1,4.7,0]
 

  if(window.innerWidth<768){
    // screenScale=[0.9,0.9,0.9];
    screenScale=[0.7,0.7,0.7];
  }
//   else if(window.innerWidth<400)
// {
//   screenScale=[0.5,0.5,0.5];
// } 
 else {
    screenScale=[1,1,1];
    // screenScale=[1.3,1.3,1.3]
    // screenScale=[4,6,4];
  }

  return [screenPosition,screenScale,rotation];
}

const [islandPosition,islandScale,islandRotation]=adjustIslandForScreenSize();




const adjustPlaneForScreenSize=()=>{
  let screenScale,screenPosition;
  
  if(window.innerWidth<768){
    screenScale=[1.5,1.5,1.5]
    screenPosition=[0,-1.5,0]
  }
  else {
    screenScale=[1,1,1];
    screenPosition=[0,-4,-4]
  }

  return [screenPosition,screenScale];
}

const [planeScale,planePosition]=adjustPlaneForScreenSize();



const adjustBoatForScreenSize=()=>{
  let screenScale,screenPosition;
  
  if(window.innerWidth<768){
    screenScale=[1.5,1.5,1.5]
    screenPosition=[0,-1.5,0]
  }
  else {
    screenScale=[0.6,0.6,0.6];
    screenPosition=[0,-4,-4]
  }

  return [screenPosition,screenScale];
}

const [boatScale,boatPosition]=adjustBoatForScreenSize();

  return (
    <section className='w-full h-screen relative'>

    <div className='absolute top-28 left-0 right-0 z-10 flex items- enter justify-center'>
 {currentStage&& <HomeInfo currentStage={currentStage}/>}
    </div>



      <Canvas
      className={`w-[600px]  bg-transparent ${isRotating? 'cursor-grabbing':'cursor-grab'}`}
      camera={{near:0.1,far:1000}}
      >
       <Suspense fallback={<Loader/>}>
        <directionalLight
           position={[1,1,1]}
           intensity={2}
         />
         <ambientLight
          intensity={0.5}
         />
        <hemisphereLight
          skyColor='#b1e1ff'
          groundColor='#000000'
          intensity={1}
        />
        <Bird/>
        <Sky
          isRotating={isRotating}
        />
        <Tapu
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        {/* <Island
            position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        /> */}
        <Plane
          isRotating={isRotating}
          Scale={planeScale}
          Position={planePosition}
          rotation={[0,20,0]}
        />
        {/* <Boat
          scale={0.2}
          position={[1,-2,1]}
        /> */}
       </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic? soundoff : soundon}
         alt="sound"
         className='w-10 h-10 cursor-pointer object-contain' 
          onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
         />
      </div>
    </section>
  )
}

export default Home;
