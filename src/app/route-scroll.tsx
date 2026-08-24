"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteScroll(){
  const pathname=usePathname();
  useEffect(()=>{
    const hash=window.location.hash;
    if(hash){
      const target=document.getElementById(hash.slice(1));
      if(target){requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));return;}
    }
    window.scrollTo(0,0);
  },[pathname]);
  return null;
}
