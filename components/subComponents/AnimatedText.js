import { useGlobalContext } from "../../AppContext";
import { splitText, item, container } from '../../utils';



const AnimatedText = ({text}) => {
  const { motion } = useGlobalContext();  

  const words = splitText(text);

  return (
          <motion.h1  initial='hidden' animate={'visible'} variants={container}>
          {words.map((word, index) => {
            return (
              <span key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span key={index} style={{overflow: 'hidden', display: 'inline-block'}} >
                <motion.span style={{display: 'inline-block', cursor: 'pointer' }}  
                 variants={item} whileHover={{ scaleY: [1,0.5,1], color: 'yellow'}}  >
                  {element}
                </motion.span>
                  </span>
                )
              })}
              </span>
            )
          })}
          </motion.h1>
  )
}

export default AnimatedText