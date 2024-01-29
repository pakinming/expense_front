import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IModal extends ModalProps {
  children: ReactNode;
  bgCloseIcon?: string;
  colorCloseIcon?: string;
  borderRadius?: string;
  onClickSave?: () => void;
}

const BaseModal = ({
  children,
  bgCloseIcon,
  colorCloseIcon,
  borderRadius = "16px",
  onClickSave,

  ...props
}: IModal) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay backgroundColor="primary" opacity="0.6!important" />
      <ModalContent
        maxW={{ sm: "calc(100% - 48px)", md: "563px" }}
        margin={15}
        borderRadius={borderRadius}
        maxHeight="90%"
        
      >
        <ModalBody padding={0} borderRadius="1rem" overflow="auto">
          {children}
        </ModalBody>
        <ModalFooter
          padding="24px"
          justifyContent="center"
          flexDirection="column"
          gap="24px"
        >
          <Flex gap="16px">
            <Button onClick={onClickSave} bg={'lightcoral'} color={'white'}>CONFIRM</Button>
            <Button onClick={props.onClose} autoFocus>CANCEL</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
