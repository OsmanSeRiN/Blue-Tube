import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Center, Flex, Input, InputGroup, InputRightAddon, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { openSide } from '../../Model/Redux/Reducer/Data';
import { Color } from '../../Model/Content/Color';
import { BiVideoPlus } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Text as CustomText } from '../../Model/Content/Text';
import NotifyList from './Notify List/NotifyList';
import { Param } from '../../Model/Content/Param';
import { CiSettings } from "react-icons/ci";
import { IoSettingsOutline } from 'react-icons/io5';


const Nav = () => {

  const dispatch = useDispatch();
  const sideParam = useSelector((state) => state.data.appStatus);
  const navigate = useNavigate();
  const menuItems = CustomText.menuItems;
  const openSideFunction = () => {
    dispatch(openSide(!sideParam.onSide));
  }

  return (
    <Wrap spacing={"10px"} pt={3} pb={1} pl={"14px"} pr={"14px"} alignItems={"center"} justifyContent={"space-between"}>
      <WrapItem>
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

        <Box ml={4}>
          <Button
            colorScheme='blue'
            variant={"outline"}
            borderWidth={0}
            fontSize={"25px"}
            gap={1}
            _hover={{ backgroundColor: "inherit", color: "inherit", boxShadow: "none" }}
          >
            <IoLogoYoutube />
            <span style={{ color: "white", fontSize: "20px" }}>Bluetube</span>
          </Button>
        </Box>
      </WrapItem>

      <WrapItem flex="1" justifyContent={"center"}>
        <InputGroup w={"40vw"} maxW={"600px"}>
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
          >
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
      </WrapItem>

      {/*User Options*/}
      <WrapItem justifyContent={"flex-end"} gap={2} pr={4}>
        <Button name='add-video' borderRadius={50} bg={Color.bgColor} w={"40px"} h={"40px"} fontSize={25} p={0} _hover={{ bg: Color.hoverColor }} onClick={() => { navigate("/New Video") }}>
          <BiVideoPlus fonts color='white' />
        </Button>
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
              overflow="hidden"  // Dıştaki kaydırma çubuğunu kaldırıyoruz
              w="480px"
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
                <Center>
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
        <Box>
          <Avatar src='https://bit.ly/broken-link' w={"40px"} h={"40px"} />
        </Box>
      </WrapItem>
    </Wrap>
  )
}

export default Nav;
