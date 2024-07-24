import React from 'react'
import Card from '../Card/Card'
import { Box } from '@chakra-ui/react'
import Tags from '../Tag/Tags'


const Main = () => {
  return (
    <>
      <Box h={"5vh"} pl={"20px"}>
        <Tags/>
      </Box>
      <Card/>
    </>
  )
}

export default Main