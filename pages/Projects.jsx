import ProductImage from '../components/subComponents/ProjectImage';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useGlobalContext } from '../AppContext';
import Loader from 'react-loaders';
import { primaryText } from '../utils';
import Link from 'next/link';

const Projects = () => {
      const { productIds, primaryProduct, primaryImage } = useGlobalContext();
     
     
      return (
            <section>
            <motion.div className='h-screen grid justify-center items-center justify-items-center overflow-hidden content-center' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}}>
            <LayoutGroup type='crossfade'>
            <main className='md:row-start-1'>
                  <AnimatePresence>
                  <motion.article key={primaryProduct} className='h-99 w-99 max-lg:h-98 max-lg:w-[450px] max-sm:h-82 max-sm:w-82 transform-duration-500 cursor-pointer rounded-2xl group' style={{background: 'url(' + `../images/${primaryProduct}.jpg` + ')', backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'}} layoutId={`product-${primaryProduct}`}> 
                        <div className="bg-black h-99 max-lg:h-98 max-sm:h-82 bg-opacity-20  hover:bg-opacity-75 transform duration-300 grid items-center justify-center justify-items-center rounded-2xl text-white">
                        {primaryText.map(p => {
                             return (
                             p.id === primaryProduct ? (
                              <div key={p.id}>
                             <h2 className="text-3xl mb-5 transform -translate-y-40 group-hover:-translate-y-12 duration-300 opacity-0 group-hover:opacity-80">
                        {p.title}
                    </h2>
                    <h3 className='text-2xl transform translate-y-0 -translate-x-32 group-hover:translate-x-0 opacity-0 duration-300 group-hover:opacity-80'>{p.content}</h3> 
                    <div className='transform translate-y-36 group-hover:translate-y-10 opacity-0 duration-300 group-hover:opacity-80 grid grid-cols-2 gap-x-10'>
                    <Link href={p.visit} target='_blank' className ='bg-yellow-500 hover:bg-yellow-600 hover:text-white px-5 py-3 rounded-full text-black text-center'>
                    Visit
                    </Link>
                    <Link href={p.code} target='_blank' className ='bg-yellow-500 hover:bg-yellow-600 hover:text-white px-5 py-3 rounded-full text-black text-center'>
                    Code
                    </Link>
                    </div> 
                  </div>
                  ) : null  )})}
                        
                </div>
                  </motion.article>
                  </AnimatePresence>
            </main>
                  <aside className='grid md:row-start-1 md:grid-cols-3 grid-cols-6 h-99 max-lg:h-98 max-md:h-56 max-sm:h-44 z-10 overflow-hidden '>
                        <AnimatePresence>
                              {productIds.map((id, index) => (
                                    <ProductImage id={id} key={index} onExpand={primaryImage} />
                              ))}
                        </AnimatePresence>
                  </aside>
            </LayoutGroup>
      </motion.div>
        <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: 2}}>
        <Loader type='ball-scale-ripple-multiple'/>
        </motion.div>
      </section>

  )
}

export default Projects