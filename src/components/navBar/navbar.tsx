import './style.css'
import { useState } from "react";
import { HomeIcon, Watch } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";

const NavBar = ({ active }: any) => {
   const [openNav, setOpenNav] = useState(false);
   const Navigate = useNavigate();
   const token = localStorage.getItem('adesina_token')


   const menus = [
      {
         title: "About",
         icon: <Watch />,
         url: "/about"
      },
      {
         title: "Cities",
         icon: <HomeIcon />,
         url: "/cities"
      },
      {
         title: "Watch",
         icon: <Watch />,
         url: "/watch"
      },
      {
         title: "Contact Us",
         icon: <Watch />,
         url: "/contact"
      },
   ]

   return (
      <>
         <nav className='hidden-xs'>
            <div className='container space-btw flex'>
               <span className='aaj-logo' onClick={() => { Navigate('/') }}><img src="/logo_white.png" alt="" /></span>
               {/* <div className='flex space-50'>
                  {menus?.map((i, index) => (
                     <span className={`links alice px12 poppings-light ${i.title == active && 'active'} `} onClick={() => { Navigate(i.url) }}>{i.title}</span>
                  ))}
               </div> */}
               <Slide direction='right'>
                  <button className="button xs-px15 px10 alice besley-regular" onClick={() => { Navigate('/join') }}>Join Now</button>
               </Slide>
            </div>
         </nav>



         <div className='mobile-nav bg-black xs-12 hidden-ls'>
            <div className='xs-11 centered-align flex space-btw'>
               <div className='aaj-logo bg-blak xs-down3' onClick={() => { Navigate('/') }}><img src="/logo_white.png" alt="" /></div>
               <div>
               <button className="button xs-px15 px10 alice besley-regular" onClick={() => { Navigate('/join') }}>Join Now</button>
               </div>
            </div>
         </div>

      </>
   )
}

export default NavBar;