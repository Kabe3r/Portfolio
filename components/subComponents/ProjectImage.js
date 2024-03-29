import { useGlobalContext } from '../../AppContext';

const ProjectImage = ({ id,  onExpand }) => {
  const { motion } = useGlobalContext();
 
  return (
      <motion.img src={`../../images/${id}.jpg`} loading='lazy' alt='img' onClick={() => onExpand(id)} className='rounded-xl h-24 w-24 max-lg:h-[4.5rem] max-lg:w-[4.5rem] max-sm:w-[3.5rem] max-sm:h-[3.5rem]' layoutId={`product-${id}`} />
  )
}

export default ProjectImage;