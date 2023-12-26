import React,{useEffect} from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import map from "../assests/Bitmap.png";
import phone from "../assests/phone.png";
import address from "../assests/address.png";
import email from "../assests/email.png";
function C_page() {
  const heading = "Contact";
  const title =
    "Kindly complete the form, and I'll follow up shortly. You can also connect with me on LinkedIn for further communication.";
    
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);  
  return (
    <div>
      <Header head={heading} title={title} />
      <div className="  flex flex-col items-start relative justify-center">
        <img src={map} className="lg:h-[600px] w-full h-[800px]" />
        <div className="Rectangle min-w-[470px] bg-white rounded-md py-7 flex flex-col gap-y-4 items-center  absolute sm:left-10 left-2 ">
          <div className="GetInTouch text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose ">
            Get In Touch
          </div>
          <Form />
        </div>
      </div>
      <div className="bg-orange-50 flex lg:flex-row lg:justify-center flex-col items-center gap-y-10 py-16">
        <div className="border border-red-200 flex flex-col gap-y-4 py-4  items-start pr-40 pl-5">
          <div className="flex flex-row gap-x-8 items-center">
            <div>
              <img src={phone} className="w-10 h-10" />
            </div>
            <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              Phone
            </div>
          </div>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] leading-loose">
            +1 (234) 567-89-00
          </div>
        </div>
        <div className="border border-red-200 flex flex-col gap-y-4 py-4  items-start pr-40  pl-5">
          <div className="flex flex-row gap-x-8 items-center">
            <div>
              <img src={email} className="w-10 h-10" />
            </div>
            <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              EMail
            </div>
          </div>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] leading-loose">
            sensreejita67@gmail.com
          </div>
        </div>
        <div className="border border-red-200 flex flex-col gap-y-4 py-4  items-start pr-40  pl-5">
          <div className="flex flex-row gap-x-8 items-center">
            <div>
              <img src={address} className="w-10 h-10" />
            </div>
            <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              Address
            </div>
          </div>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] leading-loose">
            Noida,UttarPradesh
          </div>
        </div>
      </div>
    </div>
  );
}

export default C_page;
