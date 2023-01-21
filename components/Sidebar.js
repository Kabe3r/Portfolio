import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png'
import Links  from './subComponents/SideLinks';
import { linkVariants, itemVariants } from '../utils';
import  Button  from './subComponents/MenuButton';
import { useGlobalContext } from '../AppContext';

const Sidebar = () => {
      const { open, isOpen, motion, mode, toggleMode } = useGlobalContext();

      return (
            <aside className={`sidebar bg-white lg:h-full lg:w-24 lg:absolute lg:top-0 z-10 max-lg:flex  items-start ${open ? 'h-36': 'h-20'}`} >
                  <Link href='/' className=''>
                        <Image className='lg:mx-auto ml-5 h-20 w-20' src={logo} alt='logo' />
                        
                  </Link>

                  <button className={`px-4 py-2 ml-6 max-lg:mt-5 rounded-full ${mode === 'L' ? 'bg-white' : 'bg-yellow-500'} cursor-pointer`} onClick={toggleMode}>{mode}</button>
               
                  <Links linkVariants={linkVariants} itemVariants={itemVariants} open={open} />

                  <div className='max-lg:hidden'>
                  <Links />
                  </div>
                  <div>

                  <Button isOpen={isOpen} animateOpen={open ? 'open' : 'closed'}/>
                  </div>

            
            </aside>
      )
}

export default Sidebar