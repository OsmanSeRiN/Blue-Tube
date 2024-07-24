import { Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import Side from '../Components/Side/Side'
import Nav from '../Components/Nav/Nav'
import { useSelector } from 'react-redux'
import Main from '../Components/Main/Main'
import { Color } from '../Model/Content/Color'

const MainPage = () => {

  const sideParam = useSelector((state) => state.data.appStatus);
  const display = useBreakpointValue({base:"none", sm:"block"})
  const sideWidthParam = sideParam ? "200px":"100px"
  const sideWidth = useBreakpointValue({ base: "0px", sm: sideWidthParam, md: sideWidthParam});
  return (
    <>
      <Box bg={Color.bgColor}>
        <Grid
          templateAreas={`"nav nav"
                  "side main"
                  "side footer"`}
          gridTemplateRows={'8vh 1fr 5vh'}
          gridTemplateColumns={`${sideWidth} 1fr`}
          h='100vh'
          bg={Color.bgColor}
          gap='0'
          color=''
          fontWeight='bold'
        >
          <GridItem bg={Color.bgColor} area={'nav'}>
            <Nav />
          </GridItem>
          <GridItem bg={Color.bgColor} area={'side'} display={display}>
             <Side/>
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