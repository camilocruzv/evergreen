import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './TablasMaestras.css';

const TablasMaestras = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token-logged');
    if (!token) {
      history.push("/");
      return;
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token-logged');
    history.push("/");
  };

  return (
    <div className="tablas-maestras-container">
      <h2 className="tablas-maestras-title">Tablas Maestras</h2>
      <button className="tablas-maestras-log-out" onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default TablasMaestras;
