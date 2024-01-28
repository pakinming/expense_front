import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BaseModal from "./Modal";

interface IPopup {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({ isOpen, onClose, message }: IPopup) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <Box p="24px" bgColor={"white"}>
        <Flex direction="column" justifyContent="center">
          <Text
            variant="mediumParagraph"
            textAlign="center"
            color="secondary"
            mb="8px"
          >
            {message}
          </Text>
          <Text variant="smaller" textAlign="center">
            {message}
            <br />
            {message}
          </Text>
          <Flex justifyContent="center" alignItems="center">
            {/* <Image src={ImagePath.sendEmail} alt="" objectFit="contain" pt="24px" /> */}
          </Flex>
        </Flex>
      </Box>
    </BaseModal>
  );
};

export default Popup;
