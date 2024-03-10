// src/components/UniversityList.tsx
import React, { useState } from 'react';
import axios from 'axios';
import './Universidad.css'; // Importa el archivo de estilo

const UniversityList: React.FC = () => {
  const [countryName, setCountryName] = useState<string>('');
  const [universities, setUniversities] = useState<any[]>([]);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${countryName}`);
      setUniversities(response.data);
    } catch (error) {
      console.error('Error al obtener las universidades:', error);
    }
  };

  const handleCountryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="countryInput">Ingrese el nombre del país:</label>
      <input
        type="text"
        id="countryInput"
        value={countryName}
        onChange={handleCountryNameChange}
      />
      <button onClick={fetchUniversities}>Obtener Universidades</button>

      {universities.length > 0 && (
        <div>
          <h3>Universidades en {countryName}</h3>
          <ul>
            {universities.map((university, index) => (
              <li key={index}>
                <p><strong>Nombre:</strong> {university.name}</p>
                <p><strong>Dominio:</strong> {university.domains.join(', ')}</p>
                <p><strong>Enlace:</strong> <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UniversityList;
