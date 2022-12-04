import { useState } from "react"
import { FiChevronRight, FiSearch } from 'react-icons/fi'

export function InputSearchOpen() {
   const [ ComponentVisibility, setComponentVisibility ] = useState(false)

   const [ openModal, setOpenModal ] = useState(false)
   const [ openModal2, setOpenModal2 ] = useState(false)

   return (
      <>
         <div className={`flex font-medium bg-red-200 w-[400px] justify-around items-start overflow-hidden p-4 rounded-xl transition-all duration-700 
            ${ComponentVisibility?'h-[250px] shadow-outFullLight ' :'h-[90px] shadow-outFull'}
         `}>
            <div className="flex flex-col gap-2">
               
               Primeira Barra de Pesquisa:
               <div className={`flex relative mb-4 gap-4 duration-700 transition-all rounded-full justify-center items-center
                  ${openModal?'bg-red-50' :'bg-red-400'}
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

               Segunda Barra de Pesquisa:
               
                  <div className={`flex relative p-2 px-4 h-12 duration-1000 transition-all rounded-full items-center
                     ${openModal2?'bg-red-50 w-full' :'bg-red-400 w-16'}
                  `}>
                     
                     
                        <div className={`duration-1000 transition-opacity overflow-hidden z-10 items-center justify-center
                           ${openModal2?'opacity-100 w-full':'opacity-0 hidden w-4'}
                        `}>
                           <input 
                              className="border-b-2 border-pink-200 p-1 relative focus:border-pink-600 bg-transparent outline-none" 
                              placeholder="Digite sua busca"
                           />
                        </div>
                    

                     <button disabled={!ComponentVisibility} onClick={() => setOpenModal2(!openModal2)} 
                        className={`bg-red-50 flex rounded-full p-2 absolute enabled:hover:brightness-90 z-20 right-0
                           duration-300 border-4 font-bold transition-all shadow-soft 
                           enabled:hover:text-pink-600
                           disabled:cursor-not-allowed disabled:brightness-75
                           ${openModal2 ? 'enabled:border-pink-500/80 duration-1000 rotate-[360deg]' : 'border-transparent duration-1000 rotate-0 '}
                        `}>
                        <FiSearch size={28}/>
                     </button>
                     
                  </div>

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