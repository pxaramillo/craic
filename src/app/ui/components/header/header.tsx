import Logo from "@/../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#0c0c10] text-white py-6 px-6 border-b border-gray-700">
      <figure>
        <Image priority src={Logo} alt="Craic Logo" />
      </figure>
    </header>
  );
};

export default Header;
