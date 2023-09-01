import styled from 'styled-components';

export const Content = styled.div`
overflowY: scroll;
height: 100px;
`;



export const Button = styled.div`
/* background-color:  rgba(255, 255, 255); */
position: fixed;
text-align: center;
/* margin-top: 8px; */
/* width: 80px; */
height: 80px;
border-radius: 50%;
left: 48%;
bottom: 80px;;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: whitesmoke;

@keyframes movebtn {
  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translateY(20px);
  }
  50%{
    transform: translateY(0px);
  }
  75%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0px);
  }
}
/* @media screen and (max-width: 767px) {
    left: 80%;
  } */
`;

// FiChevronDown