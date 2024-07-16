import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Side from '../Components/Side/Side'
import Nav from '../Components/Nav/Nav'

const MainPage = () => {
  return (
    <div>
       <Grid
  templateAreas={`"nav nav"
                  "side main"
                  "side footer"`}
  gridTemplateRows={'7vh 1fr 5vh'}
  gridTemplateColumns={'200px 1fr'}
  h='100vh'
  bg={"#0f0f0f"}
  gap='1'
  color=''
  fontWeight='bold'
>
  <GridItem area={'nav'}>
    <Nav/>
  </GridItem>
  <GridItem area={'side'}>
    <Side/>
  </GridItem>
  <GridItem pl='2' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' area={'footer'}>
    Footer
  </GridItem>
</Grid>
    </div>
  )
}

export default MainPage