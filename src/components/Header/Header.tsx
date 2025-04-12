const Header = () => {
    return (
      <header className="bg-[#cceeff] text-[#005c99] p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <img src="./logo.png" alt="" className="w-[120px]"/>
          <nav className="flex space-x-4 text-xl">
            <a href="#home" className="hover:text-[#005c99]">Home</a>
            <a href="#services" className="hover:text-[#005c99]">Serviços</a>
            <a href="#about" className="hover:text-[#005c99]">Sobre</a>
            <a href="#contact" className="hover:text-[#005c99]">Contato</a>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Header;