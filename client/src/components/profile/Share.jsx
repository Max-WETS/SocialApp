import {
  VStack,
  Box,
  HStack,
  Avatar,
  Input,
  Button,
  Center,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillPicture } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

function Share() {
  return (
    <Flex
      w="500px"
      paddingTop="10px"
      borderRadius="10%"
      margin="auto"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <HStack
          paddingBottom="10px"
          spacing="15px"
          borderBottom="1px solid lightgray"
        >
          <Avatar
            size="md"
            name="Maxime Wets"
            src="person/Max.jpg"
            cursor="pointer"
          />
          <Input
            h="35px"
            w="360px"
            borderRadius="10px"
            bg="gray.100"
            type="mood"
            placeholder="What's on your mind?"
          />
        </HStack>
        <HStack paddingBottom="5px">
          <Button w="220px" bg="white">
            <Box w="30px" mr="4px">
              <AiFillPicture size="sm" color="red" />
            </Box>
            <Text>Picture</Text>
          </Button>
          <Button w="220px" bg="white">
            <Box w="30px" mr="4px">
              <RiSendPlaneFill size="sm" color="green" />
            </Box>
            <Text>Share</Text>
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Share;
