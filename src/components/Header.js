import {React , useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const [status , setStatus] = useState(false)
  return (
    <Container>
      <a>
        <img src='/images/logo.svg'></img>
      </a>
      <Menu>
        <p><a href='#'>Model S</a></p>
        <p><a href='#'>Model 3</a></p>
        <p><a href='#'>Model X</a></p>
        <p><a href='#'>Model Y</a></p>

      </Menu>
      <RightMenu onClick={()=> setStatus(true)}>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
       <CustMenu/>


      </RightMenu>
      <BurgerNav show={status}>
        <CloseWrapper >
          <CustoClose onClick={()=> setStatus(false)}/>
        </CloseWrapper>
        
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Commercial Energy</a></li>
      
        <li><a href='#'>Charging</a></li>

        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>Find us</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
 z-index:1 ;
min-height: 60px;
position: fixed ; 
display:flex;
align-items: center;
padding: 0 20px ;
width:100%;
justify-content:space-between;


`

const Menu = styled.div`
display:flex;
// width:100%;
justify-content: space-between;
align-items: center;
justify-content:center;
flex: 1 ;
// width: 100%;   // this state flex: 1 and with : 100% did the same job 

@media (max-width: 768px){
  display:none;
};

      
       p{
         font-weight:600;
         text-transform:uppercase;
         padding: 0 10px;
         flex-wrap: nowrap;
       }
`


const RightMenu = styled.div`
display:flex;
align-items:center;
justify-content: center;
       a{
         font-weight:600;
         text-transform:upper-care;
         margin:10px ; 
       } 

`



const CustMenu = styled(MenuIcon)`
cursor: pointer; 
`



const BurgerNav = styled.div`
position: fixed ;
background:white ;
top: 0 ;
right:0 ;
bottom:0 ;
width:300;
z-index: 100 ;
list-style:none;
display:flex;
flex-direction:column;
text-align: start;
padding:20px;
          li{
             padding: 15px 0 ;
             border-bottom: 1px solid rgba( 0,0,0,0.2) ;
          }

          a{
            font-weight:600;
          }
transform : ${props => props.show ? 'translatex(0)' : 'translatex(100%)'};
transition: 0.2s ease-in;
`



const CustoClose = styled(CloseIcon)`
cursor:pointer
`



const CloseWrapper = styled.div`
display: flex ;
justify-content: flex-end;

`