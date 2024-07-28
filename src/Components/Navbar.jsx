import './Styles/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div id="navbar" className="w-full mx-auto  md:flex justify-around items-center text-[#ddd] pt-4">
        <a href="https://www.istemanit.in/">
          <img src="/Images/Logo.svg" alt="logo" />
        </a>
        <div className="content flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-10 font-medium text-lg ">
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
        <div className='hamburger'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;