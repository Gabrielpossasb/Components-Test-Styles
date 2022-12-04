import { useState } from "react"
import { FiChevronRight } from 'react-icons/fi'

export function OpenModalAnimation() {
   const [ ComponentVisibility, setComponentVisibility ] = useState(false)

   const [ openModal, setOpenModal ] = useState(false)

   return (
      <>
         <div className={`flex font-medium w-[400px] bg-red-200 justify-around items-start p-4 rounded-xl transition-all duration-700 
            ${ComponentVisibility?'h-[300px] shadow-outFullLight' :'h-[90px] shadow-outFull'}
         `}>
            <div className={`flex flex-col w-40 gap-4 justify-center items-center`}>
               <button disabled={!ComponentVisibility} onMouseEnter={() => setOpenModal(true)} onClick={() => setOpenModal(!openModal)} 
                  className={`bg-red-50 rounded-lg px-8 p-2 enabled:hover:brightness-90 enabled:hover:text-pink-600 duration-300 border-4 font-bold transition-all shadow-shadowModal 
                     disabled:cursor-not-allowed disabled:brightness-75
                     ${openModal ? 'enabled:border-pink-500/80 duration-1000' : 'border-transparent duration-1000'}
                  `}>
                  Open
               </button>
               
               {  ComponentVisibility && (
                  <div className="relative h-40 w-48 flex duration-500 items-center justify-center">
                     <div className="absolute h-40 w-48 flex items-center justify-center">
                        <div className={`bg-red-50 rounded-lg transition-all duration-300 z-10 shadow-shadowModal
                           ${openModal ?'animate-openModal' :'opacity-0 '}
                        `}/>
                     </div>

                     <div className={`flex flex-col shadow-shadowModal bg-red-50 gap-2 p-8 h-40 w-48 justify-center rounded-lg transition-all duration-300 z-20 
                        ${openModal ?'opacity-100 delay-700' :'opacity-0'}`
                     }>
                        <text className='hover:text-pink-500 hover:cursor-pointer'>Home</text>
                        <text className='hover:text-pink-500 hover:cursor-pointer'>Produtos</text>
                        <text className='hover:text-pink-500 hover:cursor-pointer'>Contato</text>
                        <text className='hover:text-pink-500 hover:cursor-pointer'>Ajuda</text>
                        <text className='hover:text-pink-500 hover:cursor-pointer'>Configurações</text>
                     </div>
                  </div>
               )}
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