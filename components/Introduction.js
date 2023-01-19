import { motion } from 'framer-motion';
import { introText } from '../utils/constants';
import { Text, Picture } from './subComponents';
import Loader from 'react-loaders';

const Introduction = () => {

      return (
      <section>
      <motion.div className='intro-section gap' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
      <div>
      {introText.map(text => {
        return (
        <Text key={text.id} {...text} />
        )})}
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