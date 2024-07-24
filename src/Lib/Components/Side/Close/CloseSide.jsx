import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
import { IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { Text } from '../../../Model/Content/Text';
import { Color } from '../../../Model/Content/Color';

const CloseSide = () => {

    const sideItems = Text.sideItems;

    return (
        <>
            <Box pl={"12px"} pt='2' mb={"3"}>
                <VStack align={"left"} gap={0}>
                  {sideItems.map((item, index) => (
                    <Box h={"74px"} w={"64px"} key={index}>
                        <Button colorScheme='white' fontSize={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center" _hover={{ bg: Color.hoverColor }} w={"100%"} h={"100%"} >
                            {item.icon}
                            <span style={{ fontSize: "10px", fontWeight: "400" }}>{item.title}</span>
                        </Button>
                    </Box>
                    ))}
                </VStack>
            </Box>
        </>
    )
}

export default CloseSide;
