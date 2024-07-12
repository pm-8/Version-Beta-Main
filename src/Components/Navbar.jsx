const Navbar = () => {
  return (
    <>
      <div id="navbar" className="w-10/12 mx-auto flex justify-between items-center text-[#ddd] pt-4">
        <a href="https://www.istemanit.in/">
          <img src="/Images/Logo.svg" alt="logo" />
        </a>
        <div className="flex items-center gap-12 font-medium text-lg">
          <a href="/" className="group">
            Home
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#about" className="group">
            About
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#schedule" className="group">
            Schedule
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#prizes" className="group">
            Prizes
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#gallery" className="group">
            Gallery
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#sponsors" className="group">
            Sponsors
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
          <a href="#faqs" className="group">
            FAQs
            <div className="w-0 h-[1px] bg-[#6054aa] rounded-full group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

