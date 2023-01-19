import { Js, React, Next, Sass } from '../assets'
import { motion } from 'framer-motion';
import { aboutText, aboutIconAnimate, aboutIconTransition } from '../utils';
import Text from '../components/subComponents/AnimatedText';
import Loader from 'react-loaders';

const About = () => {
 

  return (
    <section>
    <motion.div className='grid md:grid-cols-2 items-center h-screen justify-items-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
    <div className='grid gap-10 max-md:text-center max-sm:self-end'>
    <Text text={aboutText} />
    <p className='w-80'>I am a very passionate front end developer working with latest technologies on challenging and diverse projects. I am quite confident, naturally, curious and perpetually working on improving my chops one design problem at a time.</p>
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