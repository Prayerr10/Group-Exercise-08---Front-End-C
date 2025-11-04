import React from 'react';

// 1. Impor semua komponen "Anak"
import Gen1 from './gen1';
import Gen2 from './gen2';
import Gen3 from './gen3';
import Gen4 from './gen4';

// 2. (Bonus) Impor file CSS
import './index.css';

// Ini adalah komponen "Induk" Anda
const Generations = () => {
  return (
    <div className="generations-wrapper">
      <h2>Generasi Konsol Game</h2>
      
      {/* 3. Susun semua "Anak" di sini */}
      <div className="generations-container">
        <Gen1 />
        <Gen2 />
        <Gen3 />
        <Gen4 />
      </div>
    </div>
  );
}

export default Generations;