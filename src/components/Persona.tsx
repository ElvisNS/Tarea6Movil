
import React, { useState } from 'react';
import axios from 'axios';
import './Persona.css';

const Home: React.FC = () => {
  const [name, setName] = useState<string>(''); // Variable de estado para el nombre
  const [gender, setGender] = useState<string | null>(null); // Variable de estado para el género

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const genderPrediction = response.data.gender;

      setGender(genderPrediction);
    } catch (error) {
      console.error('Error al obtener el género:', error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="nameInput">Ingrese su nombre:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={predictGender}>Predecir Género</button>
      </div>
      {gender && (
        <div className={gender === 'male' ? 'blue-box' : 'pink-box'}>
          {gender === 'male' ? 'Azul' : 'Rosa'}
        </div>
      )}
    </div>
  );
};

export default Home;
