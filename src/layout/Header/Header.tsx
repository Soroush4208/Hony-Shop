import React from 'react';
import Logo from '@/assets/image/logo.png';
import Image from 'next/image';
function Header() {
  return (
    <div>
      <Image src={Logo} alt="logo" />
      header
    </div>
  );
}

export default Header;
