const Prizes = () => {
  return (
    <div id="prizes" className="w-9/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold hover:scale-110 transition-transform duration-300">
        Prizes
      </h1>
      <div className="mt-10 mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/gold.png" alt=""className="hover:scale-110 transition-transform duration-300" />
          <p className="text-[50px] text-[#bbb] hover:scale-110 transition-transform duration-300">₹ 15,000</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/silver.png" alt="" className="hover:scale-110 transition-transform duration-300"/>
          <p className="text-[50px] text-[#bbb] hover:scale-110 transition-transform duration-300">₹ 10,000</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="/Images/bronze.png" alt="" className="hover:scale-110 transition-transform duration-300" />
          <p className="text-[50px] text-[#bbb] hover:scale-110 transition-transform duration-300">₹ 5,000</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
