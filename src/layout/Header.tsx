import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../images/logo.1.png"
import { useState } from "react"
const Header = () => {
 
  const [showFullWidthSearch , setShowFullWidthSearch] = useState<boolean>(false)

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 pb-6 mx-4">
        <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
             <button className="hover:bg-slate-100 hover:p-2.5 hover:rounded-full p-2.5 transition-all text-blue-900">
                <Menu/>
             </button>
             <a href="/">
               <img src={logo} alt="logo" className="h-14 bg-blend-color-burn"/>
             </a>
        </div>
        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
             {showFullWidthSearch && (
              <button onClick={()=>setShowFullWidthSearch(false)} className="hover:bg-slate-100 hover:p-2.5 hover:rounded-full p-2.5 transition-all text-blue-900">
                <ArrowLeft/>
              </button>
             )}
             <div className="flex flex-grow max-w-[600px]">
                 <input type="search" placeholder="Search..." className="rounded-l-full border border-slate-300 shadow-inner shadow-slate-50  px-4 text-base w-full outline-none focus:border-blue-400"/>
                 <button className="rounded-r-full py-2 px-4 border border-slate-300 bg-slate-100 shadow-inner border-l-0 text-blue-900">
                    <Search/>
                 </button>
             </div>
             <button className="bg-slate-100 rounded-full p-4 flex-shrink-0 text-blue-900">
                <Mic/>
             </button>
        </form>
        <div className={`flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
            <button onClick={()=>setShowFullWidthSearch(true)} className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all md:hidden"><Search/></button>
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all md:hidden text-blue-900"><Mic/></button>
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all text-blue-900"><Upload/></button>
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all text-blue-900"><Bell/></button>
            <button className="hover:bg-slate-100 hover:p-4 hover:rounded-full p-4 transition-all text-blue-900"><User/></button>
        </div>
    </div>
  )
}

export default Header
