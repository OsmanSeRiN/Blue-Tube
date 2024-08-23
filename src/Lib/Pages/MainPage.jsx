import { Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Side from '../Components/Side/Side'
import Nav from '../Components/Nav/Nav'
import { useSelector } from 'react-redux'
import Main from '../Components/Main/Main'
import { Color } from '../Model/Content/Color'
import { Param } from '../Model/Content/Param'
import MobileNav from '../Components/Nav/MobileNav'

const MainPage = () => {

  const sideParam = useSelector((state) => state.data.appStatus);
  const display = useBreakpointValue({base:"none", sm:"none",md:"block"})
  const [width,setWidth] = useState()
  console.log("Side parametresi " + sideParam ? "200px":"100px" )

     const sideWidthParam = useBreakpointValue({
      base: "0px",
      sm:"0px",
      md: sideParam.onSide ? "200px" : "100px"
    });

    const navWidth = useBreakpointValue({
      base:"none",
      sm:"none",
      md:"100%"
    })

    const mobileNavWidth = useBreakpointValue({
      base:"100%",
      sm:"100%",
      md:"none"
    })

    useEffect(() => {
      setWidth(sideWidthParam);
    }, [sideWidthParam, sideParam]);

  return (
    <>
      <Box bg={Color.bgColor}>
        <Grid
          templateAreas={`"nav nav"
                  "side main"
                  "side footer"`}
          gridTemplateRows={'8vh 1fr 5vh'}
          gridTemplateColumns={`${width} 1fr`}
          h='100vh'
          bg={Color.bgColor}
          gap='0'
          color=''
          fontWeight='bold'
          fontFamily={Param.fontFamily}
        >
          <GridItem bg={Color.bgColor} area={'nav'}>
            <Box display={navWidth}>
              <Nav/>
            </Box>
            <Box mb={"5px"} display={mobileNavWidth}>
              <MobileNav/>
            </Box>
          </GridItem>
          <GridItem bg={Color.bgColor} area={'side'} >
            <Box display={display}>
              <Side/>
            </Box>
          </GridItem>
          <GridItem bg={Color.bgColor} area={'main'}>
            <Main/>
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