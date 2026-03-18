import React from 'react'
import { localFont } from 'next/font/local'
import Image from 'next/image'

const simpleRoutine = localFont({
  src: '../../fonts/simple-routine.otf',
  weight: '400',
  style: 'normal',
})

const album = () => {
  return (
    <>
      <section className=''>
          <div className='bg-[#F1CB5E40] flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-16 lg:px-[15%]'>

               <h2 className='mt-12 text-[28px] sm:text-[32px] md:text-[36px] font-bold'>
                    <span className={simpleRoutine.className} >The</span> Mixtape
               </h2>

               <p className='text-sm sm:text-base leading-relaxed mt-4'>
               <span className='font-bold'>“To know where I’m going, I need to know where I came from.”</span><br />
Káshìmaawòó is more than a project, it’s a spiritual excavation. After the blinding lights of fame dimmed and the noise of the crowd quieted, Laycon found himself face-to-face with a silence he couldn’t ignore, the silence of self. Winner of Big Brother Naija’s Lockdown season, Laycon soared through fame’s fast lane: the parties, the fans, the endorsements, the expectations. But behind the scenes, beneath the applause, was a man battling questions louder than the cheers. Depression, doubt, disconnection. The fame was loud, but the identity was missing. Káshìmaawòó was born in that silence. <br />

<br />Before you dive into this project, keep in mind, it was created as a diary. It is not to prove any point, the pen game was weaved with truth and experience. This creator doesn't give a f*** about the structure of how music should be written or created, this creator doesn’t care about the technicalities of what constitutes a verse, a hook, a song, a mixtape. This creator has stories to tell, experiences to share, emotions to express, and he will do it any way he chooses. <br />

<br /><span className='font-bold'>My life and experiences have not happened in a specific, structured way, so I will not share them in a specific, structured way. I know that the stories I tell, the experiences I share, and the emotions I express will not be for everybody, but they will be genuine and authentic. </span><br />

- Laycon
               </p>

          <div className='mt-9'>
          <Image
        src="/albumArt.jpg"
        alt="Shoe product"
        width={400}
        height={400}
        className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto rounded-xl'
      />
          </div>

          </div>
      </section>
    </>
  )
}

export default album