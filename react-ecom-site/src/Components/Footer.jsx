import { Link } from "react-router-dom";

const Footer = () => {
  return <div className="bg-neutral-800 p-8 text-white w-full h-[70vh] md:h-[50vh] lg:h-[60vh] flex flex-col items-center place-content-center">
   <div className="container w-full lg:w-[50%] p-4 ">
       <h2 className="text-5xl font-bold font-sans text-center mb-8 ">Eflyer</h2>
       <div className="flex gap-8 border-b">
    <input type="email" placeholder="Your Email" className="bg-neutral-800 p-2 w-full placeholder:text-white text-xl after:border-none  " />
    <button className="text-orange-600 font-semibold hover:text-white duration-300">SUBSCRIBE</button>
       </div>
     
       <nav className=" text-white   ">
    <ul className=" grid grid-cols-2  sm:grid-cols-3  md:flex justify-between px-12 gap-4 py-6  ">

<li>
{""}
<Link className="   hover:text-red-400 duration-300" to={"/"}>Best seller</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-400 duration-300" to={""}>Gift Ideas</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-400 duration-300" to={""}>New Releases</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-400 duration-300" to={""}>Today's Deals</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-400 duration-300" to={""}>Customer Service</Link>{""}
</li>
    </ul>
  </nav>
  <p className="text-center text-xl mt-2">Help Line Number : <span className="hover:text-red-400 duration-300">+1 1800 1200 1200  </span> </p>
   </div>

  </div>;
};

export default Footer;
