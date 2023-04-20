import { GoChevronRight, GoChevronDown } from "react-icons/go"
import { HiVolumeUp } from "react-icons/hi"
import { BiPlus, BiHash } from "react-icons/bi"
import React, { useState } from 'react';
import { BsMicFill, BsMicMuteFill, BsHeadphones, BsFillGearFill} from "react-icons/bs"
import cyndaquil from '../IMAGES/Cyndaquil.jpg'

const ChannelBar = () => {
   return(
      <div id="Channel-Bar-Container" className="flex flex-col">
         
         
         
         
         <div id="Channel-Bar-Header" className="flex bg-neutral-800 items-center pl-5 shrink-0">
            <p id="Server-Name">l̶o̶b̶o̶t̶o̶m̶y̶ ̶e̶n̶j̶o̶y̶e̶r̶s̶</p>
         </div>
            
         
         
         
         <div id="Channel-Bar" className=" m-0
                           flex flex-col flex-shrink flex-grow gap-2 pt-5 pl-2 pr-2
                           bg-neutral-800 text-white shadow-lg">

            <ChannelGroup icon={<GoChevronRight size={10}/>} text={"Voice Channels"} channelNameText={"General"}/>
            <ChannelGroup icon={<GoChevronRight size={10}/>} text={"Animal Channels"} channelNameText={"Kitten Korner"}/>
            <ChannelGroupText icon={<GoChevronRight size={10}/>} text={"Text Channels"} channelNameText={"Text Time"}/>
         </div>
         
         
         
         
         <div id="User-Controls" className="">
            <div id="Left-User-Control" className="flex hover:bg-bghover rounded-md">
               <div id="User-Icon-Div" className="flex items-center pl-1 pr-1.5 shrink-0">
                  <img alt="icon" id="User-Icon" src={cyndaquil}/>
               </div>
               <div id="User-Cont-Info" className="flex flex-col">
                  <div id="User-Name" className="">
                     Lucas Films
                  </div>
                  <div id="User-ID" className="text-neutral-300">
                     #2244
                  </div>
               </div>
            </div>
            <div id="Right-User-Control" className="flex text-neutral-300 items-center justify-center">
               <div id="Control-Icon"  className="hover:text-hover hover:bg-bghover">
                  <BsMicFill size={18}/>
               </div>
               <div id="Control-Icon" className="hover:text-hover hover:bg-bghover">
                  <BsHeadphones size={18}/>
               </div>
               <div id="Control-Icon" className="hover:text-hover hover:bg-bghover">
                  <BsFillGearFill size={18}/>
               </div>
            </div>
         </div>
      </div>
   )
}

const ChannelName = ({ icon, text }) => (
   <div className="h-10 flex flex-row gap-1 text-neutral-400 hover:bg-bghover hover:text-hover rounded">
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
      const {channelNameText = ""} = this.props
      const {icon = <></>} = this.props
      const {text = ""} = this.props
      const { showing } = this.state;
       return (
         <div id="group-icon" className=" text-sm h-auto pt-3 flex flex-col gap-1 text-neutral-400 hover:text-hover hover:cursor-pointer rounded" onClick={() => this.setState({ showing: !showing })} >
            <div className="flex flex-row justify-between">
               <div className="flex flex-row">
                  <div className="flex self-center transition-all duration-100" style={{ transform: (showing ? 'rotate(90deg)' : 'none') }}>
                     {icon}
                  </div>
                  <span className='flex self-center'>
                     {text}
                  </span>                          
               </div>
               <div className="flex self-center">
                  <BiPlus size={18}/>
               </div>
            </div>
             
            <div style={{ display: (showing ? 'flex' : 'none') }} className="flex flex-col gap-1">
               <ChannelName icon={<HiVolumeUp size={18}/>} text={channelNameText}/>
               <ChannelName icon={<HiVolumeUp size={18}/>} text={"The Pickling "}/>
            </div>           
         </div> 
       )
   }
}

export class ChannelGroupText extends React.Component {
   state = { showing: true };
   
   render() {
      const {channelNameText = ""} = this.props
      const {icon = <></>} = this.props
      const {text = ""} = this.props
      const { showing } = this.state;
       return (
         <div id="group-icon" className=" text-sm h-auto pt-3 flex flex-col gap-1 text-neutral-400 hover:text-hover hover:cursor-pointer rounded" onClick={() => this.setState({ showing: !showing })} >
            <div className="flex flex-row justify-between">
               <div className="flex flex-row">
                  <div className="flex self-center transition-all duration-100" style={{ transform: (showing ? 'rotate(90deg)' : 'none') }}>
                     {icon}
                  </div>
                  <span className='flex self-center'>
                     {text}
                  </span>                          
               </div>
               <div className="flex self-center">
                  <BiPlus size={18}/>
               </div>
            </div>
             
            <div style={{ display: (showing ? 'flex' : 'none') }} className="flex flex-col gap-1">
               <ChannelName icon={<BiHash size={18}/>} text={channelNameText}/>
               <ChannelName icon={<BiHash size={18}/>} text={"The Pickling "}/>
            </div>           
         </div> 
       )
   }
}

export default ChannelBar