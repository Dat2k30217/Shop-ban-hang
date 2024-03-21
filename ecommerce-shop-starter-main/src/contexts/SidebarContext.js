import React,{useState,createContext} from 'react';

export const SidebarContext =createContext()
const SidebarProvide = ({children}) => {
  const [isOpen,setIsOpen]=useState(false);
  const  hadleClose = ()=>{
    setIsOpen(false);
  }
  return <SidebarContext.Provider value={{isOpen,setIsOpen,hadleClose}}>
    {children}
    </SidebarContext.Provider>
};

export default SidebarProvide;
