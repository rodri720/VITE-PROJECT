import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from '../Landing/Landing.module.css';

export default function Landing() {
  return (
    <div className={style.container}>
      <img src={logo} alt="Not found" className={style.logo} style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }} />
      <h2 className={style.landing}>Somos un Equipo de Programadores con experiencia en el área de Desarrollo, Diseño y Marketing Digital</h2>
      <div className={style.btn}>
        <Link to="/home">
          <button>Bienvenidos</button>
        </Link>
      </div>
    </div>
  );
}
