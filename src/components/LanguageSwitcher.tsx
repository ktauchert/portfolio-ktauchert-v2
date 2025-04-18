import { IoLanguage } from "react-icons/io5";


const LanguageSwitcher = () => {
  return (
    <div className="w-12 h-12 rounded-full bg-light-brown text-cyan flex items-center justify-center fixed bottom-24 right-4 hover:opacity-100 opacity-40 cursor-pointer border-light-brown border-[0.5px]">
      <IoLanguage className="text-2xl" />
    </div>
  );
};

export default LanguageSwitcher;
