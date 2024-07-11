const Sponsors = () => {
  return (
    <div id="sponsors" className="w-8/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold">
        Sponsors
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-6 place-items-center">
        <img
          src="/Images/devfolio.png"
          alt=""
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/polygon.png"
          alt=""
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/replit.png"
          alt=""
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/conding-ninja_logo.png"
          alt=""
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/gfg_logo.png"
          alt=""
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/unstop_logo.png"
          alt=""
          className="w-48 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/newton_logo.png"
          alt=""
          className="w-48 mt-4 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/LWT_logo.webp"
          alt=""
          className="w-44 mt-4 hover:scale-110 transition-transform duration-300"
        />
        <img
          src="/Images/dst_logo_circle.png"
          alt=""
          className="w-36 mt-4 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Sponsors;
