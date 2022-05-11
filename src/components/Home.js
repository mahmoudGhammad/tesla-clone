import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
              title="Model S"
              Description="Order Online for Touchless Delivery"
              backgroundImage='model-s.jpg'
              rightBtnText='Existing inventory '
              leftBtnText ='custom order'
      />
      <Section
            
            title="Model Y "
            Description="Order Online for Touchless Delivery"
            backgroundImage='model-y.jpg'
            rightBtnText='Existing inventory '
            leftBtnText ='custom order'
      />
      <Section
            title="Model 3 "
            Description="Order Online for Touchless Delivery"
            backgroundImage='model-3.jpg'
            rightBtnText='Existing inventory '
            leftBtnText ='custom order'
      />
      <Section
               title="Model X"
               Description="Order Online for Touchless Delivery"
               backgroundImage='model-x.jpg'
               rightBtnText='Existing inventory '
               leftBtnText ='custom order'
      />
      <Section
               title="Solar for New Roofs"
               Description="Order Online for Touchless Delivery"
               backgroundImage='solar-panel.jpg'
               rightBtnText='order now '
               leftBtnText ='Learn More '
      />
      <Section
               title="Solar Roof"
               Description="Order Online for Touchless Delivery"
               backgroundImage='solar-roof.jpg'
               rightBtnText='order now '
               leftBtnText ='learn more'
      />
      <Section
               title="Accessories "
               Description="Order Online for Touchless Delivery"
               backgroundImage='accessories.jpg'
               leftBtnText ='order now'
      />

      

    </Container>
  )
}

export default Home


const Container = styled.div`
  
    width: 100vh;
  
`