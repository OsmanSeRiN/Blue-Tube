import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import CardTemplate from './CardTemplate/CardTemplate'

const Card = () => {
  return (
    <SimpleGrid
      spacing={3}
      templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
      px={5}
    >
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
      <CardTemplate/>
    </SimpleGrid>
  )
}

export default Card
