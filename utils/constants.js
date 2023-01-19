import { FaGithub, FaLinkedin, FaSkype, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { FcHome, FcBusinessman, FcWorkflow, FcContacts } from 'react-icons/fc';
import { SiSass, SiTailwindcss, SiBootstrap, SiNextdotjs, SiCodepen } from 'react-icons/si';


export const sideLinks = [
      {
            id: 1,
            icon: <FcHome className='mx-auto' size={35} />,
            url: '/',
            classes: 'home-icon'
      },
      {
            id: 2,
            icon: <FcBusinessman className='mx-auto' size={35} />,
            url: '/About',
            classes: 'about-icon'
      },
      {
            id: 3,
            icon: <FcWorkflow className='mx-auto' size={35} />,
            url: '/Projects',
            classes: 'projects-icon'
      },
      {
            id: 4,
            icon: <FcContacts className='mx-auto' size={35} />,
            url: '/Contact',
            classes: 'contact-icon'
      }

]

export const sideIcons = [
      {
            id: 1,
            icon: <FaGithub className='mx-auto' size={20} />,
            url: 'https://github.com/Kabe3r'
      },
      {
            id: 2,
            icon: <FaLinkedin className='mx-auto' size={20} />,
            url: 'https://www.linkedin.com/in/ahmed69'
      },
      {
            id: 3,
            icon: <SiCodepen className='mx-auto' size={20} />,
            url: 'https://codepen.io/your-work/?cursor=ZD0wJm89MSZwPTEmdj02NTcyNjgxNQ=='
      },
      {
            id: 4,
            icon: <FaSkype className='mx-auto' size={20} />,
            url: '#'
      }
]

export const introText = [
      {
            id: 1,
            text: 'Hi,',
      },
      {
            id: 2,
            text: "I'm Ahmed,",
      },
      {
            id: 3,
            text: 'Front End Developer.',
      },
]

export const introIcons = [

      {
            id: 1,
            icon: <FaCss3Alt fill='#347DC6' />,
            classes: 'circle css'
      },
      {
            id: 2,
            icon: <FaNodeJs fill='#F0DB4F' />,
            classes: 'circle js'
      },
      {
            id: 3,
            icon: <FaReact fill='#00D8FF' />,
            classes: 'circle react'
      },
      {
            id: 4,
            icon: <SiNextdotjs  fill='white' />,
            classes: 'circle next'
      },
      {
            id: 5,
            icon: <SiSass fill='#CC6699' />,
            classes: 'circle sass'
      },
      {
            id: 6,
            icon: <SiBootstrap fill='#712cf9' />,
            classes: 'circle bootstrap'
      },
      {
            id: 7,
            icon: <SiTailwindcss fill='rgb(56, 189, 248)' />,
            classes: 'circle tailwind'
      },
      {
            id: 8,
            icon: <FaHtml5 fill='#FF6C39' />,
            classes: 'circle html'
      }
]

export const aboutText =  'About me';

export const contactText = 'Contact me';

export const projectText = 'Projects';

export const inputText = [
      {
            id: 1,
            type: 'text',
            name: 'name',
            placeholder: 'Name'
      },
      {
            id: 2,
            type: 'email',
            name: 'email',
            placeholder: 'Email'
      },
      {
            id: 3,
            type: 'text',
            name: 'subject',
            placeholder: 'Subject'
      }
]

export const primaryText = [
      {
            id: 1,
            title: 'E-Commerce Website',
            content: 'React SASS Stripe',
            visit: 'https://store-react12.netlify.app',
            code: 'https://github.com/Kabe3r/E-commerce-React'
      },
      {
            id: 2,
            title: 'MarkDown Editor',
            content: 'React SASS',
            visit: 'https://markdownpreview12.netlify.app',
            code: 'https://github.com/Kabe3r/MarkDown-Preview'
      },
      {
            id: 3,
            title: 'Blog Website',
            content: 'problem upload images only on deployment',
            visit: '',
            code: 'https://github.com/Kabe3r/Blog-Post'
      },
      {
            id: 4,
            title: 'Gallery App',
            content: 'React',
            visit: 'https://photosgallery12.netlify.app',
            code: 'https://github.com/Kabe3r/Gallery-App'
      },
      {
            id: 5,
            title: 'Meme Generator',
            content: 'React SASS',
            visit: 'https://memegenerator12.netlify.app',
            code: 'https://github.com/Kabe3r/Meme-Generator'
      },
      {
            id: 6,
            title: 'Car Game',
            content: 'HTML CSS JS',
            visit: 'https://cargame12.netlify.app',
            code: 'https://github.com/Kabe3r/Car-Game'
      },
      {
            id: 7,
            title: 'Shoot Aliens',
            content: 'HTML CSS JS',
            visit: 'https://shootaliens12.netlify.app',
            code: 'https://github.com/Kabe3r/Shoot-Aliens'
      },
      {
            id: 8,
            title: 'MovieDB',
            content: 'React',
            visit: 'https://moviesdb12.netlify.app',
            code: 'https://github.com/Kabe3r/moviesDb'
      },
      {
            id: 9,
            title: 'Get News',
            content: 'React',
            visit: 'https://getnews12.netlify.app/',
            code: 'https://github.com/Kabe3r/Get-News'
      },
      {
            id: 10,
            title: 'Tenzies',
            content: 'React SASS',
            visit: 'https://tenzies12.netlify.app',
            code: 'https://github.com/Kabe3r/Tenizes'
      },
      {
            id: 11,
            title: 'Flappy Bird',
            content: 'HTML CSS JS',
            visit: 'https://flappy-bird124.netlify.app',
            code: 'https://github.com/Kabe3r/Flappy-Bird'
      },
      {
            id: 12,
            title: 'Typing Test',
            content: 'HTML CSS JS',
            visit: 'https://typing12.netlify.app',
            code: 'https://github.com/Kabe3r/Typing-Speed'
      },
      {
            id: 13,
            title: 'Quiz App',
            content: 'React SASS',
            visit: 'https://quizselect12.netlify.app',
            code: 'https://github.com/Kabe3r/Quiz-App'
      },
      {
            id: 14,
            title: 'Card Game',
            content: 'HTML CSS JS',
            visit: 'https://cards12.netlify.app',
            code: 'https://github.com/Kabe3r/Playing-Cards'
      },
      {
            id: 15,
            title: 'Popper',
            content: 'HTML CSS JS',
            visit: 'https://popper12.netlify.app',
            code: 'https://github.com/Kabe3r/Click-the-pop'
      },
      {
            id: 16,
            title: 'Select Word',
            content: 'HTML CSS JS',
            visit: 'https://guessword12.netlify.app',
            code: 'https://github.com/Kabe3r/Guess-the-word'
      },
      {
            id: 17,
            title: 'Heads & Tails',
            content: 'HTML CSS JS',
            visit: 'https://coinapp12.netlify.app',
            code: 'https://github.com/Kabe3r/Coin'
      },
      {
            id: 18,
            title: 'Rock, Scissors & Papers',
            content: 'HTML CSS JS',
            visit: 'https://rpsapp12.netlify.app',
            code: 'https://github.com/Kabe3r/Rock-Paper-Scissors'
      },
      {
            id: 19,
            title: 'Search Git User',
            content: 'React',
            visit: 'https://git-users12.netlify.app',
            code: 'https://github.com/Kabe3r/Git-users'
      }
]
