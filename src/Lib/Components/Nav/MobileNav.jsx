import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Center, Flex, Input, InputGroup, InputRightAddon, Menu, MenuButton, MenuList, Spacer, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { openSide } from '../../Model/Redux/Reducer/Data';
import { Color } from '../../Model/Content/Color';
import { BiVideoPlus } from "react-icons/bi";
import NotifyList from './Notify List/NotifyList';
import { IoSettingsOutline } from 'react-icons/io5';
import { Param } from '../../Model/Content/Param';



const MobileNav = () => {
  const dispatch = useDispatch();
  const sideParam = useSelector((state) => state.data.appStatus);

  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = (Value) => {
    setOpenSearch(Value);
  };

  const openSideFunction = () => {
    dispatch(openSide(!sideParam.onSide));
  };

  return (
    <Wrap spacing={"10px"} pt={3} pb={1} pl={"5px"} pr={"10px"} alignItems={"center"} justifyContent={"space-between"}>
      <WrapItem >
        <Box>
          <Button
            colorScheme='white'
            fontSize={"25px"}
            _hover={{ bg: "#272727" }}
            variant={"solid"}
            borderRadius={"50%"}
            ml={"10px"}
            w={"40px"}
            onClick={openSideFunction}
          >
            <HamburgerIcon />
          </Button>
        </Box>

        <Box ml={0} display={openSearch ? 'none' : 'flex'}>
          <Button
            colorScheme='blue'
            variant={"outline"}
            borderWidth={0}
            fontSize={"20px"}
            gap={1}
            _hover={{ backgroundColor: "inherit", color: "inherit", boxShadow: "none" }}
          >
            <IoLogoYoutube />
            <span style={{ color: "white", fontSize: "15px" }}>Bluetube</span>
          </Button>
        </Box>
      </WrapItem>

      <WrapItem flex="1" justifyContent={"center"} display={openSearch ? 'flex' : 'none'}>
        <InputGroup w={"70vw"} maxW={"600px"}>
          <Input
            type='search'
            borderRadius={20}
            borderColor={"#303030"}
            placeholder='Ara'
            color={"white"}
          />
          <InputRightAddon
            color={"white"}
            bg={"#272727"}
            borderWidth={1}
            borderRightRadius={"20"}
            borderColor={"#303030"}
            onClick={() => handleOpenSearch(false)}
          >
            <CloseIcon />
          </InputRightAddon>
        </InputGroup>
      </WrapItem>

      <WrapItem flex="1" justifyContent={"flex-end"} gap={2} pr={4} display={openSearch ? 'none' : 'flex'}>
        <Button name='open-search' borderRadius={50} bg={Color.bgColor} w={"40px"} h={"40px"} fontSize={20} p={"20px"} _hover={{ bg: Color.hoverColor }} onClick={() => handleOpenSearch(true)}>
          <SearchIcon color={"white"} />
        </Button>
        <Button name='add-video' borderRadius={50} bg={Color.bgColor} w={"40px"} h={"40px"} fontSize={25} p={0} _hover={{ bg: Color.hoverColor }}>
          <BiVideoPlus fonts color='white' />
        </Button>
        <Button name='notify' borderRadius={50} bg={Color.bgColor} w={"40px"} h={"40px"} fontSize={25} p={0} _hover={{ bg: Color.hoverColor }}>
          <Box>
            <Menu>
              <MenuButton
                name='notify'
                borderRadius="50%"
                bg={Color.bgColor}
                w="40px"
                h="40px"
                fontSize={25}
                p={0}
                _hover={{ bg: Color.hoverColor }}
              >
                <Center>
                  <MdOutlineNotifications color='white' />
                </Center>
              </MenuButton>

              <MenuList
                bg={Color.hoverColor}
                pt={2}
                pb={2}
                pl={0}
                m={0}
                borderRadius="md"
                border={0}
                maxH="580px"
                overflow="hidden"
                w={{ base: "350px", md: "480px" }} // Ekran genişliği 500px den küçükse 300px genişlik
                boxShadow="md"
              >
                <Flex
                  height={"50px"}
                  color={Color.textColor}
                  fontFamily={Param.fontFamily}
                  p={0}
                  pl={4}
                  pr={4}
                  borderBottom="1px solid white"
                  position="sticky"
                  top={0}
                  left={0}
                  right={0}
                  zIndex={10}
                  bg={Color.hoverColor}
                  boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
                >
                  <Center fontSize={"large"}>
                    <h2>Bildirimler</h2>
                  </Center>
                  <Spacer />
                  <Button
                    borderRadius="50%"
                    w="40px"
                    h="40px"
                    p={0}
                    fontSize={25}
                    color={Color.textColor}
                    bg={Color.hoverColor}
                    _hover={{ bg: Color.hoverColorTag }}
                  >
                    <IoSettingsOutline />
                  </Button>
                </Flex>

                <Box
                  maxH="530px"
                  overflowY="auto"
                  pr={2}  // İçerik kaydırıldığında iç kaydırma çubuğu için sağda boşluk bırakır
                >
                  <NotifyList />
                  <NotifyList />
                  <NotifyList />
                  <NotifyList />
                  <NotifyList />
                  <NotifyList />
                  <NotifyList />
                  <NotifyList />
                </Box>
              </MenuList>

            </Menu>



          </Box>

        </Button>
        <Avatar src='https://bit.ly/broken-link' w={"40px"} h={"40px"} />
      </WrapItem>
    </Wrap>
  );
};

export default MobileNav;
