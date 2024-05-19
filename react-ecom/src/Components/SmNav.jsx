
import {Link} from "react-router-dom"
const SmNav = () => {
  return (
  
  <nav className=" text-white w-full mx-auto hidden lg:flex  absolute top-0 ">
    <ul className=" bg-slate-900 flex mx-auto px-16 rounded-b-full  items-center justify-center text-xl  gap-8 py-5 ">

<li>
{""}
<Link className=" hover:text-red-500 duration-300" to={"/"}>Best seller</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-500 duration-300" to={""}>Gift Ideas</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-500 duration-300" to={""}>New Releases</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-500 duration-300" to={""}>Today's Deals</Link>{""}
</li>
<li>
{""}
<Link className=" hover:text-red-500 duration-300" to={""}>Customer Service</Link>{""}
</li>



    </ul>
  </nav>
  
  )
}

export default SmNav
