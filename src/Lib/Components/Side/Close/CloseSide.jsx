import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
import { IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";

const CloseSide = () => {
    return (
        <>
            <Box pl={"2%"} pt='2' mb={"3"}>
                <VStack align={"left"} gap={0}>
                    <Box h={"74px"} w={"64px"}>
                        <Button colorScheme='white' fontSize={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center" _hover={{ bg: "#272727" }} w={"100%"} h={"100%"}>
                            <IoMdHome />
                            <span style={{ fontSize: "10px", fontWeight: "400" }}>Ana Sayfa</span>
                        </Button>
                    </Box>
                    <Box h={"74px"} w={"64px"}>
                        <Button colorScheme='white' fontSize={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center" _hover={{ bg: "#272727" }} w={"100%"} h={"100%"}>
                            <SiYoutubeshorts />
                            <span style={{ fontSize: "10px", fontWeight: "400" }}>Shorts</span>
                        </Button>
                    </Box>
                    <Box h={"74px"} w={"64px"}>
                        <Button colorScheme='white' fontSize={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center" _hover={{ bg: "#272727" }} w={"100%"} h={"100%"}>
                            <PiVideo />
                            <span style={{ fontSize: "10px", fontWeight: "400" }}>Abonelikler</span>
                        </Button>
                    </Box>
                    <Box h={"74px"} w={"64px"}>
                        <Button colorScheme='white' fontSize={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center" _hover={{ bg: "#272727" }} w={"100%"} h={"100%"}>
                            <GiBackwardTime />
                            <span style={{ fontSize: "10px", fontWeight: "400" }}>Geçmiş</span>
                        </Button>
                    </Box>
                </VStack>
                <hr color='#0f0f0f' width="64px" style={{ height: "0.1px", marginTop: "15px" }} />
            </Box>
        </>
    )
}

export default CloseSide;
