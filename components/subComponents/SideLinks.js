import { sideLinks, sideIcons } from '../../utils/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';


const SideLinks = ({open, linkVariants, itemVariants }) => {
      return (
            <>
            <motion.ul className='side-links lg:absolute lg:h-52 lg:top-1/3 w-full h-full max-lg:flex justify-center items-end' variants={linkVariants} animate={open ? "open" : "closed"}>
                  {sideLinks.map(links => {
                        const { id, icon, url, classes } = links;
                        return (
                              <motion.li key={id} className='lg:h-14 h-12 mx-auto' variants={itemVariants}>
                                    <Link href={url} className={`hide-icon text-2xl sm:text-3xl ${classes}`}>
                                          {icon}
                                    </Link>
                              </motion.li>
                        )
                  })}
            </motion.ul>
            <motion.ul className='side-icons lg:absolute bottom-5 w-full max-lg:h-full max-lg:flex justify-center items-end' variants={linkVariants} animate={open ? "open" : "closed"}>
            {sideIcons.map(icons => {
                              const { id, icon, url } = icons;
                              return (
                                    <motion.li key={id} className='hover:text-yellow-400 text-stone-400 h-10 mx-auto' variants={itemVariants} >
                                          <Link href={url} target='_blank'>
                                                {icon}
                                          </Link>
                                    </motion.li>
                              )
                        })}
            </motion.ul>
            </>
      )
}

export default SideLinks;