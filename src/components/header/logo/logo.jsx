import React from 'react';

// 1. Impor gambar logo Anda
import logoGambar from '../../assets/logo.png'; 
// (Sesuaikan path '../../assets/logo.png' jika Anda menyimpannya di tempat lain)

const Logo = () => {
  return (
    <div className="logo-container">
      {/* 2. Tampilkan gambar itu */}
      <img src={logoGambar} alt="App Logo" className="header-logo" />
    </div>
  );
}

export default Logo;