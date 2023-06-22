import { GoChevronRight, GoChevronDown } from "react-icons/go"
import { HiVolumeUp } from "react-icons/hi"
import { BiPlus, BiHash } from "react-icons/bi"
import React, { useState } from 'react';
import { BsMicFill, BsMicMuteFill, BsHeadphones, BsFillGearFill} from "react-icons/bs"
import cyndaquil from '../IMAGES/Cyndaquil.jpg'
import 'flowbite';
import MainBody from "./MainBody";



const ChannelBar = () => {


   return(
      <div id="Channel-Bar-Container" className="flex flex-col">      
         <div id="Channel-Bar-Header" className="flex bg-neutral-800 items-center pl-5 shrink-0">
            <p id="Server-Name">A great place to chat</p>
         </div>
            
         
         
         
         <div id="Channel-Bar" className=" m-0
                           flex flex-col flex-grow gap-2 pt-5 pl-2 pr-2
                           bg-neutral-800 text-white shadow-lg">

            <ChannelGroup icon={<GoChevronRight size={10}/>} text={"Voice Channels"} channelNameText={"General"}/>
            <ChannelGroup icon={<GoChevronRight size={10}/>} text={"Animal Channels"} channelNameText={"Orca Orchestra"}/>
            <ChannelGroupText icon={<GoChevronRight size={10}/>} text={"Text Channels"} />
            
         </div>
         
         
         
         
         <div id="User-Controls" className="">
            <div id="Left-User-Control" className="flex hover:bg-bghover rounded-md">
               <div id="User-Icon-Div" className="flex items-center pl-1 pr-1.5 shrink-0">
                  <img alt="icon" id="User-Icon" src={cyndaquil}/>
               </div>
               <div id="User-Cont-Info" className="flex flex-col">
                  <div id="User-Name" className="">
                     {"Sign in"}
                  </div>
                  <div id="User-ID" className="text-neutral-300">
                     #1234
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

// const ChannelName = ({ icon, text }) => (
//    <div className="h-10 flex flex-row gap-1 text-neutral-400 hover:bg-bghover hover:text-hover rounded">
//       <div className="flex self-center" >
//          {icon}
//       </div>
//       <span className='flex self-center'>
//          {text}
//       </span>
//    </div>
// );

export class ChannelName extends React.Component{
   constructor(props){
      super(props)
      this.state = {icon: <></>, text: "", room: ""}
   }
   render() {
      const {icon = <></>} = this.props
      const {text = ''} = this.props
      const {room = ''} = this.props
      return(
         <div className="h-10 flex flex-row gap-1 text-neutral-400 hover:bg-bghover hover:text-hover rounded" onClick={() => {
            document.getElementById("Main-Header-Text").innerText = room;
            }}>
            <div className="flex self-center" >
               {icon}
            </div>
            <span className='flex self-center'>
               {text}
            </span>
         </div>
      )
   }
}


export class ChannelGroup extends React.Component {
   state = { showing: true };
   
   render() {
      const {channelNameText = ""} = this.props
      const {icon = <></>} = this.props
      const {text = ""} = this.props
      const { showing } = this.state;
       return (
         <div id="group-icon" className=" text-sm h-auto pt-3 flex flex-col gap-1 text-neutral-400 hover:text-hover hover:cursor-pointer rounded"  >
            <div className="flex flex-row justify-between">
               <div className="flex flex-row" onClick={() => this.setState({ showing: !showing })}>
                  <div className="flex self-center transition-all duration-100" style={{ transform: (showing ? 'rotate(90deg)' : 'none') }}>
                     {icon}
                  </div>
                  <span className='flex self-center'>
                     {text}
                  </span>                          
               </div>
               <div className="flex self-center ">
                  <BiPlus size={18}/>
               </div>
            </div>
             
            <div style={{ display: (showing ? 'flex' : 'none') }} className="flex flex-col gap-1">
               <ChannelName icon={<HiVolumeUp size={18}/>} text={channelNameText} />
               <ChannelName icon={<HiVolumeUp size={18}/>} text={"The Pickling "}/>
               
            </div>           
         </div> 
       )
   }
}



export class ChannelGroupText extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        showing: true,
        channels: [],
      };
    }

    



    showChannelMaker(){
      document.getElementById("channel-Maker").style.display = "block"
    }
    
    makeChannel(){    
      const newChannels = [...this.state.channels, ChannelName]
      this.setState({
         channels: newChannels
      })
      setTimeout(() => {
      document.getElementById("small-input").value = ""
      document.getElementById("channel-Maker").style.display = "none"
      }, 10);
    }

   render() {
      const {channelNameText = "PLACEHOLDER"} = this.props
      const {icon = <></>} = this.props
      const {text = ""} = this.props
      const { showing } = this.state;
      const {channels} = this.state
      
       return (
         <div id="group-icon" className=" text-sm h-auto pt-3 flex flex-col gap-1 text-neutral-400 hover:text-hover hover:cursor-pointer rounded"  >
            <div className="flex flex-row justify-between" >
               <div className="flex flex-row">
                  <div className="flex self-center transition-all duration-100" style={{ transform: (showing ? 'rotate(90deg)' : 'none') }}>
                     {icon}
                  </div>
                  <span className='flex self-center' onClick={() => this.setState({ showing: !showing })}>
                     {text}
                  </span>                          
               </div>
               <div className="flex self-center group" onClick={this.showChannelMaker}>
                  <BiPlus size={18} className="tooltip" data-tooltip-target="AddChannel"/>
                  <span id="AddChannel" className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-neutral-300 transition-opacity duration-300 bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700'>
                     Create Channel
                     <div data-popper-arrow className="duration-300"></div>
                  </span>

               </div>
            </div>
            <div id="Channel-Group-Channels" style={{ display: (showing ? 'flex' : 'none') }} className="flex flex-col gap-1" >
               {channels.length !== 0 && channels.map((ChannelName, i) => <ChannelName key={i} icon={<BiHash size={18}/>} text={"placeholder1"} room={"placeholder1"}/>)}
            </div> 
            <div id="Channel-Group-Channels" style={{ display: (showing ? 'flex' : 'none') }} className="flex flex-col gap-1" >
               {channels.length !== 0 && channels.map((ChannelName, i) => <ChannelName key={i} icon={<BiHash size={18}/>} text={"placeholder2"} room={"placeholder2"}/>)}
            </div>
            <div id="Channel-Group-Channels" style={{ display: (showing ? 'flex' : 'none') }} className="flex flex-col gap-1" >
               {channels.length !== 0 && channels.map((ChannelName, i) => <ChannelName key={i} icon={<BiHash size={18}/>} text={"placeholder3"} room={"placeholder3"}/>)}
            </div>



            {/* TEXT CHANNEL CREATOR */}
            <div  id="channel-Maker" className="hidden flex-col absolute bottom-1/2 left-1/4 bg-neutral-900 h-56 w-56">
               <label for="small-input" class="block mb-2 text-sm font-medium text-neutral-200 dark:text-white">Name Your Channel</label>
               <input   type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
               <button id="channel-submit" type="submit" onClick={this.makeChannel.bind(this)}>Submit</button>
            </div>

         </div> 
       )
   }
}

export default ChannelBar