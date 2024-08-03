const Prizes = () => {
  return (
    <div id="prizes" className="w-9/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300">
        Prizes
      </h1>
      <div className="mt-10 mx-auto flex flex-col gap-20 md:hidden">
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/gold.png" alt=""className="hover:scale-110 transition-transform duration-300" />
          <p className="text-[2.5rem] text-[#808080] hover:scale-110 transition-transform duration-300">₹ 15,000</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/silver.png" alt="" className="hover:scale-110 transition-transform duration-300 ml-4"/>
          <p className="text-[2.5rem] text-[#808080] hover:scale-110 transition-transform duration-300">₹ 10,000</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/bronze.png" alt="" className="hover:scale-110 transition-transform duration-300 ml-4" />
          <p className="text-[2.5rem] text-[#808080] hover:scale-110 transition-transform duration-300">₹ 5,000</p>
        </div>
      </div>
      <div className="mt-10 mx-auto gap-10 hidden md:flex lg:flex xl:flex">
        <div className="flex flex-col items-center">
          <img src="/Images/silver.png" alt="" className="scale-75 hover:scale-90 transition-transform duration-300" />
          <p className="text-[2.5rem] md:text-[2rem] mr-4 text-[#808080] hover:scale-110 transition-transform duration-300">₹ 10,000</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/gold.png" alt="" className="scale-110 hover:scale-125 transition-transform duration-300"/>
          <p className="text-[3.5rem] md:text-[2rem] text-[#808080] hover:scale-110 transition-transform duration-300">₹ 15,000</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Images/bronze.png" alt="" className="scale-75 hover:scale-90 transition-transform duration-300" />
          <p className="text-[2.5rem] md:text-[2rem] text-[#808080] hover:scale-110 transition-transform duration-300">₹ 5,000</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
