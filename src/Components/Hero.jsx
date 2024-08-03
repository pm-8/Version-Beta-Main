import Button from "./Nested Components/Button/Button";

const Hero = () => {
  return (
    <>
      <div className="w-9/12 mx-auto mt-28">
        <div className="flex flex-col-reverse items-center lg:flex-row xl:flex-row gap-20 -mt-0 md:mt-0 lg:mt-0 xl:mt-0">
          <div className="w-full text-center lg:text-left xl:text-left">
            <h1 className="text-[50px] text-[#ddd] font-semibold leading-tight animate-pulse">
              Ready to Debug Your <br />
              Limits?
            </h1>
            <h2 className="text-[32px] text-[#ccc] mt-6">
              Welcome to Version Beta!
            </h2>
            <p className=" text-[#aaa] text-lg mt-6">
              Dive into a world where every bug is a challenge, and every
              line of code a victory!
            </p>
          </div>
          <div className="w-full lg:w-full xl:w-full mt-0 lg:-mt-20">
            <img src="/Images/VB LOGO--main.png" alt="" className="w-full animate-pulse scale-100 sm:scale-100 md:scale-100 lg:scale-150 xl:scale-100 lg:mb-20 hover:scale-110 transition-transform duration-300" />
            <div className="mt-4 text-[#ccc] flex flex-col md:flex-row lg:gap-12 lg:flex-row xl:gap-16 xl:flex-row gap-4 ml-10">
              <div className=" flex items-center gap-3">
                <img src="/Images/calendar.png" alt="" className="w-[1.5rem]" />
                <p className="text-sm md:text-base lg:text-base xl:text-lg font-medium ">Oct 5th - Nov 5th 2024</p>
              </div>
              <div className=" flex items-center gap-3">
                <img src="/Images/location1.png" alt="" className="w-[1.5rem]" />
                <p className="text-sm md:text-base lg:text-base xl:text-lg font-medium ">MANIT, Bhopal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-6 items-center">
          <p className="text-[#06FE87] text-[40px] text-center mt-24">
            Register Now for Version Beta 7.0
          </p>
          <Button />
        </div>
    </div >
    </>
  );
};

export default Hero;
