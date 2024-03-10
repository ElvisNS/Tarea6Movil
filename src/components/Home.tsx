import React from 'react';
import './Home.css'; // Importa el archivo de estilo

const Home: React.FC = () => {
  return (
    <div>
      <h2>Caja de Herramientas</h2>
      <img src="herramientas.png" alt="Tu Foto" className="foto-personal" />
    </div>
  );
};

export default Home;
