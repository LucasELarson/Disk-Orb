import { BsFillPlusCircleFill, BsFillGiftFill, BsFillEmojiKissFill, BsFiletypeGif } from 'react-icons/bs' 
import { BiHash } from 'react-icons/bi'
import { ImFileEmpty } from 'react-icons/im'
import React, { useEffect, useState, useRef } from "react"
import { addDoc, collection, doc, documentId, onSnapshot, orderBy, query, QuerySnapshot, Timestamp, where, } from 'firebase/firestore'
import { auth, db } from "../firebase-config"
import 'flowbite';



const MainBody = () => {
   alert("this is an in development app, everything is built from scratch by me. In order to see and send messages click on the 'sign in' in the top left corner, then click the '+' next to the 'text channels' and type in 'General'. Some featured are not yet implemented or are partially implemented. For now the chat is this applications main functionality")
   const [messages, setMessages] = useState([])
   const roomRef = collection(db, "room")

   useEffect(() => {
   const listener = async (event) => {
      if(document.getElementById("Main-Header-Text").innerText !== "") {
         const queryMessages = query(roomRef, orderBy("messageData")) 
         const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            let sortedMsg = [];
         snapshot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id});                            
         });     
         messages.forEach((msg) => {
            if(msg.room === document.getElementById("Main-Header-Text").innerText){
               sortedMsg.push(msg)
            }
         })
         console.log(sortedMsg[0].messageData)
         setMessages(sortedMsg) 
      })
      return () => unsuscribe() 
      }
   }
      document.addEventListener("click", listener);
      return () => {
      document.removeEventListener("click", listener);
      }; 
   }, [])


   // // PULL MESSAGES //
   // useEffect(() => {
   //    const queryMessages = query(messagesRef, where("room", "==", document.getElementById("Main-Header-Text").innerText )) 
   //    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
   //          let messages = [];
   //       snapshot.forEach((doc) => {
   //          messages.push({...doc.data(), id: doc.id});
   //       });
   //       setMessages(messages) 
   //    })
      
   //    return () => unsuscribe() 
   // }, [])

   // SENDS MESSAGES TO DATABASE //
   useEffect(() => {
      const listener = async (event) => {
        if ((event.code === "Enter" || event.code === "NumpadEnter") && document.getElementById('text-box').innerText !== "") {
          event.preventDefault();

         //  await addDoc(messagesRef, {
         //    file: "",
         //    text: String(document.getElementById('text-box').innerText),
         //    createdAt: Timestamp.fromDate(new Date()),
         //    user: auth.currentUser.displayName,
         //    userIcon: auth.currentUser.photoURL,
            
         //  })
         await addDoc(roomRef, {
            room: document.getElementById("Main-Header-Text").innerText,
            messageData: {text: String(document.getElementById('text-box').innerText), createdAt: Timestamp.fromDate(new Date()), user: auth.currentUser.displayName, userIcon: auth.currentUser.photoURL}
         })

          //TEMPORARY FIX //
          document.getElementById("User-Icon").src = auth.currentUser.photoURL
          document.getElementById("User-Name").innerText = auth.currentUser.displayName
          // TEMPORARY FIX //
          document.getElementById('text-box').innerHTML = ''
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, []);


   return(
      <div id="Main-Body" className=" flex flex-shrink w-9/12 bg-neutral-700 flex-col">
         
         <div id="Main-Header" className="flex items-center text-white text-md bg-neutral-700 w-full shrink-0" >
            <div id='replace'><BiHash/></div>
            <div id='Main-Header-Text'></div>
         </div>


         
         
         <div id="Main-Chat" className="m-0 mr-0.5 flex flex-col-reverse flex-shrink grow bg-neutral-700 overflow-scroll overflow-x-hidden">
            <div>{messages.map((message) => <Message userIcon={message.messageData.userIcon} userName={message.messageData.user} date={String(setDate(message.messageData.createdAt.seconds * 1000))} message={message.messageData.text} />)} </div>
         </div>


         
         
         <div id="Main-Input" className=" bg-neutral-700 pt-3 pb-6 w-full pr-10 shrink-0">
            <div id="Input-Div" className="relative flex w-full h-full mx-5 text-neutral-300 items-start pt-0">
               
                  <span id="text-box" typeof="submit" contentEditable="true" className="pt-1.5 inline-block h-full bg-neutral-600"  />
                  
                  <div id="Add-Media-Input" className="px-4 absolute top-2 left-0 text-neutral-300 hover:text-hover" >
                  <BsFillPlusCircleFill size={22} data-tooltip-target="AddMedia" data-tooltip-trigger="click"/>
                  <div id="AddMedia" className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-neutral-300 transition-opacity duration-300 bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700'>
                     Upload Files
                     <input id="Files" className="duration-300" type="file" multiple></input>
                     <div data-popper-arrow className='duration-300'></div>
                     
                  </div>
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

function setDate(day) {
   var date = new Date(day)
   var d = date.getDate()
   var mo = date.getMonth()
   var y = date.getFullYear()
   var h = date.getHours()
   var m = date.getMinutes()
   var ampm = (h >= 12) ? " PM" : " AM";
   if(h>12){
      h =  h- 12
   }
   if(String(m).length <2){
      return(String(mo + 1) + "/" + String(d) + "/" + String(y) + " at " + String(h) + ":0" + String(m) + ampm)
   } else {
      return(String(mo + 1) + "/" + String(d) + "/" + String(y) + " at " + String(h) + ":" + String(m) + ampm)
   }
   
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