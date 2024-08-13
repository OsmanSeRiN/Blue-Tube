import { HStack, Tag } from '@chakra-ui/react'
import React from 'react'
import { Color } from '../../Model/Content/Color'
import { Param } from '../../Model/Content/Param'

const Tags = () => {
  return (
    <HStack>

       <Tag fontSize={Param.tagFontSize} fontWeight={Param.tagFontWeight} color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag fontSize={Param.tagFontSize} fontWeight={Param.tagFontWeight} color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag fontSize={Param.tagFontSize} fontWeight={Param.tagFontWeight} color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag fontSize={Param.tagFontSize} fontWeight={Param.tagFontWeight} color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag fontSize={Param.tagFontSize} fontWeight={Param.tagFontWeight} color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>

    </HStack>
  )
}

export default Tags