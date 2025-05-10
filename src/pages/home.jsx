import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Code2, Cpu, Github, Linkedin, Rss,  X, User, Zap, Moon, SunMedium } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyButton = ({ variant, size, className, children, onClick }) => {
  let baseClasses = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200';
  if (size === 'lg') { baseClasses += ' px-6 py-3 text-lg'; } else if (size === 'sm') { baseClasses += ' px-3 py-1.5 text-sm'; } else { baseClasses += ' px-4 py-2 text-base'; }
  if (variant === 'outline') {
    baseClasses += ' bg-transparent border hover:bg-white/10';
  } else {
    baseClasses += ' bg-blue-500 text-white hover:bg-blue-600';
  }
  const combinedClasses = `${baseClasses} ${className}`;
  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

const featuredPosts = [
  { id: '1', title: 'The Future of AI: A Comprehensive Overview', summary: 'Explore the exciting advancements and potential challenges in the field of Artificial Intelligence.', category: 'AI', date: '2025-02-10', imageUrl: './ai.png', slug: 'future-of-ai' },
  { id: '2', title: 'Mastering React Hooks: A Practical Guide', summary: 'Learn how to leverage React Hooks to write cleaner and more efficient code.', category: 'Web Development', date: '2025-03-25', imageUrl: './react.png', slug: 'mastering-react-hooks' },
  { id: '3', title: 'Building Scalable Systems with Cloud Technologies', summary: 'Discover the best practices for designing and deploying scalable applications in the cloud.', category: 'Cloud', date: '2025-04-21', imageUrl: './cloud.png', slug: 'scalable-systems-cloud' },
];

const techCategories = ['AI', 'Web Development', 'Cloud', 'Blockchain', 'Cybersecurity', 'Gadgets'];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  hover: { scale: 1.03, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const PixelatedText = ({ text, className, speed = 20 }) => {
  const [displayText, setDisplayText] = useState('');
  const [pixels, setPixels] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      const newPixels = [];
      for (let i = 0; i < text.length * 10; i++) {
        newPixels.push({
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 2 + 1,
          direction: Math.random() * Math.PI * 2,
        });
      }
      setPixels(newPixels);
    }
  }, [charIndex, text, isComplete, speed]);

  return (
    <div className="relative">
      <h1 className={className}>
        {displayText}
        {charIndex < text.length && (<span className="inline-block animate-pulse">|</span>)}
      </h1>
      {isComplete && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {pixels.map((pixel, index) => (
            <motion.div
              key={index}
              className="absolute bg-blue-400"
              initial={{ x: 0, y: 0, opacity: pixel.opacity, width: `${pixel.size}px`, height: `${pixel.size}px` }}
              animate={{ x: `${pixel.x}px`, y: `${pixel.y}px`, opacity: 0 }}
              transition={{ duration: pixel.speed, ease: 'easeOut' }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [latestPosts, setLatestPosts] = useState([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [floatingIcons, setFloatingIcons] = useState([]);
    const latestPostsRef = useRef(null);
    const aboutMeRef = useRef(null);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) { setIsDarkMode(savedTheme === 'dark'); }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const sortedPosts = [...featuredPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setLatestPosts(sortedPosts.slice(0, 3));
  }, []);

  useEffect(() => {
    const icons = [];
    const numIcons = 15;
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      for (let i = 0; i < numIcons; i++) {
        icons.push({
          x: Math.random() * containerRect.width,
          y: Math.random() * containerRect.height,
          icon: [Cpu, Code2, Zap, Rss, Github, Linkedin, X][Math.floor(Math.random() * 7)],
          size: Math.random() * 20 + 15,
          color: ['#a7f3d0', '#facc15', '#60a5fa', '#d8b4fe', '#f9a8d4', '#6ee7b7'][Math.floor(Math.random() * 6)],
          speedX: Math.random() * 2 + 1,
          speedY: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      setFloatingIcons(icons);
    }
  }, []);

  const handleMouseMove = (event) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mousePosition.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }
  };

    const scrollToLatestPosts = () => {
        latestPostsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAboutMe = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const updateIcons = () => {
      setFloatingIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;
          const containerRect = containerRef.current?.getBoundingClientRect();

          if (containerRect) {
            if (newX > containerRect.width || newX < 0) { icon.speedX *= -1; }
            if (newY > containerRect.height || newY < 0) { icon.speedY *= -1; }
          }
          const distance = Math.sqrt(Math.pow(mousePosition.current.x - icon.x, 2) + Math.pow(mousePosition.current.y - icon.y, 2));
          let scale = 1;
          if (distance < 100) { scale = 1 + (100 - distance) * 0.01; }
          return { ...icon, x: newX, y: newY, scale: scale };
        })
      );
    };
    const animationFrameId = requestAnimationFrame(updateIcons);
    return () => cancelAnimationFrame(animationFrameId);
  }, [floatingIcons, mousePosition]);

  const renderFloatingIcons = () => {
    return floatingIcons.map((icon, index) => {
      const IconComponent = icon.icon;
      return (
        <motion.div
          key={index}
          style={{ position: 'absolute', left: icon.x, top: icon.y, scale: icon.scale, opacity: icon.opacity, color: icon.color }}
          className="pointer-events-none"
        >
          <IconComponent size={icon.size} />
        </motion.div>
      );
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500`} ref={containerRef} onMouseMove={handleMouseMove} style={{ position: 'relative' }}>
      {renderFloatingIcons()}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
                      <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        AISHWARYA&apos;S BLOG
                      </h1>
                    </Link>
          <MyButton
            variant="outline"
            onClick={toggleTheme}
            className={`${isDarkMode ? 'text-gray-300 hover:text-white border-gray-700 hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 border-gray-700 hover:bg-gray-300'}`}
          >
            {isDarkMode ? (<SunMedium className="h-5 w-5" />) : (<Moon className="h-5 w-5" />)}
            <span className="sr-only">Toggle Theme</span>
          </MyButton>
        </div>
        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} className="text-center mb-12">
          <motion.div variants={slideInVariants}>
            <PixelatedText
              text="Hi, I'm Aishwarya"
              className={`text-4xl sm:text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}
              speed={80}
            />
            <span className={`text-4xl sm:text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}></span>
          </motion.div>
          <motion.p variants={slideInVariants} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Hey there! I&apos;m Aishwarya, and I love building stuff on the web.  I'm really into full stack development, especially with the MERN stack, and I also enjoy working with Python. Currently, I'm working on some cool AI projects at Infosys Technologies in Dubai.  I&apos;m also an AI enthusiast and do some freelancing on the side.
          </motion.p>
          <div className="mt-8 flex justify-center gap-4">
            <MyButton
              variant="outline"
              size="lg"
                                onClick={scrollToLatestPosts}
              className={`${isDarkMode
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/30 hover:border-blue-500/50'
                : 'bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-blue-600 hover:from-blue-500/70 hover:to-purple-500/70 border border-blue-500/30 hover:border-blue-500/50'
                }`}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Latest Posts
            </MyButton>
            <MyButton
              variant="outline"
              size="lg"
                                onClick={scrollToAboutMe}
              className={`${isDarkMode
                ? 'bg-gradient-to-r from-green-500/10 to-teal-500/10 text-green-300 hover:from-green-500/20 hover:to-teal-500/20 border border-green-500/30 hover:border-green-500/50'
                : 'bg-gradient-to-r from-green-500/50 to-teal-500/50 text-green-600 hover:from-green-500/70 hover:to-teal-500/70 border border-green-500/30 hover:border-green-500/50'
                }`}
            >
              <User className="mr-2 h-5 w-5" />
              About Me
            </MyButton>
          </div>
        </motion.section>
        <section className="mb-12"  ref={latestPostsRef}>
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-6 flex items-center`}>
            <Zap className={`mr-2 h-6 w-6 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className={`${isDarkMode
                    ? 'bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20'
                    : 'bg-white/90 backdrop-blur-md border-gray-200 hover:border-gray-300'
                    } rounded-xl p-6 shadow-lg border transition-all duration-300`}
                >
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" loading="lazy" />
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                    {post.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {post.date}
                    </span>
                    <Link to={`/article/${post.slug}`} >
                    <MyButton

                      variant="outline"
                      size="sm"
                      className={`${isDarkMode
                        ? 'text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 border-blue-500/30'
                        : 'text-blue-800 hover:text-blue-900 hover:bg-blue-500/30 border-blue-700/30'
                        }`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MyButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
        <section className="mb-12">
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-6 flex items-center`}>
            <Code2 className={`mr-2 h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className={`${isDarkMode
                  ? 'bg-white/5 backdrop-blur-md border-white/10'
                  : 'bg-white/90 backdrop-blur-md border-gray-200'
                  } rounded-xl p-4 shadow-lg border transition-all duration-200 hover:scale-[1.02] hover:shadow-xl`}
              >
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                  {post.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  {post.summary}
                </p>
                <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {post.date}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-3xl font-semibold mb-6 flex items-center`}>
            <Cpu className="mr-2 h-6 w-6 text-purple-400" />
            Tech Categories
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {techCategories.map((category) => (
              <span
                key={category}
                className={`${isDarkMode
                  ? 'bg-white/5 backdrop-blur-md border-white/10 text-gray-300  hover:border-white/20'
                  : 'bg-white/90 text-gray-800  backdrop-blur-md border-gray-200 hover:border-gray-300'
                  } rounded-full px-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.05]`}
              >
                {category}
              </span>
            ))}
          </div>
        </section>
        <section className="mb-12" ref={aboutMeRef}>
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-6 flex items-center`}>
            <User className="mr-2 h-6 w-6 text-sky-400" />
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 flex flex-col md:flex-row items-center gap-8">
            <img
              src="./me.jpg"
              alt="Aishwarya"
              className="w-40 h-40 rounded-full border-4 border-purple-500/30 shadow-lg"
            />
            <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-left`}>
              <p className="mb-4">
                I&apos;m Aishwarya, a passionate and dedicated developer with a specialization in full-stack development, with a strong emphasis on the MERN stack.
              </p>
              <p className="mb-4">
                My expertise extends to Python as well, allowing me to tackle a wide range of development challenges.
              </p>
              <p className="mb-4">
                I am currently contributing my skills as a Full Stack Developer at Infosys Technologies, a Dubai-based AI company, where I am actively involved in developing cutting-edge AI solutions.
              </p>
              <p className="mb-4">
                Beyond my work at Infosys, I am deeply enthusiastic about the field of Artificial Intelligence and its potential to revolutionize industries. I also leverage my development skills through freelance projects, allowing me to work on diverse and challenging projects.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-6 flex items-center`}>
            <Rss className="mr-2 h-6 w-6 text-orange-400" />
            Connect With Me
          </h2>
          <div className="flex gap-6 justify-center">
            <a href="https://x.com/iaishwaryaroy" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110" aria-label="X">
              <X className="h-7 w-7" />
            </a>
            <a href="https://www.linkedin.com/in/aishwarya-roy-a8144a1b8" className="text-gray-400 hover:text-blue-600 transition-colors hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7" />
            </a>
            <a href="https://github.com/aishwarya1999-roy" className="text-gray-400 hover:text-gray-200 transition-colors hover:scale-110" aria-label="GitHub">
              <Github className="h-7 w-7" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

