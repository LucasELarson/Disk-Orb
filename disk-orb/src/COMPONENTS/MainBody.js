import { BiPlus, BiHash } from "react-icons/bi"
import { BsFillPlusCircleFill, BsFillGiftFill, BsFillEmojiKissFill, BsFiletypeGif } from 'react-icons/bs' 
import { ImFileEmpty } from 'react-icons/im'
import React from "react"

const MainBody = () => {
   return(
      <div id="Main-Body" className=" flex flex-shrink w-9/12 bg-neutral-700 flex-col">
         
         <div id="Main-Header" className="text-white text-7xl bg-neutral-700 w-full shrink-0" >
            
         </div>


         
         
         <div id="Main-Chat" className="m-0 mr-0.5 flex flex-col flex-shrink flex-grow bg-neutral-700 overflow-scroll overflow-x-hidden">
         <div className=" bg-red-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-100 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-400 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-700 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-400 h-32 w-32 shrink-0"/>
    
         <div className=" bg-slate-900 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-100 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-400 h-32 w-32 shrink-0"/>
    
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>

         <div className=" bg-slate-500 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-600 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-800 h-32 w-32 shrink-0"/>
    
         <div className=" bg-slate-200 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-200 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-600 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-700 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-400 h-32 w-32 shrink-0"/>
    
         <div className=" bg-slate-900 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-100 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-400 h-32 w-32 shrink-0"/>
    
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>

         <div className=" bg-slate-500 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-600 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-800 h-32 w-32 shrink-0"/>
    
         <div className=" bg-slate-200 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-300 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-200 h-32 w-32 shrink-0"/>
         <div className=" bg-slate-600 h-32 w-32 shrink-0"/>
    
         <div className=" bg-red-300 h-32 w-32 shrink-0"/>
         
         


         </div>


         
         
         <div id="Main-Input" className="flex bg-neutral-700 pt-3 pb-6 shrink-0">
            <div id="Input-Div" className="flex flex-grow bg-neutral-600 m-h-10 mx-5 rounded-lg text-neutral-300 items-center">
               <div id="Add-Media-Input" className="px-4">
                  <BsFillPlusCircleFill size={20}/>
               </div>
                  <input  type={"text"} className="flex flex-grow h-full bg-neutral-600 focus:border-none" />
                  
               <div id="Add-Nitro-Input" className="Input-Icon pl-4">
                  <BsFillGiftFill size={20}/>
               </div>
               <div id="Add-Gif-Input" className="Input-Icon">
                  <BsFiletypeGif size={20}/>
               </div>
               <div id="Add-Sticker-Input" className="Input-Icon">
                  <ImFileEmpty size={20}/>
               </div>
               <div id="Add-Emoji-Input" className="Input-Icon">
                  <BsFillEmojiKissFill size={20}/>
               </div>
            </div>
         </div>

      </div>
   )
}



export default MainBody;