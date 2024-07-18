import { Avatar, Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import image from "../../../../Images/Furkan Emirce.jpg"
import { IoMdCheckmarkCircle, IoMdMore } from 'react-icons/io'
import { Color } from '../../../Model/Content/Color'

const CardTemplate = () => {
  return (
    <Box>
      <Card bg={"#0f0f0f"}>
        <CardBody>
          <Image src={image} p={0} borderRadius={"15px"} />
        </CardBody>
      </Card>
      <Wrap spacing={0} pt={3} pl={3}>
        <WrapItem>
          <Avatar size={"sm"} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </WrapItem>
        <WrapItem pl={2} flex={1}>
          <Grid>
            <GridItem>
              <Heading fontSize={"large"} fontWeight={500} color={"white"}>Ölme Usta</Heading>
            </GridItem>
            <GridItem>
              <Text fontSize={"small"} fontWeight={400} color={"gray"}>
                <Wrap>
                  <WrapItem>
                    Furkan Emirce
                  </WrapItem>
                  <WrapItem pt={1}>
                    <IoMdCheckmarkCircle />
                  </WrapItem>
                </Wrap>
              </Text>
            </GridItem>
            <GridItem>
              <Text fontSize={"small"} fontWeight={500} color={"gray"}>10m Görüntüleme . 2 yıl önce</Text>
            </GridItem>
          </Grid>
        </WrapItem>
        <WrapItem display={"flex"} justify={"end"}>
          <Button colorScheme='white' fontSize={"xl"} borderRadius={"50%"} w={"40px"} p={0} _hover={{bg: Color.hoverColor}}>
            <IoMdMore />
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default CardTemplate
