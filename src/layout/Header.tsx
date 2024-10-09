import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../images/logo.jpg"
const Header = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 pb-6 mx-4">
        <div className="flex gap gap-4 items-center flex-shrink-0">
             <button className="hover:bg-slate-100 hover:p-2.5 hover:rounded-full p-2.5 transition-all">
                <Menu/>
             </button>
             <a href="/">
               <img src={logo} alt="logo" className="h-14"/>
             </a>
        </div>
        <form className="flex gap-4 flex-grow justify-center">
             <div className="flex flex-grow max-w-[600px]">
                 <input type="search" placeholder="Search..." className="rounded-l-full border border-slate-300 shadow-inner shadow-slate-50  px-4 text-xl w-full outline-none focus:border-blue-400"/>
                 <button className="rounded-r-full py-2 px-4 border border-slate-300 bg-slate-100 shadow-inner border-l-0">
                    <Search/>
                 </button>
             </div>
             <button className="bg-slate-100 rounded-full p-4 flex-shrink-0">
                <Mic/>
             </button>
        </form>
        <div className="flex flex-shrink-0 md:gap-1">
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all"><Upload/></button>
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all"><Bell/></button>
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all"><User/></button>
        </div>
    </div>
  )
}

export default Header
