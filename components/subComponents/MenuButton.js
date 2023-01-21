import { useGlobalContext } from "../../AppContext";
import { path01Variants, path02Variants, path03Variants } from "../../utils";

const MenuButton = ({ isOpen, animateOpen }) => {
  const { motion } = useGlobalContext();
      
  return (
      <button onClick={isOpen} className='lg:hidden mr-5 mt-5'>
       <svg width="50" height="50" viewBox="0 0 32 32">
        <motion.path
          stroke="#FFFFFF"
          animate={animateOpen}
          variants={path01Variants}
        />
        <motion.path
          stroke="#FFFFFF"
          animate={animateOpen}
          variants={path02Variants}
        />
        <motion.path
          stroke="#FFFFFF"
          animate={animateOpen}
          variants={path03Variants}
        />
      </svg>
    </button>
  )
}

export default MenuButton