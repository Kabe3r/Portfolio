import { useGlobalContext } from '../AppContext';
import { introText } from '../utils/constants';
import { Text, Picture } from './subComponents';

const Introduction = () => {
  const { motion, Loader, control, toggleControl } = useGlobalContext();

      return (
      <section>
      <motion.div className='intro-section gap' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
      <div className='max-sm:mt-20'>
      {introText.map(text => {
        return (
        <Text key={text.id} {...text} />
        )})}
        
      <motion.button className={`${control ? 'bg-red-600' : 'bg-green-600'} px-5 py-5 text-white rounded-full max-sm:hidden`} whileTap={{ scale: 0.8 }} onClick={toggleControl}>{control ? 'STOP' : 'PLAY'}</motion.button>
      </div>
        <Picture />
        </motion.div>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: 2}}>
        <Loader type='ball-scale-ripple-multiple'/>
        </motion.div>
        </section>
      )
}

export default Introduction