import React from 'react';
import './Contratame.css'; // Importa el archivo CSS


const Contratame: React.FC = () => {
  return (
    <div>
      <div className="informacion-contacto">
        <img src="profle.jpg" alt="Tu Foto" className="foto-personal" />
        <p>
          ¡Hola! Mi nombre es Elvis Antonio Núñez Suriel. Estoy disponible para proyectos emocionantes.
          Si te gusta mi trabajo y estás interesado en colaborar, no dudes en contactarme.
        </p>
        <p>
          <strong>Datos de Contacto:</strong>
          <br />
          Email: 20212144@itla.edu.do
          <br />
          Teléfono: +18299336997
        </p>
      </div>
    </div>
  );
};

export default Contratame;
