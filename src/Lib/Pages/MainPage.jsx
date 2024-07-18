import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Side from '../Components/Side/Side'
import Nav from '../Components/Nav/Nav'
import { useSelector } from 'react-redux'
import Main from '../Components/Main/Main'
import { Color } from '../Model/Content/Color'

const MainPage = () => {

  const sideParam = useSelector((state) => state.data.appStatus);
  return (
    <>
      <Box bg={Color.bgColor}>
        <Grid
          templateAreas={`"nav nav"
                  "side main"
                  "side footer"`}
          gridTemplateRows={'7vh 1fr 5vh'}
          gridTemplateColumns={`${sideParam.onSide ? "200px" : "100px"} 1fr`}
          h='100vh'
          bg={"#0f0f0f"}
          gap='1'
          color=''
          fontWeight='bold'
        >
          <GridItem bg={Color.bgColor} area={'nav'}>
            <Nav />
          </GridItem>
          <GridItem bg={Color.bgColor} area={'side'}>
            <Side />
          </GridItem>
          <GridItem bg={Color.bgColor} area={'main'}>
            <Main />
          </GridItem>
          <GridItem bg={Color.bgColor} area={'footer'}>
            Footer
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default MainPage