import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap"
import "./hero.css";
const FLoatingText = (props:any) => {
  let itemRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    window.addEventListener('scroll', getPageYScroll);
  },[]);

  const getPageYScroll = () => {
    if(itemRef.current){
      var offsetY = itemRef.current.offsetTop - window.pageYOffset - window.innerHeight * 0.7
      console.log(offsetY)
      if(offsetY < 0)
        gsap.to(itemRef.current, 0.5, { left:0});
    }
  }

  return (
    <div ref={itemRef} className='floattext'>
      <div className="experience-item">
        {props.children} 
      </div>
    </div>
  )
}

export default FLoatingText
