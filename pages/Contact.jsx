import { motion } from 'framer-motion';
import { contactText, contactInputTransition, inputText } from "../utils"
import Text from '../components/subComponents/AnimatedText';
import dynamic from 'next/dynamic'
import { useGlobalContext } from '../AppContext';

const DynamicHeader = dynamic(() => import('../components/Maps'), {
  ssr: false,
})

const Contact = () => {
  const { form, message, displayMsg, sendEmail, Loader } = useGlobalContext();

     
  return (
    <section>
    <motion.div className='h-screen grid lg:grid-cols-2' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}} >
    <div className='grid content-center justify-self-center '>
    <Text text={contactText} />
            <form ref={form} className='mt-10' onSubmit={sendEmail}>
              <ul className='p-0 m-0 '>
               {inputText.map(text => {
                const { id, type, name, placeholder } = text;
                return (
                  <li key={id} className='mb-5'>
                  <motion.input type={type} name={name} className='form-control' placeholder={placeholder}  whileFocus={contactInputTransition} required />
                  </li>
                )
               })}
                <li className='mb-5'>
                  <motion.textarea className='form-control h-40'
                    placeholder="Message"
                    name="message"
                    whileFocus={contactInputTransition}
                    required/>
                    {message ? (
                      <div className='mt-4 w-72 mx-auto rounded-lg p-4 bg-green-500 text-white'>{displayMsg}</div>
                    ): null}
                </li>
                <li>
                <button type="submit" className="text-sm leading-3 py-3 px-5 border border-slate-700 rounded-md hover:bg-black hover:text-white uppercase text-center mr-3 tracking-widest" >
                  Submit
                  </button>
                </li>
              </ul>
            </form>
    </div>
    <div className='grid justify-items-center max-lg:mb-10'>
     <DynamicHeader />
    </div>
    </motion.div>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: 2}}>
    <Loader type='ball-scale-ripple-multiple' />
    </motion.div>
    </section>
  )
}

export default Contact