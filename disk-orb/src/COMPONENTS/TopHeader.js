import { auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'

import Cookies from 'universal-cookie'
import { useEffect } from 'react'
const cookies = new Cookies()

const TopHeader = () => {



   const signInWithGoogle = async () => {
      try{
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      window.location.reload()
      } catch(err) {console.error(err)}
      
   }
   
   return(
      <div onClick={signInWithGoogle} className=" top-0 w-scree h-6 bg-neutral-900 text-neutral-400 text-xs flex justify-self-center pl-2 pt-1">
         Sign In
      </div>
   )
}

export default TopHeader;
