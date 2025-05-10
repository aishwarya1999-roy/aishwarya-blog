import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Moon, SunMedium } from 'lucide-react';
import { Link } from 'react-router-dom';
const MyButton = ({ variant, size, className, children, onClick }) => {
  let baseClasses = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200';
  if (size === 'lg') { baseClasses += ' px-6 py-3 text-lg'; } else if (size === 'sm') { baseClasses += ' px-3 py-1.5 text-sm'; } else { baseClasses += ' px-4 py-2 text-base'; }
  if (variant === 'outline') {
    baseClasses += ' bg-transparent border hover:bg-white/10 text-white border-white/20';
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

const CloudArticlePage = () => {
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
                        className={`${isDarkMode ? 'text-gray-300 hover:text-white border-gray-700 hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 border-gray-300 hover:bg-gray-200'}`}
                    >
                        {isDarkMode ? (<SunMedium className="h-5 w-5" />) : (<Moon className="h-5 w-5" />)}
                        <span className="sr-only">Toggle Theme</span>
                    </MyButton>
        </div>

        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} className="text-left mb-12">
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Building Scalable Systems with Cloud Technologies
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            Published: 2024-07-26 | Category: Cloud
          </p>
          <img src="./cloud2.png" alt="Building Scalable Systems" className="w-full h-72 rounded-lg shadow-lg mb-8" />
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} prose prose-invert`}>
            <p>
              In today's digital age, scalability is a critical requirement for any
              system that aims to handle a growing number of users and data. Cloud
              technologies provide a powerful set of tools and services that enable
              developers to build scalable and resilient systems. This article explores
              the key concepts and best practices for building scalable systems with
              cloud technologies.
            </p>
            <h2>Understanding Scalability</h2>
            <p>
              Scalability refers to the ability of a system to handle an increasing
              workload by adding resources. There are two main types of scalability:
            </p>
            <ul>
              <li>
                <strong>Vertical Scaling (Scaling Up):</strong> This involves adding more resources
                to a single machine, such as CPU, memory, or storage. Vertical
                scaling has limitations as there is a maximum capacity for a single
                machine.
              </li>
              <li>
                <strong>Horizontal Scaling (Scaling Out):</strong> This involves adding more
                machines to a system and distributing the workload across them.
                Horizontal scaling is more flexible and can provide greater scalability
                than vertical scaling.
              </li>
            </ul>
            <h2>Cloud Technologies for Scalability</h2>
            <p>
              Cloud providers offer a wide range of services that simplify the process
              of building scalable systems. Some of the key technologies include:
            </p>
            <ul>
              <li>
                <strong>Virtual Machines (VMs):</strong> Cloud providers offer virtual machines
                that can be easily provisioned and scaled. You can use load balancers
                to distribute traffic across multiple VMs.
              </li>
              <li>
                <strong>Containers:</strong> Containerization technologies like Docker and
                Kubernetes allow you to package applications and their dependencies
                into lightweight, portable containers. Kubernetes provides powerful
                features for orchestrating and scaling containerized applications.
              </li>
              <li>
                <strong>Serverless Computing:</strong> Serverless platforms like AWS Lambda,
                Azure Functions, and Google Cloud Functions allow you to run code
                without provisioning or managing servers. Serverless functions
                automatically scale in response to demand.
              </li>
              <li>
                <strong>Databases:</strong> Cloud providers offer scalable database services
                such as Amazon RDS, Azure SQL Database, and Google Cloud SQL. These
                services can automatically scale storage and compute resources as
                needed.
              </li>
              <li>
                <strong>Caching:</strong> Caching services like Amazon ElastiCache, Azure Cache
                for Redis, and Google Cloud Memorystore can improve performance and
                reduce the load on your backend servers by storing frequently accessed
                data in memory.
              </li>
              <li>
                <strong>Message Queues:</strong> Message queue services like Amazon SQS, Azure
                Queue Storage, and Google Cloud Pub/Sub enable you to decouple
                components of your system and handle asynchronous workloads.
              </li>
            </ul>
            <h2>Best Practices for Building Scalable Systems</h2>
            <p>
              In addition to leveraging cloud technologies, there are several best
              practices to follow when building scalable systems:
            </p>
            <ul>
              <li>
                <strong>Design for Scalability:</strong> Consider scalability from the beginning
                of the design process. Use a microservices architecture to break down
                your application into smaller, independently scalable components.
              </li>
              <li>
                <strong>Use Load Balancing:</strong> Distribute traffic across multiple
                instances of your application to prevent any single instance from
                becoming a bottleneck.
              </li>
              <li>
                <strong>Implement Auto Scaling:</strong> Automatically add or remove resources
                based on demand. Cloud providers offer auto scaling features that can
                help you dynamically adjust your infrastructure.
              </li>
              <li>
                <strong>Monitor Performance:</strong> Continuously monitor the performance of
                your system to identify potential bottlenecks and areas for
                improvement. Use monitoring tools to track metrics such as CPU
                utilization, memory usage, and response times.
              </li>
              <li>
                <strong>Optimize Database Performance:</strong> Use techniques such as
                indexing, query optimization, and connection pooling to improve
                database performance. Consider using read replicas or database
                sharding to distribute the database workload.
              </li>
              <li>
                <strong>Cache Data:</strong> Implement caching to reduce the load on your
                backend servers and improve response times.
              </li>
              <li>
                <strong>Use Asynchronous Processing:</strong> Use message queues to handle
                asynchronous tasks and decouple components of your system.
              </li>
              <li>
                 <strong>Fault Tolerance:</strong> Design your system to be fault-tolerant by using techniques like redundancy, retries, and circuit breakers.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              Building scalable systems is essential for handling the demands of modern
              applications. Cloud technologies provide a powerful set of tools and
              services that simplify the process of building and scaling systems. By
              following best practices and leveraging these technologies, you can
              build systems that can handle growth and provide a great user experience.
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

export default CloudArticlePage;
