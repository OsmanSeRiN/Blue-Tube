import React from 'react'
import Card from '../Card/Card'
import { Box, VStack } from '@chakra-ui/react'
import Tags from '../Tag/Tags'


const Main = () => {
  return (
    <VStack  spacing={2}
    align='stretch'>
       <Box h={"5vh"} pl={"25px"} pt={2} mb={2}>
        <Tags/>
      </Box>
      <Box>
       <Card/>
      </Box>
    </VStack>
  )
}

export default Main