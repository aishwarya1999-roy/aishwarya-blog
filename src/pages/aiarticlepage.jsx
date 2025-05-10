import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Moon, SunMedium } from 'lucide-react';
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

const AIArticlePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
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

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

  return (
    <div className={`min-h-screen transition-colors duration-500`}>
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

        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} className="text-left mb-12">
          <h2 className={`text-4xl  font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            The Future of AI: A Comprehensive Overview
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            Published: 2025-02-10 | Category: AI
          </p>
          <img src="../ai2.png"  className="w-full h-72 rounded-lg shadow-lg mb-8" />
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} prose prose-invert`}>
            <p>
              Artificial Intelligence (AI) is rapidly transforming our world, and its future
              holds immense potential. From self-driving cars to advanced medical
              diagnostics, AI is poised to revolutionize various industries and aspects of
              our daily lives.
            </p>
            <h2>Key Trends in AI</h2>
            <ul>
              <li>
                <strong>Deep Learning:</strong> Advancements in deep learning are enabling machines to
                perform complex tasks such as image recognition, natural language
                processing, and speech recognition with remarkable accuracy.
              </li>
              <li>
                <strong>Natural Language Processing (NLP):</strong> NLP is making it possible for
                machines to understand, interpret, and generate human language, leading to
                the development of virtual assistants, chatbots, and language
                translation tools.
              </li>
              <li>
                <strong>Computer Vision:</strong> Computer vision technologies are empowering
                machines to "see" and interpret visual information from the world,
                enabling applications like facial recognition, object detection, and
                autonomous navigation.
              </li>
              <li>
                <strong>Reinforcement Learning:</strong> Reinforcement learning is a type of machine
                learning where an agent learns to make decisions by interacting with an
                environment. This approach has shown great promise in robotics, game
                playing, and optimization problems.
              </li>
              <li>
                <strong>Generative AI:</strong> Generative AI models can create new data, including text,
                images, and music. This technology has the potential to revolutionize
                creative industries and scientific research.
              </li>
            </ul>
            <h2>Applications of AI</h2>
            <p>
              The applications of AI are vast and continue to expand. Some of the key
              areas where AI is making a significant impact include:
            </p>
            <ul>
              <li>
                <strong>Healthcare:</strong> AI is being used for drug discovery, disease diagnosis,
                personalized medicine, and robotic surgery.
              </li>
              <li>
                <strong>Transportation:</strong> Self-driving cars, drones, and intelligent traffic
                management systems are transforming the way we move people and goods.
              </li>
              <li>
                <strong>Finance:</strong> AI is used for fraud detection, algorithmic trading, risk
                management, and personalized financial advice.
              </li>
              <li>
                <strong>Manufacturing:</strong> AI-powered robots, predictive maintenance, and supply
                chain optimization are increasing efficiency and reducing costs in
                manufacturing.
              </li>
              <li>
                <strong>Entertainment:</strong> AI is used for content creation, recommendation
                systems, and personalized entertainment experiences.
              </li>
            </ul>
            <h2>Ethical Considerations</h2>
            <p>
              As AI technologies become more powerful and pervasive, it is crucial to
              address the ethical implications. Some of the key concerns include:
            </p>
            <ul>
              <li>
                <strong>Bias and Fairness:</strong> AI systems can perpetuate and amplify existing biases
                in the data they are trained on, leading to unfair or discriminatory
                outcomes.
              </li>
              <li>
                <strong>Privacy:</strong> The use of AI often involves the collection and analysis of
                large amounts of data, raising concerns about privacy and data security.
              </li>
              <li>
                <strong>Job Displacement:</strong> The automation of tasks through AI could lead to
                job losses in certain industries, requiring workers to adapt to new roles.
              </li>
              <li>
                <strong>Autonomous Weapons:</strong> The development of AI-powered autonomous weapons
                raises ethical and safety concerns about the potential for unintended
                consequences.
              </li>
              <li>
                <strong>Transparency and Explainability:</strong> Many AI systems, particularly deep
                learning models, are "black boxes," making it difficult to understand
                how they arrive at their decisions. This lack of transparency can erode
                trust and hinder accountability.
              </li>
            </ul>
            <h2>The Future of AI</h2>
            <p>
              The future of AI is bright, with ongoing research and development
              promising even more groundbreaking advancements. We can expect to see AI
              become more integrated into our daily lives, transforming industries, and
              solving some of the world's most pressing challenges. However, it is
              essential to proceed thoughtfully, addressing the ethical, social, and
              economic implications to ensure that AI benefits all of humanity.
            </p>
          </div>
           <div className="mt-8">
                        <MyButton
                            variant="outline"
                            onClick={() => window.history.back()}
                            className={`${isDarkMode ? 'text-gray-300 hover:text-white border-gray-700 hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 border-gray-300 hover:bg-gray-200'}`}
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back to Home
                        </MyButton>
                    </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AIArticlePage;
