import { HStack, Tag } from '@chakra-ui/react'
import React from 'react'
import { Color } from '../../Model/Content/Color'

const Tags = () => {
  return (
    <HStack>
       <Tag color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
       <Tag color={Color.textColor} bgColor={Color.hoverColor} h={"40px"} _hover={{bgColor:Color.hoverColorTag}} cursor={"pointer"} >Deneme</Tag>
    </HStack>
  )
}

export default Tags