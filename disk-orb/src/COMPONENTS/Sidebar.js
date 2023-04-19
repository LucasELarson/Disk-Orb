import { BsHeartPulse, BsFillLightningFill, BsFillGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBar = () => {
   return(
      <div className=" h-screen w-16 m-0
                        flex flex-col
                        bg-neutral-900 text-white shadow-lg">

         <SideBarIcon icon={<FaFire size="28"/>} text={"Fire"} />
         <SideBarIcon icon={<BsFillGearFill size="28"/>} text={"Settings"}/>
         <SideBarIcon icon={<FaPoo size="28"/>} text={"Poop"}/>
         <SideBarIcon icon={<BsHeartPulse size="28"/>} text={"Health"} />
         <SideBarIcon icon={<BsFillLightningFill size="28"/>} text={"Energy Consumption"} />
      </div>
   )
};

const SideBarIcon = ({ icon, text }) => (
   <div className="sidebar-icon group">
      {icon}

      <span className='sidebar-tooltip group-hover:scale-100'>
         {text}
      </span>
   </div>
);

export default SideBar; 