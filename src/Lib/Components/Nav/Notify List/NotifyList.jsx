import { Avatar, Box, Flex, Image, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { Color } from '../../../Model/Content/Color';
import { Param } from '../../../Model/Content/Param';
import { BsThreeDotsVertical } from "react-icons/bs";

const NotifyList = () => {
    return (
        <MenuItem
            name='notifys'
            bg={Color.hoverColor}
            textColor={Color.textColor}
            _hover={{bg:Color.hoverColorTag}}
            pl={0}
            pr={10}
            p={4}
            mt={2}
        >
            <Box
                name='daha-sonra-izle'
                w={"417px"}
                fontFamily={Param.fontFamily}
                _hover={{bg:Color.hoverColorTag}}
                gap={5}
            >
                <Flex direction="row"  alignItems="center" h={{ base: "10vh", md: "100%" }}>
                    <Box name="avatar-box" w={"15%"} mr={2}>
                        <Avatar name='tube-image' src='https://yt3.ggpht.com/ytc/AIdro_nDQJSuUqvMSrcyYnm7hXmNwQKlWH6xju_7MlqhUid1XBQ=s88-c-k-c0x00ffffff-no-rj'/>
                    </Box>
                    <Box name="notify-content" w={"50%"} gap={2} p={0}>
                        <Box
                            name="notify-text"
                            fontSize={14}
                            maxWidth={"100%"}
                            whiteSpace="normal"
                            overflowWrap="break-word"
                        >
                            <p>Test Kanalı, az önce Böyle İş Mi Olur adlı videoyu yayınladı.</p>
                        </Box>
                        <Box
                            name="notify-date"
                            fontSize={"12px"}
                            color={"#AAAAAA"}
                        >
                            2 saat önce
                        </Box>
                    </Box>
                    <Box name="tube-image-box" w={"27%"} pl={{ base: "2px", md: "5px" }}>
                        <Image
                            name='tube-image'
                            w={"86px"}
                            h={"64px"}
                            src='https://i.ytimg.com/vi/CW5ILppTAuY/hqdefault.jpg'
                        />
                    </Box>
                    <Box name="options-box" w={"3%"} pl={{ base: "2px", md: "4px" }} alignItems={"flex-start"}>
                        <BsThreeDotsVertical />
                    </Box>
                </Flex>
            </Box>
        </MenuItem>
    );
}

export default NotifyList;
