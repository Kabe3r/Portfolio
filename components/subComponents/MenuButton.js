import { motion } from "framer-motion";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L32 9.5" }
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  closed: { d: "M0 14.5L24 14.5" }
};

const path03Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 19.5L16 19.5" }
};

const MenuButton = ({ isOpen, animateOpen }) => {

      
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