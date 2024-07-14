import './Styles/About.css'
const About = () => {
  return (
    <div id="about" className="w-9/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold">
        About
      </h1>
      <div className="container"  >
        <img
          src="/Images/aboutImg.png"
          className="rounded-lg w-[45vw]"
        />
        <p className="text-[#72a5af] w-[45%] text-lg ">
          Version Beta is the amalgamation of some of the nation&apos;s greatest
          technological minds, with an ideal platform for technology enthusiasts
          to demonstrate their talents and ingenuity. After successfully
          organizing its digital variation for the last two years we are back
          this year, grander than ever, to build on the legacy of our offline
          editions. To bring you an array of diverse activities, we have
          included synchronized delivery of workshops, and guest speakers of the
          highest caliber from the world of technology and entrepreneurship. It
          is accompanied by a 36-hour hack-a-thon powered by MLH, the largest in
          central India, allowing participants to test their intelligence, be
          recognized and get rewarded while rubbing shoulders with the offline
          NIT-B campus experience and real-time guidance from the MLH community.
          In a stroke, Version Beta is the souls&apos; satisfiers of tech
          aficionados while fostering the next generation of developers,
          thinkers, and entrepreneurs.
        </p>
      </div>
    </div>
  );
};

export default About;
