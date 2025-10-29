import Logo from '@/assets/image/logo.png';
import Image from 'next/image';
function Header() {
  return (
    <div className="flex flex-row-reverse items-center justify-between">
      <Image src={Logo} alt="logo" className="w-10" />
      header
    </div>
  );
}

export default Header;
