import Image from 'next/image'
import avatar from '../../images/avatar.png'
import { iconsContainer, iconWrapper, imageWrapper, introIcons } from '../../utils';
import { motion, useTime, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Picture = () => {
  const [transition, setTransition] = useState(false);
      const time = useTime();
      const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
      
      
      useEffect(() => {
        const timer = setTimeout(() => {
           setTransition(true);
         }, 4200);
        return () => clearTimeout(timer);
      }, []);

      
      
      return (
        <div className='intro-section max-desktop:row-start-1'>
      <motion.div className='absolute max-desktop:top-32 max-lg:top-1/4 max-sm:top-2/4' whileTap={{ scale: 0.8 }}>
        <motion.div className='container-size max-sm:hidden' variants={iconsContainer} initial='initial' animate='animate' style={ transition && {rotate} }>
        {introIcons.map(intro => {
        const { id, icon, classes } = intro;
        return (
        <motion.div key={id} className={`absolute bg-black rounded-full p-2 ${classes}`} variants={iconWrapper} style={transition ? {rotate}: null }>
          {icon}
        </motion.div>
        )
        })}
      </motion.div>
        <motion.div variants={imageWrapper} initial='initial' animate='animate'>
      <Image className='h-82 img relative top-80 sm:absolute position' src={avatar} alt='ayeen' />
        </motion.div>
      </motion.div>
      </div>
      )
}

export default Picture;
