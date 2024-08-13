import { Avatar, Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import image from "../../../../Images/Furkan Emirce.jpg"
import { IoMdCheckmarkCircle, IoMdMore } from 'react-icons/io'
import { Color } from '../../../Model/Content/Color'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import "./CardTemplate.css"
import { Text as CustomText } from '../../../Model/Content/Text';
import VideoMenu from './Video Options Menu/VideoMenu'


const CardTemplate = () => {

  const menuItems = CustomText.menuItems;

  return (
    <Box>
      <Card bg={"#0f0f0f"}>
        <CardBody cursor={"pointer"}>
          <Image src={image} p={0} borderRadius={"15px"} />
          <div className='container' w={"100%"}>
          <div className='card'>
          <Button position={"absolute"} borderRadius={"15px"} w={"90%"} h={"85%"} fontSize={"xxx-large"} colorScheme={Color.textColor} top="50%" left="50%" transform="translate(-50%, -50%)"  bgColor={Color.hoverStartIconBg} >
            <TbPlayerPlayFilled />
          </Button>
          </div>
          </div>
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
         <Menu>
            <MenuButton as={Button} colorScheme='white' fontSize={"xl"} borderRadius={"50%"} w={"40px"} p={0} _hover={{bg: Color.hoverColor}}>
              <Button colorScheme='white' fontSize={"xl"} borderRadius={"50%"} w={"40px"} p={0} _hover={{bg: Color.hoverColor}}>
                <IoMdMore />
              </Button>
            </MenuButton>
            <MenuList bg={Color.hoverColor} pt={15} pb={15} border={0}>
               {
                menuItems.map((item,index)=>(
                  <VideoMenu menuItem={item} key={index} />
                ))

               }
            </MenuList>
         </Menu>

        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default CardTemplate
