import { useState, useEffect } from 'react'
import profile from './ProfileCircle.png';
import { ReactComponent as InstagramIcon } from './instagram.svg'
import { ReactComponent as GithubIcon } from './github.svg'
import { ReactComponent as EmailIcon } from './email.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as PageIcon } from './page.svg'
import { ReactComponent as DownArrow } from './downArrow.svg'
import './App.css'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Contact from './components/Contact'
import Careers from './components/Careers'
import ResumePDF from './Resume.pdf'

import Hobby10kmRun from './HobbyPics/10kmRun.jpg'
import HobbyAdventureRun from './HobbyPics/AdventureRun.jpg'
import HobbyCityBike from './HobbyPics/CityBike.jpg'
import HobbyNiagaraBike from './HobbyPics/NiagaraBike.jpg'
import HobbyOFSAA from './HobbyPics/OFSAA.jpg'
import HobbySantaRun from './HobbyPics/SantaRun.png'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import Game from './Game'
import GameEngine from './Game_engine'

function App() {
  const [projects, setProjects] = useState([   
    {
      id: 1,
      name: <h3>Infinity Chess + Chess AI (Abbott)</h3>,
      desc: "A game which extends upon the traditional chess experience by adding a feature where the edges of the board wrap. Basically a combination of Pacman and Chess. I have also made an engine so it can be played on this website, however it is weak. \n \n Languages and Libraries: React.js",
      display: true,
      link: null,
    },
    {
      id: 2,
      name: <h3>Stock Porfolio Creater</h3>,
      desc: "Creates an investment portfolio of ten SP500 stocks that is considered risky. It uses data analytics with panda's and numpy to ensure a risky portfolio is chosen. \n \n Languages and Libraries: Python, Numpy, Pandas, YFinance",
      display: true,
      link: 'https://github.com/dylpykill/StockPortfolioCreater',
    },
    {
      id: 3,
      name: <h3>Personal Website</h3>,
      desc: "What you are currently looking at. \n \n Languages and Libraries: React.js",
      display: true,
      link: 'https://github.com/dylpykill/PersonalWebsite'
    },
    {
      id: 4,
      name: <h3>FEN Decoder</h3>,
      desc: "FEN (Forsyth–Edwards Notation) is a chess notation used by computers to easily understand a position. To humans, it can be difficult to quickly recognize what is happening. This program parses the FEN chess notation into a visual chess board. \n \n Languages and Libraries: Java",
      display: true,
      link: 'https://github.com/dylpykill/FENDecoder'
    },
    {
      id: 5,
      name: <h3>Santa's Elf (Incomplete)</h3>,
      desc: "A discord bot that will organise secret Santa without the need for a human organiser making it quicker and easier to arrange. \n \n Languages and Libraries: Python, Discord Bot API",
      display: true,
      link: 'https://github.com/dylpykill/Santa-s-Elf'
    },
  ])

  const [contacts, setContacts] = useState([
    {
      id: 1,
      icon: <InstagramIcon style={{fill:'#366BA8'}}/>,
      iconHighlight: <InstagramIcon style={{fill:'#42afb0'}}/>,
      writting: <p className='contact'>@d_faelker</p>,
      link: "https://www.instagram.com/d_faelker/?hl=en"
    },
    {
      id: 2,
      icon: <GithubIcon style={{fill:'#366BA8'}}/>,
      iconHighlight: <GithubIcon style={{fill:'#42afb0'}}/>,
      writting: <p className='contact'>Dylan Faelker</p>,
      link: "mailto:faelkerd@gmail.com"
    },
    {
      id: 3,
      icon: <EmailIcon style={{fill:'#366BA8'}}/>,
      iconHighlight: <EmailIcon style={{fill:'#42afb0'}}/>,
      writting: <p className='contact'>faelkerd@gmail.com</p>,
      link: "https://github.com/dylpykill"
    },
    {
      id: 4,
      icon: <LinkedinIcon style={{fill:'#366BA8'}}/>,
      iconHighlight: <LinkedinIcon style={{fill:'#42afb0'}}/>,
      writting: <p className='contact'>Dylan Faelker</p>,
      link: "https://www.linkedin.com/in/dylanfaelker/"
    },
  ])

  const [navs, setNavs] = useState([
    {
      id:1,
      name:<h3>Home</h3>,
      link:0,
    },
    {
      id:2,
      name:<h3>About</h3>,
      link:1,
    },
    {
      id:3,
      name:<h3>Infinity Chess</h3>,
      link:2,
    }
  ])

  const careers = [
    {
      id: 1,
      title: "SOCCER REFEREE",
      location: "Oakville Soccer Club",
      date: "June 2018 - August 2018",
    },
    {
      id: 2,
      title: "SLIDE GUARD/CASHIER",
      location: "Town of Oakville",
      date: "September 2018 - September 2019",
    },
    {
      id: 3,
      title: "LIFEGUARD/SWIM INSTRUCTOR",
      location: "Town of Oakville",
      date: "September 2019 - September 2021",
    },
    {
      id: 4,
      title: "SOFTWARE DEVELOPER",
      location: "Idea Notion Development Inc",
      date: "May 2022 - August 2022",
    },
  ]

  //0=home, 1=about, 2=infinitychess, 3=infinitychess(engine)
  const [pageNum, setPageNum] = useState(0)

  //Show description
  const showDesc = (id, display) => (
    setProjects(
      projects.map((project) => 
        project.id === id ? 
          {...project, display:display} : 
          project
      )
    )
  )

  const highlightContact =  (id, hover) => (
    setContacts(
      contacts.map((contact) => 
        contact.id === id ? 
          {...contact, hover:hover} : 
          contact
      )
    )
  )

  const highlightNav =  (id, hover) => (
    setNavs(
      navs.map((nav) => 
        nav.id === id ? 
          {...nav, hover:hover} : 
          nav
      )
    )
  )

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarSize, setNavbarSize] = useState(0);
  const navstyle = {
    height: navbarSize
  }

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      const size = Math.max(0.01*window.innerHeight, 0.5*window.innerHeight - position);
      setNavbarSize(size);
  };

  const handleResize = () => {
    const position = window.pageYOffset;
    const size = Math.max(0.01*window.innerHeight, 0.5*window.innerHeight - position);
    setNavbarSize(size);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleScroll);
      };
  }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0
    });
  };





  //opens a link in a new tab or changes pageNum
  const openInNewTab = (url) => {
    if(isNaN(url)) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    else {
      setPageNum(url)
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/InfinityChess" element={<Game />} /> 
          <Route path="/InfinityChess/Engine" element={<GameEngine />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
