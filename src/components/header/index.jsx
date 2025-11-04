import React from 'react';

// 1. Impor "Anak" pertama Anda: Logo
import Logo from './logo/logo';

// 2. Impor "Anak" kedua Anda: Generations (dari tugas sebelumnya)
import Generations from './generations/index'; 
// (Pastikan path '../Generations/Generations' ini benar)

// 3. Impor CSS
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      {/* Bagian atas header */}
      <div className="header-top">
        <Logo />
        
        {/* Nanti teman Anda bisa menambahkan navigasi di sini */}
        <nav className="main-nav">
          <a href="/">Home</a>
          {/* Link lain bisa ditambahkan oleh pemilik fitur 'Home' atau 'Footer' */}
        </nav>
      </div>
      
      {/* 4. Tampilkan komponen Generations Anda DI DALAM Header */}
      {/* Sesuai diagram, Generations terhubung ke Header */}
      <div className="generations-section">
        <Generations />
      </div>
    </header>
  );
}

export default Header;