import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import BaseModal from "./Modal";

interface IPopup {
  title: string;
  desc: string;
  isOpen: boolean;
  onClose: () => void;
  isConfirm?: boolean;
  onSave: () => void;
}

const Popup = ({ isOpen, onClose, title , desc, onSave}: IPopup) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onClickSave={onSave}>
      <Box p="24px" bgColor={"white"}>
        <Flex direction="column" justifyContent="center">
          <Text textAlign="center" color="secondary" mb="8px" fontSize={30} fontWeight={600}>
            {title}             
          </Text>
          <Text textAlign="center" color="secondary" mb="8px" fontSize={20} fontWeight={600}>
            {desc}             
          </Text>
        </Flex>
      </Box>
    </BaseModal>
  );
};

export default Popup;
