import React from "react"
import cyndaquil from '../IMAGES/Cyndaquil.jpg'
import matcha from '../IMAGES/matcha.jpg'
import curry from '../IMAGES/curry.jpg'

const People = () => {
   return (
      <div id="People" className="flex-shrink-0 m-0
      flex flex-col flex-grow gap-2 pt-5 pl-2 pr-2
      bg-neutral-800 text-white shadow-lg">
         <Person userIcon={cyndaquil} userName={"Lucas Films"} activity={"Listening to Spotify"}/>
         <Person userIcon={matcha} userName={"James Boi"} activity={"Waking up April"}/>
         <Person userIcon={curry} userName={"Evan"} activity={""}/>
      </div>
   )
}

export class Person extends React.Component{
   render() {
      const {userIcon = ''} = this.props
      const {userName = ''} = this.props
      const {activity = ''} = this.props
      return(
         <div id="People-User" className="flex ml-3">
            <img id="User-Icon" className="mt-2" alt="" src={userIcon}/>
            <div id="People-Name-Activity" className="ml-3 flex flex-col justify-center">
               <div id="People-Name" className="text-md">{userName}</div>
               <div id="People-Activity" className="text-xs text-neutral-300">{activity}</div>
            </div>
         </div>
      )
   }
}

export default People;