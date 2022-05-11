import React from 'react'

import styled from "styled-components"
import { Fade } from 'react-reveal'

function Section({ rightBtnText , leftBtnText , backgroundImage , title , Description}) {

  return (
    <Wrap bgImage = {backgroundImage} >

      <Fade bottom>
      <ItemText>
          <h1>{title}</h1>
          <p>{Description}</p>
        </ItemText>
      </Fade>

       

        <Buttons>
          <ButtonGroup>
            <LeftButton>
                     {leftBtnText}
            </LeftButton>
           {rightBtnText && 
                     <RightButton>
                     {rightBtnText}
             </RightButton>
           }
          </ButtonGroup>

          <DownArrow src='/images/down-arrow.svg'>
         
          </DownArrow>
        </Buttons>

        

    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
display: flex ;
flex-direction: column;
justify-content: space-between;
background: orange;
width: 100vw;
height: 100vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: ${props => `url("/images/${props.bgImage}")`};

`




const ItemText = styled.div`
padding-top: 15vh;
text-align: center
display:flex
`

const Buttons = styled.div``

const ButtonGroup =styled.div`
display:flex;
justify-content: center;
@media (max-width: 768px){
   flex-direction: column;
   align-items: center;

}
`

const LeftButton = styled.div`
background-color: rgba(23 , 26 , 32 , .8);
color: white;
height: 40px;
width:256px;
display: flex;
Justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform:uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton = styled(LeftButton)`
 background: white;
 opacity: 0.65 ;
 color: black;
`


const DownArrow = styled.img`
margin-top: 10;
height : 40px;
animation: animateDown infinite 1.5s;

`