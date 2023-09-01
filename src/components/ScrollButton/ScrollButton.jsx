import React, { useState, useEffect } from 'react';
import {SlArrowDown} from 'react-icons/sl';
import { Button} from './Styles';


// _________________________________________________________

  
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(true);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if 
          (window.scrollY > 400) {
              setShowTopBtn(false);
          } else {
              setShowTopBtn(true);
          }
      });
  }, []);
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    
      <Button>
          {" "}
          {showTopBtn && (
              <SlArrowDown
                  
                  onClick={scrollToBottom}
              />
          )}{" "}
      </Button>
    
  );
};
export default ScrollToTop;


// _______________________________________________________
  
  // const [visible, setVisible] = useState(false)
  
  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300){
  //     setVisible(true)
  //   } 
  //   else if (scrolled <= 300){
  //     setVisible(false)
  //   }
  // };
  
  // const scrollToTop = () =>{
  //   window.scrollTo({
  //     top: 0, 
  //     behavior: 'smooth'
  //   });
  // };
  
  // window.addEventListener('scroll', toggleVisible);
  
//   return (
//     <Button>
//      <SlArrowDown onClick={scrollDown} />
//     </Button>
//   );
// }
  
// export default ScrollButton;