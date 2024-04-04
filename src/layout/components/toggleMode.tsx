import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const ChangeMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'darkMode'
  );
  const handChangeMode = () => {
    if (theme === 'lightMode') {
      setTheme('darkMode');
    } else {
      setTheme('lightMode');
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  
  return (
    <Form.Check
      className='btnSty-switch'
      id="changeMode"
      type="switch"
      aria-label="changeMode"
      onClick={handChangeMode}
      defaultChecked={theme === 'lightMode' ? false : true}
    />
  )
}

export default ChangeMode;