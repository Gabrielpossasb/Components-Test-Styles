import { useState } from "react"
import { FiChevronRight, FiSearch } from 'react-icons/fi'

export function InputSearchOpen() {
   const [ ComponentVisibility, setComponentVisibility ] = useState(false)

   const [ openModal, setOpenModal ] = useState(false)

   return (
      <>
         <div className={`flex font-medium w-[400px] justify-around items-start p-4 rounded-xl transition-all duration-700 
            ${ComponentVisibility?'h-[100px] shadow-outFullLight' :'h-[90px] shadow-outFull'}
         `}>

            <div className={`flex relative  gap-4 duration-700 transition-all rounded-full justify-center items-center
               ${openModal?'bg-red-50' :'bg-inherit'}
            `}>

               
               <div className={`flex duration-500 transition-all relative left-12 z-10 items-center justify-center
                  ${openModal?'opacity-100  delay-500' :'opacity-0 '}
               `}>
                  <input 
                     className="border-b-2 border-pink-200 p-1 focus:border-pink-600 bg-transparent outline-none" 
                     placeholder="Digite sua busca"
                  />
               </div>
               

               <button disabled={!ComponentVisibility} onClick={() => setOpenModal(!openModal)} 
                  className={`bg-red-50 flex rounded-full p-2 relative enabled:hover:brightness-90 z-20 right-0
                     duration-300 border-4 font-bold transition-all shadow-shadowModal 
                     enabled:hover:text-pink-600
                     disabled:cursor-not-allowed disabled:brightness-75
                     ${openModal ? 'enabled:border-pink-500/80 duration-1000 -rotate-[270deg] right-[230px]' : 'border-transparent duration-1000 rotate-0 right-0'}
                  `}>
                  <FiSearch size={28}/>
               </button>
               
            </div>

            <button onClick={() => {setComponentVisibility(!ComponentVisibility), setOpenModal(false)}} 
               className={`bg-red-50 p-2 rounded-full hover:brightness-90 hover:text-pink-600 duration-300 shadow-soft
                  ${ComponentVisibility ?'rotate-90 duration-700' :'duration-700'}`
            }>
               <FiChevronRight size={24}/>
            </button>
         </div>
      </>
   )
}