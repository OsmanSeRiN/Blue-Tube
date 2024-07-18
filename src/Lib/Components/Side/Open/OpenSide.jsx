import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
import { Text } from '../../../Model/Content/Text';
import { Color } from '../../../Model/Content/Color';

const OpenSide = () => {
    const sideItems = Text.sideItems;
    return (
        <>
            <Box pl={"16px"} pt='2' mb={"3"}>
                <VStack align={"left"} gap={1}>
                    {sideItems.map((item, index) => (
                        <Box h={"40px"} key={index}>
                            <Button colorScheme='White' justifyContent={"flex-start"} gap={5} textAlign={"left"} fontSize={25} _hover={{ bg: Color.hoverColor }} w={"100%"}>
                                {item.icon}
                                <span style={{ fontSize: "15px", fontWeight: "400" }}>{item.title}</span>
                            </Button>
                        </Box>
                    ))}
                    <hr color={Color.detailColor} style={{ height: "0.1px", marginTop: "15px" }} />
                </VStack>
            </Box>
        </>
    )
}

export default OpenSide
