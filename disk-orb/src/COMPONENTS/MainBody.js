import { BiPlus, BiHash } from "react-icons/bi"
import { BsFillPlusCircleFill, BsFillGiftFill, BsFillEmojiKissFill, BsFiletypeGif } from 'react-icons/bs' 
import { ImFileEmpty } from 'react-icons/im'
import React from "react"


const MainBody = () => {
   return(
      <div id="Main-Body" className=" flex flex-shrink w-9/12 bg-neutral-700 flex-col">
         
         <div id="Main-Header" className="text-white text-7xl bg-neutral-700 w-full shrink-0" >
            
         </div>


         
         
         <div id="Main-Chat" className="m-0 mr-0.5 flex flex-col flex-shrink grow bg-neutral-700 overflow-scroll overflow-x-hidden">
         <div className=" bg-purple-900 h-32 w-32 shrink-0"/>
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


         
         
         <div id="Main-Input" className=" bg-neutral-700 pt-3 pb-6 w-full pr-10 shrink-0">
            <div id="Input-Div" className="relative flex w-full h-full mx-5 text-neutral-300 items-start pt-0">
               
                  <span id="text-box"  contentEditable="true" className=" inline-block h-full bg-neutral-600" />
                  
                  <div id="Add-Media-Input" className="px-4 absolute top-2 left-0 text-neutral-300 hover:text-hover">
                  <BsFillPlusCircleFill size={22}/>
                  </div>

                  <div id="right-icons" className="absolute flex right-1 top-2">
                     <div id="Add-Nitro-Input" className="Input-Icon text-neutral-300 hover:text-hover">
                        <BsFillGiftFill size={22}/>
                     </div>
                     <div id="Add-Gif-Input" className="Input-Icon text-neutral-300 hover:text-hover">
                        <BsFiletypeGif size={22}/>
                     </div>
                     <div id="Add-Sticker-Input" className="Input-Icon text-neutral-300 hover:text-hover">
                        <ImFileEmpty size={22}/>
                     </div>
                     <div id="Add-Emoji-Input" className="Input-Icon text-neutral-300 hover:text-hover">
                        <BsFillEmojiKissFill size={22}/>
                     </div>
                  </div>
            </div>
               
         </div>

      </div>
   )
}



export default MainBody;