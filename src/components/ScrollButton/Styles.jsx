import styled from 'styled-components';

export const Content = styled.div`
overflowY: scroll;
height: 100px;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 47%;
top: 650px;
height: 60px;
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