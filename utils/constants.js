import { FaGithub, FaLinkedin, FaSkype, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { FcHome, FcBusinessman, FcWorkflow, FcContacts } from 'react-icons/fc';
import { SiSass, SiTailwindcss, SiBootstrap, SiNextdotjs, SiCodepen } from 'react-icons/si';


export const sideLinks = [
      {
            id: 1,
            icon: <FcHome className='mx-auto'  />,
            url: '/',
            classes: 'home-icon'
      },
      {
            id: 2,
            icon: <FcBusinessman className='mx-auto' />,
            url: '/About',
            classes: 'about-icon'
      },
      {
            id: 3,
            icon: <FcWorkflow className='mx-auto' />,
            url: '/Projects',
            classes: 'projects-icon'
      },
      {
            id: 4,
            icon: <FcContacts className='mx-auto' />,
            url: '/Contact',
            classes: 'contact-icon'
      }

]

export const sideIcons = [
      {
            id: 1,
            icon: <FaGithub className='mx-auto' />,
            url: 'https://github.com/Kabe3r'
      },
      {
            id: 2,
            icon: <FaLinkedin className='mx-auto' />,
            url: 'https://www.linkedin.com/in/ahmed69'
      },
      {
            id: 3,
            icon: <SiCodepen className='mx-auto' />,
            url: 'https://codepen.io/your-work/?cursor=ZD0wJm89MSZwPTEmdj02NTcyNjgxNQ=='
      },
      {
            id: 4,
            icon: <FaSkype className='mx-auto' />,
            url: 'https://join.skype.com/invite/vEMMM0guAhIk'
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
            title: 'Kokoranch Herbs',
            content: 'React SASS Stripe Redux',
            visit: 'https://kokoranch.vercel.app',
      },
      },
      {
            id: 3,
            title: 'Vibe Garden',
            content: 'React SASS',
            visit: 'https://vibe-garden-web-xi.vercel.app',
      },
      {
            id: 4,
            title: 'MarkDown Editor',
            content: 'React SASS',
            visit: 'https://markdownpreview12.netlify.app',
            code: 'https://github.com/Kabe3r/MarkDown-Preview'
      },
      {
            id: 5,
            title: 'Blog Website',
            content: 'Img upload failed on deployment',
            visit: 'https://blogpost23.netlify.app',
            code: 'https://github.com/Kabe3r/Blog-Post'
      },
      {
            id: 6,
            title: 'Gallery App',
            content: 'React',
            visit: 'https://photosgallery12.netlify.app',
            code: 'https://github.com/Kabe3r/Gallery-App'
      },
      {
            id: 7,
            title: 'Meme Generator',
            content: 'React SASS',
            visit: 'https://memegenerator12.netlify.app',
            code: 'https://github.com/Kabe3r/Meme-Generator'
      },
      {
            id: 8,
            title: 'Car Game',
            content: 'HTML CSS JS',
            visit: 'https://cargame12.netlify.app',
            code: 'https://github.com/Kabe3r/Car-Game'
      },
      {
            id: 9,
            title: 'Shoot Aliens',
            content: 'HTML CSS JS',
            visit: 'https://shootaliens12.netlify.app',
            code: 'https://github.com/Kabe3r/Shoot-Aliens'
      },
      {
            id: 10,
            title: 'MovieDB',
            content: 'React',
            visit: 'https://moviesdb12.netlify.app',
            code: 'https://github.com/Kabe3r/moviesDb'
      },
      {
            id: 11,
            title: 'Get News',
            content: 'React',
            visit: 'https://getnews12.netlify.app/',
            code: 'https://github.com/Kabe3r/Get-News'
      },
      {
            id: 12,
            title: 'Tenzies',
            content: 'React SASS',
            visit: 'https://tenzies12.netlify.app',
            code: 'https://github.com/Kabe3r/Tenizes'
      },
      {
            id: 13,
            title: 'Flappy Bird',
            content: 'HTML CSS JS',
            visit: 'https://flappy-bird124.netlify.app',
            code: 'https://github.com/Kabe3r/Flappy-Bird'
      },
      {
            id: 14,
            title: 'Typing Test',
            content: 'HTML CSS JS',
            visit: 'https://typing12.netlify.app',
            code: 'https://github.com/Kabe3r/Typing-Speed'
      },
      {
            id: 15,
            title: 'Quiz App',
            content: 'React SASS',
            visit: 'https://quizselect12.netlify.app',
            code: 'https://github.com/Kabe3r/Quiz-App'
      },
      {
            id: 16,
            title: 'Card Game',
            content: 'HTML CSS JS',
            visit: 'https://cards12.netlify.app',
            code: 'https://github.com/Kabe3r/Playing-Cards'
      },
      {
            id: 17,
            title: 'Popper',
            content: 'HTML CSS JS',
            visit: 'https://popper12.netlify.app',
            code: 'https://github.com/Kabe3r/Click-the-pop'
      },
      {
            id: 18,
            title: 'Select Word',
            content: 'HTML CSS JS',
            visit: 'https://guessword12.netlify.app',
            code: 'https://github.com/Kabe3r/Guess-the-word'
      },
      {
            id: 19,
            title: 'Heads & Tails',
            content: 'HTML CSS JS',
            visit: 'https://coinapp12.netlify.app',
            code: 'https://github.com/Kabe3r/Coin'
      },
      {
            id: 20,
            title: 'Rock, Scissors & Papers',
            content: 'HTML CSS JS',
            visit: 'https://rpsapp12.netlify.app',
            code: 'https://github.com/Kabe3r/Rock-Paper-Scissors'
      },
      {
            id: 21,
            title: 'Search Git User',
            content: 'React',
            visit: 'https://git-users12.netlify.app',
            code: 'https://github.com/Kabe3r/Git-users'
      }
]
