// import Logo from "./Logo";
import { ImSearch } from "react-icons/im";
import { RiUser3Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <header className="h-16 shadow-md bg-white ">
            <div className="h-full container mx-auto flex items-center justify-between px-4">
                <div className="">
                   <Link to={'/login'}>
                   {/* <Logo w={90} h={50}/>  */}
                    </Link>
                </div>
                <div className=" hidden lg:flex items-center w-full justify-between max-w-sm">
                    <input className="rounded-l-full  pl-3 focus-within:shadow-md outline-none p-1 w-full" type="text" placeholder="search product..."/>
                        <div className="p-1.5 text-lg text-white min-w-[40px] w-10 bg-blue-600 flex items-center justify-center rounded-r-full">
                            <ImSearch/>
                        </div>
                </div>
                <div className="flex justify-between items-center gap-5  p-1.5">

                    <div className="text-3xl cursor-pointer">

                        <RiUser3Fill/>
                    </div>
                    <div className="text-3xl relative ">
                        <span><TiShoppingCart/></span>
                        <div className="bg-blue-600 text-white w-5 h-5 rounded-full p-1.2 flex items-center justify-center absolute -top-2 right-0">
                            
                            <p className="text-xs">0</p>

                        </div>
                    </div>
                    <div>
                           <Link to={'/login'} className="px-2 bg-blue-600 rounded-2xl py-1 text-white hover:bg-blue-700" >
                             Login
                           </Link>
                            
                    </div>
                   
                </div>
               
            </div>

        </header>
     );
}
 
export default Header;