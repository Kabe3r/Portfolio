import Image from 'next/image'
import avatar from '../../images/avatar.png'
import { iconsContainer, iconWrapper, imageWrapper, introIcons } from '../../utils';
import { useGlobalContext } from '../../AppContext';

const Picture = () => {
      const { control, transition, motion, rotate } = useGlobalContext();      

      
      return (
        <>
        <div className='intro-section max-desktop:row-start-1'>
      <div className='absolute max-desktop:top-32 max-lg:top-1/4 max-sm:top-2/4'>
        <motion.div className='container-size max-sm:hidden' variants={iconsContainer} initial='initial' animate='animate' style={control && transition ? {rotate} : null }>
        {introIcons.map(intro => {
        const { id, icon, classes } = intro;
        return (
        <motion.div key={id} className={`absolute bg-black rounded-full p-2 ${classes}`} variants={iconWrapper} style={transition ? {rotate}: null }>
          {icon}
        </motion.div>
        )
        })}
      </motion.div>
        <motion.div variants={imageWrapper} initial='initial' animate='animate' className='max-sm:relative max-sm:top-32'>
      <Image className='h-82 img relative top-80 sm:absolute position' src={avatar} alt='ayeen' />
        </motion.div>
      </div>
      </div>
        </>
      )
}

export default Picture;
