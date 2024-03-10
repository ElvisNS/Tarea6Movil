// src/components/AgePrediction.tsx
import React, { useState } from 'react';
import axios from 'axios';
import './Edad.css'; // Importa el archivo de estilo

const AgePrediction: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [ageCategory, setAgeCategory] = useState<string | null>(null);

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const agePrediction = response.data.age;

      setAge(agePrediction);

      if (agePrediction < 30) {
        setAgeCategory('joven');
      } else if (agePrediction >= 30 && agePrediction <= 60) {
        setAgeCategory('adulto');
      } else {
        setAgeCategory('anciano');
      }
    } catch (error) {
      console.error('Error al obtener la edad:', error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Ingrese su nombre:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={predictAge}>Predecir Edad</button>

      {age !== null && (
        <div>
          <h3>Resultado</h3>
          <p>Edad: {age} años</p>
          <p>Estado: {ageCategory}</p>
          {ageCategory === 'joven' && <img src="joven.jpg" alt="Joven" />}
          {ageCategory === 'adulto' && <img src="adulto.jpg" alt="Adulto" />}
          {ageCategory === 'anciano' && <img src="anciano.jpg" alt="Anciano" />}
        </div>
      )}
    </div>
  );
};

export default AgePrediction;
