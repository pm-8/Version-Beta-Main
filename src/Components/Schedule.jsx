import "./Styles/Schedule.css";
const Schedule = () => {
  return (
    <div
      id="schedule"
      className="w-9/12 mx-auto mt-24 flex flex-col gap-16 pb-20 "
    >
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold">
        Schedule
      </h1>
      <div className="relative">
        <div className="flex justify-center">
          <img src="/Images/Group 13.svg" alt="" className = "line-pointer" />
        </div>
        <div className="w-[100%]">
        <div className="absolute top-6 border border-[#07F8EA] rounded-lg w-[500px] h-[180px] p-4 right-[55%] hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 to-left">
          <h1 className="text-[#07F8EA] text-3xl relative flex">Registration<p className = "date-visible">-(5Oct)</p></h1>
          <p className="text-[#ccc] text-[13px] mt-4 font-normal">
            Version Beta is opening its doors for applications starting from
            August 20th until October 5th.To apply, all you need to do is to
            click on the “Register Here” Button above and fill the registration
            form. After the registration process is compeleted, A rundown of
            shortlisted candidates for the hack will be declared.
          </p>
          <div className="h-[1px] top-9 right-[8px] translate-x-[60px] w-[51px] bg-[#07F8EA] absolute"></div>
        </div>
        <div className="date"><h1 className="text-teal-50 absolute top-[3%] left-[55%] text-[30px] text-opacity-40 hover:blur-none hover:text-opacity-100 duration-300 date">5 Oct 2024</h1></div>
        </div>
        <div>
        <div className="absolute top-64 translate-y-6 border border-[#07F8EA] rounded-lg w-[500px] h-[180px] p-4 left-[55.0%]  hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 to-right">
          <h1 className="text-[#07F8EA] text-3xl flex">Ideation <p className = "date-visible">-(5Oct)</p> </h1>
          <p className="text-[#ccc] text-[13px] mt-4 font-normal">
            Dive deep into current tech trends and challenges. Draw inspiration
            from industry leaders, innovative startups, and emerging
            technologies. Use brainstorming sessions to generate a plethora of
            ideas, no matter how wild or ambitious.
          </p>
          <div className="h-[1px] w-[50px] left-[5px] absolute top-9 -translate-x-14 bg-[#07F8EA]"></div>
        </div>
        <div className="date"><h1 className="text-teal-50 absolute top-[22.5%] right-[55%] text-[30px] text-opacity-40 hover:blur-none hover:text-opacity-100 duration-300 ">5 Oct 2024</h1></div>
        </div>
        <div>
        <div className="absolute bottom-96 -translate-y-40 border border-[#07F8EA] rounded-lg w-[500px] h-[170px] p-4 right-[55.0%]   hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 to-left">
          <h1 className="text-[#07F8EA] text-3xl flex">Announcement<p className = "date-visible">-(5Oct)</p></h1>
          <p className="text-[#ccc] text-[13px] mt-4 font-normal">
            After intense brainstorming and collaboration, Best ideas would be
            selected by judges, Their creativity and problem-solving skills have
            set the stage for the next challenge.
          </p>
          <div className="h-[1px] top-[33px] right-[9px] translate-x-[60px] w-[51px] bg-[#07F8EA] absolute"></div>
        </div>
        <div className="date"><h1 className="text-teal-50 absolute top-[46.5%] left-[55%] text-[30px] text-opacity-40 hover:blur-none hover:text-opacity-100 duration-300 ">5 Oct 2024 - 25 Oct 2024</h1></div>        </div>
        <div>
        <div  className="absolute bottom-56 border border-[#07F8EA] rounded-lg w-[500px] h-[180px] p-4 left-[55.0%]  hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 to-right">
          <h1 className="text-[#07F8EA] text-3xl flex">Team<p className = "date-visible">-(5Oct)</p></h1>
          <p className="text-[#ccc] text-[13px] mt-4 font-normal">
            Collaboration is key as students bring together their unique skills
            and expertise. Enlist your teams and prepare them to tackle the
            upcoming challenges. Get ready to synergize and innovate with your
            peers as the codathon journey continues!
          </p>
          <div className="h-[1px] w-[52px] left-[4px] absolute top-[34px] -translate-x-14 bg-[#07F8EA]"></div>
        </div>
        <div className="date"><h1 className="text-teal-50 absolute top-[70%] right-[55%] text-[30px] text-opacity-40 hover:blur-none hover:text-opacity-100 duration-300 ">26 Oct 2024</h1></div>
        </div>
        <div>
        <div className="absolute bottom-0 translate-y-16 border border-[#07F8EA] rounded-lg w-[500px] h-[180px] p-4 right-[55.0%]   hover:bg-[#1e1e20] hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 to-left">
          <h1 className="text-[#07F8EA] text-3xl flex">Hackathon<p className = "date-visible">-(5Oct)</p></h1>
          <p className="text-[#ccc] text-[13px] mt-4 font-normal">
            Every truly novel concept appears insane at first, so come present
            yours. The time for brainstorming is past; now is the time to code
            and present hackathon presentations.
          </p>
          <div className="h-[1px] top-[23px] right-[9px] translate-x-[60px] w-[51px] bg-[#07F8EA] absolute"></div>
        </div>
        <div className="date"><h1 className="text-teal-50 absolute top-[91.5%] left-[55%] text-[30px] text-opacity-40 hover:blur-none hover:text-opacity-100 duration-300 ">3 Nov 2024</h1></div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
