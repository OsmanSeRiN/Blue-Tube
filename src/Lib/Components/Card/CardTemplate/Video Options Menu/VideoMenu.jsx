import { Box, MenuItem, Stack } from '@chakra-ui/react'
import React from 'react'
import { Color } from '../../../../Model/Content/Color'
import { Param } from '../../../../Model/Content/Param';

const VideoMenu = ({ menuItem }) => {
    return (
      <MenuItem name='daha-sonra-izle' bg={Color.hoverColor} textColor={Color.textColor} _hover={{bg:Color.hoverColorTag}} pl={25} pr={35}>
        <Stack direction={'row'} align={"center"} gap={4}>
          <Box fontSize={25}>
            {menuItem.icon}
          </Box>
          <span style={{fontSize:"14px", fontWeight:Param.videoMenuFontWeight}}>
            {menuItem.title}
          </span>
        </Stack>
      </MenuItem>
    );
  }


export default VideoMenu