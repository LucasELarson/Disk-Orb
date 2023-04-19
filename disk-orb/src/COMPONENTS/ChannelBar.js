import { GoChevronRight, GoChevronDown } from "react-icons/go"
import { HiVolumeUp } from "react-icons/hi"
import React, { useState } from 'react';

const ChannelBar = () => {
   return(
      <div className="  h-screen w-1/12 m-0
                        flex flex-col gap-2 pt-5 pl-2 pr-2
                        bg-neutral-800 text-white shadow-lg">

         <ChannelGroup icon={<GoChevronRight size={10}/>} text={"Voice Channels"} />
      </div>
   )
}

const ChannelName = ({ icon, text }) => (
   <div className="h-10 flex flex-row gap-1 text-neutral-400 hover:bg-neutral-700 hover:text-white rounded">
      <div className="flex self-center" >
         {icon}
      </div>
      <span className='flex self-center'>
         {text}
      </span>
   </div>
);


// const ChannelGroup = ({ icon, text }) => (
//    <div id="group-icon" className="h-10 flex flex-row gap-1 text-neutral-400 hover:bg-neutral-700 hover:text-white rounded group">
//       <div className="flex self-center transition-all duration-100 group-active:rotate-90">
//          <GoChevronRight size={10}/>
//       </div>
//       <span className='flex self-center'>
//          {text}
//       </span>
//    </div>
// )


export class ChannelGroup extends React.Component {
   state = { showing: true };
   
   render() {
      const {icon = <></>} = this.props
      const {text = ""} = this.props
      const { showing } = this.state;
       return (
         <div id="group-icon" className="h-10 flex flex-row gap-1 text-neutral-400 hover:bg-neutral-700 hover:text-white hover:cursor-pointer rounded group"
         onClick={() => this.setState({ showing: !showing })}>
            <div className="flex self-center transition-all duration-100" style={{ transform: (showing ? 'rotate(90deg)' : 'none') }}>
               {icon}
            </div>
            <span className='flex self-center'>
               {text}
            </span>
         </div>    
       )
   }
}


export default ChannelBar