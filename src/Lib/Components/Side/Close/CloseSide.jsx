import React from 'react'
import { Box, Button, VStack } from '@chakra-ui/react'
import { Text } from '../../../Model/Content/Text';
import { Color } from '../../../Model/Content/Color';
import { Param } from '../../../Model/Content/Param';

const CloseSide = () => {

    const sideItems = Text.sideItems;

    return (
        <>
            <Box pl={"12px"} pt='2' mb={"3"} fontFamily={Param.fontFamily}>
                <VStack align={"left"} gap={0}>
                    {sideItems.map((item, index) => (
                        <Box h={"74px"} w={"64px"} key={index} >
                            <Button colorScheme='white' fontSize={25} display="flex" flexDirection="column" alignItems="center" justifyContent="center" _hover={{ bg: Color.hoverColor }} w={"100%"} h={"100%"} >
                                {item.icon}
                                <span style={{
                                    fontSize: Param.sideFontSize,
                                    fontWeight: Param.sideFontWeight,
                                    margin: "5px",
                                    display: "inline-block",
                                    maxWidth: "56px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}>
                                    {item.title}
                                </span>
                            </Button>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </>
    )
}

export default CloseSide;
