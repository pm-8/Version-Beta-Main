import Accordians from "./Nested Components/Accordian/Accordians";

const FAQs = () => {
  return (
    <div id="faqs" className="w-6/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] font-bold">FAQs</h1>
      <div className="mt-10 mx-auto">
        <Accordians />
      </div>
    </div>
  );
};

export default FAQs;
