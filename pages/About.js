import { useGlobalContext } from '../AppContext';
import { Js, React, Next, Sass } from '../assets'
import { aboutText, aboutIconAnimate, aboutIconTransition } from '../utils';
import Text from '../components/subComponents/AnimatedText';
import Head from 'next/head';

const About = () => {
  const { motion, Loader } = useGlobalContext();
 

  return (
    <section>
    <Head>
    <title>
      About Me
    </title>
    <link rel="icon" href="/logo.png" />
    </Head>
    <motion.div className='grid md:grid-cols-2 items-center h-screen justify-items-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
    <div className='grid gap-10 max-md:text-center max-sm:self-end'>
    <Text text={aboutText} />
    <p className='w-80'>I am a very passionate front end developer working with latest technologies on challenging and diverse projects. I am quite confident, naturally curious and perpetually working on improving my chops one design problem at a time.</p>
    </div>
    <div className='grid grid-cols-2 gap-x-10 ' >
    <motion.div className='grid gap-y-10' animate={aboutIconAnimate} transition={aboutIconTransition} >
    <Js />
    <React />
    </motion.div>
    <motion.div className='grid gap-y-10' animate={aboutIconAnimate} transition={aboutIconTransition}>
    <Sass/> 
    <Next />
    </motion.div>
    </div>
    </motion.div>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: 2}}>
    <Loader type='ball-scale-ripple-multiple' />
    </motion.div>
  </section>
  )
}

export default About;