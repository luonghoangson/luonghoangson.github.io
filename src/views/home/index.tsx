
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

const Homepage = () => {
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(<Home className="active" />);
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleButtonClick = (component: JSX.Element, buttonNumber: number) => {
    setCurrentComponent(component);
    setActiveButton(buttonNumber);
  };

  const data = [
    { name: 'Home', icon: <i className="fas fa-home"></i>, component: <Home className="active" /> },
    { name: 'About Me', icon: <i className="fas fa-user"></i>, component: <About className="active" /> },
    { name: 'My Portfolio', icon: <i className="fas fa-briefcase"></i>, component: <Portfolio className="active" /> },
    { name: 'Contact Me', icon: <i className="fas fa-envelope-open"></i>, component: <Contact className="active" setIsLoading={setIsLoading} /> },
  ];

  return (
    <>
      {isLoading && <div className="loading"><div className="loading_ic"><span></span><span></span></div></div>}
      <div className="nav-controls">
        {data.map((data, index) => (
          <div
            key={index}
            onClick={() => handleButtonClick(data.component, index)}
            className={`nav-controls-items ${activeButton === index ? 'active' : ''}`}
          >
            <p data-title={data.name}>
              <span>
                {data.icon}
              </span>
            </p>
          </div>
        ))}
      </div>

      {currentComponent}
      <footer className="footer">© Copyright 2024 AkiraHt.</footer>
    </>
  );
};

export default Homepage;