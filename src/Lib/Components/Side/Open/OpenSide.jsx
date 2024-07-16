import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
import { IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";

const OpenSide = () => {
    return (
        <>
            <Box pl={"5%"} pt='2' mb={"3"}>
                <VStack align={"left"} gap={1} >
                    <Box h={"40px"}>
                        <Button colorScheme='White' justifyContent={"flex-start"} gap={5} textAlign={"left"} fontSize={25} _hover={{ bg: "#272727" }} w={"100%"} >
                            <IoMdHome />
                            <span style={{ fontSize: "15px", fontWeight: "400" }}>Ana Sayfa</span>
                        </Button>
                    </Box>
                    <Box h={"40px"}>
                        <Button colorScheme='White' justifyContent={"flex-start"} gap={5} textAlign={"left"} fontSize={25} _hover={{ bg: "#272727" }} w={"100%"} >
                            <SiYoutubeshorts />
                            <span style={{ fontSize: "15px", fontWeight: "400" }}>Shorts</span>
                        </Button>
                    </Box>
                    <Box h={"40px"}>
                        <Button colorScheme='White' justifyContent={"flex-start"} gap={5} textAlign={"left"} fontSize={25} _hover={{ bg: "#272727" }} w={"100%"} >
                            <PiVideo />
                            <span style={{ fontSize: "14px", fontWeight: "400" }}>Abonelikler</span>
                        </Button>
                    </Box>
                    <Box h={"40px"}>
                        <Button colorScheme='White' justifyContent={"flex-start"} gap={5} textAlign={"left"} fontSize={25} _hover={{ bg: "#272727" }} w={"100%"} >
                            <GiBackwardTime />
                            <span style={{ fontSize: "15px", fontWeight: "400" }}>Geçmiş</span>
                        </Button>
                    </Box>
                </VStack>
                <hr color='#0f0f0f' style={{ height: "0.1px",marginTop:"15px" }}/>
            </Box>
        </>
    )
}

export default OpenSide