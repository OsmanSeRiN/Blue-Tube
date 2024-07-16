import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Input, InputGroup, InputRightAddon, InputRightElement, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { openSide } from '../../Model/Redux/Reducer/Data';

const Nav = () => {

  const dispatch = useDispatch()
  const sideParam = useSelector((state)=>state.data.appStatus);

  const openSideFunction = () => {
    dispatch(openSide(!sideParam.onSide))
  }

  return (
    <Wrap pl={"1%"} spacing={"22%"} pt='3'>
      <WrapItem>
       <Box>
       <Button colorScheme='white' fontSize={"25px"} _hover={{ bg: "#272727" }} variant={"solid"} borderRadius={"50%"} w={"3vh"} onClick={()=>{openSideFunction()}}>
          <HamburgerIcon />
        </Button>
       </Box>

        <Box>
        <Button colorScheme='blue' variant={"outline"} borderWidth={0} fontSize={"25px"} gap={1} _hover={{ backgroundColor: "inherit", color: "inherit", boxShadow: "none" }}>
          <IoLogoYoutube />
          <span style={{ color: "white", fontSize: "20px" }}>Bluetube</span>
        </Button>
        </Box>
      </WrapItem>
      <WrapItem>
        <InputGroup w={"40vw"} maxW={"600px"}>
          <InputRightElement color={"white"} bg={"#272727"} borderWidth={1} borderRightRadius={"20"} borderColor={"#303030"}>
            <SearchIcon></SearchIcon>
          </InputRightElement>
          <Input type='search' borderRadius={20} borderColor={"#303030"} _hover={{borderColor:"#303030"}} placeholder='Ara' color={"white"}></Input>
        </InputGroup>
      </WrapItem>
    </Wrap>
  )

}

export default Nav