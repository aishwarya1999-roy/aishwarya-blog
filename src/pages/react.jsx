import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Code2, Cpu, Github, Linkedin, Rss,  X, User, Zap, Moon, SunMedium } from 'lucide-react';
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

const ReactHooksArticlePage = () => {
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
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Mastering React Hooks: A Practical Guide
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            Published: 2025-03-25 | Category: Web Development
          </p>
          <img src="../react2.png" alt="Mastering React Hooks" className="w-full h-80 rounded-lg shadow-lg mb-8" />
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} prose prose-invert`}>
            <p>
              React Hooks are a powerful feature introduced in React 16.8. They allow
              you to use state and other React features in functional components.
              Before Hooks, these capabilities were only available in class
              components. This guide will provide a practical overview of how to use
              React Hooks effectively.
            </p>
            <h2>Introduction to React Hooks</h2>
            <p>
              Hooks are functions that let you “hook into” React state and lifecycle
              features from functional components. They don’t work inside classes —
              they let you use React without classes.
            </p>
            <h3>Basic Hooks</h3>
            <ul>
              <li>
                <code>useState</code>: Lets you add state to functional components.
              </li>
              <li>
                <code>useEffect</code>: Performs side effects in functional components.
              </li>
              <li>
                <code>useContext</code>: Consumes values from a context.
              </li>
            </ul>
            <h3>Additional Hooks</h3>
            <ul>
              <li>
                <code>useReducer</code>: An alternative to useState for more complex state
                logic.
              </li>
              <li>
                <code>useCallback</code>: Returns a memoized callback function.
              </li>
              <li>
                <code>useMemo</code>: Returns a memoized value.
              </li>
              <li>
                <code>useRef</code>: Creates a mutable ref object.
              </li>
              <li>
                <code>useLayoutEffect</code>: Similar to useEffect, but fires synchronously
                after all DOM mutations.
              </li>
              <li>
                <code>useImperativeHandle</code>: Customizes the instance value that is
                exposed when using useRef.
              </li>
              <li>
                <code>useDebugValue</code>: Can be used to display a custom label by React
                DevTools.
              </li>
            </ul>
            <h2>Using the useState Hook</h2>
            <p>
              The <code>useState</code> Hook lets you declare a “state variable” in a
              functional component. You pass the initial state to this function and
              it returns an array with two values:
            </p>
            <ol>
              <li>The current state value.</li>
              <li>A function that lets you update it.</li>
            </ol>
            <p>Here’s an example of using useState to manage a count:</p>
            <pre>
              <code>
                <span className="text-gray-400">import</span> React, &#123; useState &#125; <span className="text-gray-400">from</span> 'react';
                <br />
                <br />
                <span className="text-blue-500">function</span> <span className="text-yellow-400">Example</span>() &#123;
                <br />
                &nbsp; <span className="text-blue-500">const</span> [count, setCount] = useState(0);
                <br />
                <br />
                &nbsp; <span className="text-blue-500">return</span> (
                <br />
                &nbsp;   &lt;div&gt;
                <br />
                &nbsp;     &lt;p&gt;You clicked &#123;count&#125; times&lt;/p&gt;
                <br />
                &nbsp;     &lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;
                <br />
                &nbsp;       Click me
                <br />
                &nbsp;     &lt;/button&gt;
                <br />
                &nbsp;   &lt;/div&gt;
                <br />
                &nbsp; );
                <br />
                &#125;
              </code>
            </pre>
            <h2>Using the useEffect Hook</h2>
            <p>
              The <code>useEffect</code> Hook lets you perform side effects in functional
              components. Data fetching, setting up subscriptions, and manually
              changing the DOM in React components are all examples of side
              effects.
            </p>
            <p>
              By using this Hook, you tell React that your component needs to do
              something after render. React will remember the function you passed
              (we’ll refer to it as our “effect”), and call it later after performing
              the DOM updates.
            </p>
            <p>Here’s an example of using useEffect for fetching data:</p>
            <pre>
              <code>
                <span className="text-gray-400">import</span> React, &#123; useState, useEffect &#125; <span className="text-gray-400">from</span> 'react';
                <br />
                <br />
                <span className="text-blue-500">function</span> <span className="text-yellow-400">Example</span>() &#123;
                <br />
                &nbsp; <span className="text-blue-500">const</span> [data, setData] = useState(null);
                <br />
                <br />
                &nbsp; useEffect(() =&lt; &#123;
                <br />
                &nbsp;  <span className="text-blue-500">async</span> <span className="text-blue-500">function</span> <span className="text-yellow-400">fetchData</span>() &#123;
                <br />
                &nbsp; <span className="text-blue-500">try</span> &#123;
                <br />
                &nbsp;<span className="text-blue-500">const</span> response = <span className="text-await">await</span> fetch('https://api.example.com/data');
                <br />
                &nbsp;  <span className="text-blue-500">const</span> result = <span className="text-await">await</span> response.json();
                <br />
                &nbsp; setData(result);
                <br />
                &nbsp; &#125; <span className="text-blue-500">catch</span> (error) &#123;
                <br />
                &nbsp; console.error("Failed to fetch data:", error);
                <br />
                &nbsp; //  setError(error);  // Consider adding an error state to display a message
                <br />
                &nbsp;  &#125;
                <br />
                &nbsp; &#125;;
                <br />
                &nbsp;  fetchData();
                <br />
                &nbsp; &#125;, []); <span className="text-gray-400">// Empty dependency array means this effect runs once on mount</span>
                <br />
                <br />
                &nbsp; <span className="text-blue-500">if</span> (!data) &#123;
                <br />
                &nbsp;   <span className="text-blue-500">return</span> &lt;p&gt;Loading...&lt;/p&gt;;
                <br />
                &nbsp; &#125;
                <br />
                <br />
                &nbsp; <span className="text-blue-500">return</span> (
                <br />
                &nbsp;  &lt;div&gt;
                <br />
                &nbsp;  &lt;h1&gt;&#123;data.title&#125;&lt;/h1&gt;
                <br />
                &nbsp;  &lt;p&gt;&#123;data.content&#125;&lt;/p&gt;
                <br />
                &nbsp;  &lt;/div&gt;
                <br />
                &nbsp; );
                <br />
                &#125;
              </code>
            </pre>
            <h2>Conditional useEffect</h2>
            <p>
              If you want to run an effect only when certain values change, you can
              pass an array of dependencies as the second argument to useEffect:
            </p>
            <pre>
              <code>
                "useEffect( () =&lt; &#123;
                <br/>
                &nbsp; <span className="text-blue-500">document</span>.title = `Count: &#123;count&#125;`;
                <br/>
                &#125;, [count]); <span className="text-gray-400">// Only re-run the effect if count changes</span>
              </code>
            </pre>
            <h2>Cleaning up an effect</h2>
            <p>
              Sometimes, you need to perform cleanup actions in your effect, like
              unsubscribing from a subscription or clearing a timer. To do this,
              you can return a cleanup function from the effect callback:
            </p>
            <pre>
              <code>
                useEffect(() =&lt; &#123;
                <br/>
                &nbsp; <span className="text-blue-500">const</span> subscription = someService.subscribe(() =&lt; &#123;
                <br/>
                &nbsp;
                <br/>
                &nbsp; &#125;);
                <br/>
                &nbsp; <span className="text-blue-500">return</span> () =&lt; &#123;
                <br/>
                &nbsp;subscription.unsubscribe(); <span className="text-gray-400">// Cleanup function</span>
                <br/>
                &nbsp; &#125;;
                <br/>
                &#125;, []);
              </code>
            </pre>
            <h2>Rules of Hooks</h2>
            <p>
              Hooks are JavaScript functions, but they impose two additional rules:
            </p>
            <ul>
              <li>
                Only call Hooks at the top level of your React function. Don’t call
                Hooks inside loops, conditions, or nested functions.
              </li>
              <li>
                Only call Hooks from React function components. Don’t call them from
                regular JavaScript functions.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              React Hooks provide a powerful and flexible way to manage state and
              side effects in functional components. By mastering Hooks like
              useState and useEffect, you can write cleaner, more efficient, and
              more reusable React code. This guide has provided a practical
              overview, but there's much more to explore in the React
              documentation.
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

export default ReactHooksArticlePage;

