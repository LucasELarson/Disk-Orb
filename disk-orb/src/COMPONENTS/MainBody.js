import { BiPlus, BiHash } from "react-icons/bi"
import { BsFillPlusCircleFill, BsFillGiftFill, BsFillEmojiKissFill, BsFiletypeGif } from 'react-icons/bs' 
import { ImFileEmpty } from 'react-icons/im'
import React from "react"
import cyndaquil from '../IMAGES/Cyndaquil.jpg'
import matcha from '../IMAGES/matcha.jpg'
import curry from '../IMAGES/curry.jpg'


const MainBody = () => {
   return(
      <div id="Main-Body" className=" flex flex-shrink w-9/12 bg-neutral-700 flex-col">
         
         <div id="Main-Header" className="text-white text-7xl bg-neutral-700 w-full shrink-0" >
            
         </div>


         
         
         <div id="Main-Chat" className="m-0 mr-0.5 flex flex-col-reverse flex-shrink grow bg-neutral-700 overflow-scroll overflow-x-hidden">
            
            <Message userIcon={matcha} userName={"James Boi"} date={setDate()} message={"Thank you for your continued consideration"}/>

            <Message userIcon={curry} userName={"Evan"} date={setDate()} message={"I want to express the pain and hurt that you have caused me, and to let you know that I can never forgive you for what you did. The harm you caused me has left deep scars that will never heal, and it has changed my life in ways that I never could have imagined. The trust that I had in you was shattered, and the love and respect that I once had for you has been lost forever. I want you to understand that I am not writing this letter out of anger or revenge, but out of a deep sense of sadness and disappointment. I had hoped that we could have resolved our issues and moved forward, but the damage that you have caused is too great to overlook. I want you to know that I am not holding onto this pain and anger for my own sake, but for the sake of my own healing and well-being. I need to acknowledge the hurt that you caused me, and I need to give myself permission to move on without you. I hope that you can understand and respect my decision to never forgive you, and that you can find it in your heart to seek forgiveness from others that you may have hurt in your life."}/>
            
            <Message userIcon={cyndaquil} userName={"Lucas Films"} date={setDate()} message={"Ill think about forgiving you..."}/>
            
            <Message userIcon={matcha} userName={"James Boi"} date={setDate()} message={"I want to apologize for the significant harm that I have caused you through my terrible appearance. I understand that my face has caused you a great deal of pain and distress, and I take full responsibility for my actions. I am truly sorry that my genetics have resulted in a negative impact on your life and well-being. It was never my intention to cause you harm, but I understand that my birth has caused you significant emotional and physical pain. I acknowledge that the damage that has been done to your psyche is irreversible, and for that, I am deeply sorry. I want you to know that I have been reflecting on my actions and the impact that they have had on you. I understand that I need to take responsibility for my actions and do what I can to make amends. I am willing to listen to you and understand how I can help you in this situation. I would like to discuss options for remedying the situation and making things right between us. I want to make sure that we can work together to help you feel more comfortable and less afraid around me, as much as possible. Once again, I am truly sorry for the harm that I have caused you. I take full responsibility for my actions, and I hope that we can work together to make things right."}/>
            
            <Message userIcon={cyndaquil} userName={"Lucas Films"} date={setDate()} message={"Yeah i honestly agree with evan on this one g"}/>
            
            <Message userIcon={curry} userName={"Evan"} date={setDate()} message={"Holy smokes J dog, that is embarassing. I honestly wouldnt show my face in public ever again if i were you. Seriously, dont ever step foot in front of me or I will bully the fuck out of you, as a matter of fact stop existing, try to go back in time just to stop yourself from being born entirely and save the world some air from the lack of your futile little purposeless existance"}/>
            
            <Message userIcon={matcha} userName={"James Boi"} date={setDate()} message={"Yeah i know"}/>
            
            <Message userIcon={cyndaquil} userName={"Lucas Films"} date={setDate()} message={"Wow thats really embarassing"}/>

            <Message userIcon={matcha} userName={"James Boi"} date={setDate()} message={"Maybe..."}/>
      
            <Message userIcon={cyndaquil} userName={"Lucas Films"} date={setDate()} message={"Wow i cant belive james exists still"}/>
         
            <Message userIcon={cyndaquil} userName={"Lucas Films"} date={setDate()} message={"This You?"} media={matcha}/>

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

function setDate() {
   var date = new Date()
   var d = date.getDate()
   var mo = date.getMonth()
   var y = date.getFullYear()
   var h = date.getHours()
   var m = date.getMinutes()
   var ampm = (h >= 12) ? " PM" : " AM";
   return(String(mo + 1) + "/" + String(d) + "/" + String(y) + " at " + String(h) + ":" + String(m) + ampm)
}

export class Message extends React.Component{
   render() {
      const {userName = ""} = this.props
      const {userIcon = ""} = this.props
      const {date = ''} = this.props
      const {message = ''} = this.props
      const {media = ''} = this.props
      return(
         <div id="message-container" className="flex hover:bg-messageHover mt-2 mb-2">
            <img alt="User-Icon" id="user-icon" className=" h-10 w-10 ml-4 mt-1" src={userIcon}/>
            
            <div id="message-content" className="flex flex-col ml-4">
               
               <div id="message-header" className="flex">
                 
                  <div id="message-sender" className=" text-purple-800 text-md">{userName}</div>
                  
                  <div id="message-send-time" className="text-neutral-400 text-xs ml-2 mt-1">{date}</div>
               </div>
               
               <div id="message-data" className="text-neutral-300">{message}</div>
               <img id="message-media" alt="" className="" src={media}/>
            </div>
         </div>
      )
   }
}

export default MainBody;