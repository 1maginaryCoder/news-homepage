import imgWeb3Desk from "../Images/image-web-3-desktop.jpg";
import imgWeb3Mob from "../Images/image-web-3-mobile.jpg";

export default function Article() {
  return (
    <div className="bg-white md:w-2/3 md:px-6">
      <div className="">
        <img src={imgWeb3Mob} alt="" className="md:hidden" />
        <img src={imgWeb3Desk} alt="" className="hidden md:block" />
      </div>
      <div className="md:mt-5 md:flex">
        <h1 className="text-6xl font-bold md:w-1/2">
          The bright future of Web3.0?
        </h1>
        <p className="py-5 md:w-1/2 md:ml-4">
          We dive in the next evolution of web that claims to put power back in
          the hands of people. But is that really fulfilling its promise?
          <button className="block bg-red-400 px-10 py-3 my-3 text-2xl text-white">
            Read More
          </button>
        </p>
      </div>
    </div>
  );
}
