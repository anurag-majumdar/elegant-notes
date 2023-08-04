import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useNoteStore from '../../../../store/note-store';

const bgColors = [
  'green.500',
  'blue.500',
  'cyan.500',
  'purple.500',
  'orange.500',
  'red.500',
];

const EditNoteModal = ({ isOpen, onClose, note }) => {
  const [bg, setBg] = useState('');
  const { register, handleSubmit } = useForm({
    defaultValues: note,
  });

  const updateNote = useNoteStore((state) => state.updateNote);

  const editNote = (noteDetails) => {
    updateNote({
      ...note,
      ...noteDetails,
      bg: bg || note.bg,
    });
    onClose();
  };

  const handleColorClick = (color) => {
    setBg(color);
  };

  return (
    <>
      <Modal colorScheme='purple' size='lg' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl margin='0 0 1.5rem 0' isRequired>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Note Title' {...register('title')} />
            </FormControl>

            <FormControl margin='0 0 1.5rem 0' isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                size='lg'
                placeholder='Note Description'
                {...register('description')}
              />
            </FormControl>

            <FormControl margin='0 0 1.5rem 0'>
              <FormLabel>Note Color</FormLabel>
              {bgColors.map((color) => (
                <Button
                  margin='0 0.25rem'
                  key={color}
                  onClick={() => handleColorClick(color)}
                  bg={color}
                  size='sm'
                  borderRadius='100%'
                />
              ))}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='purple'
              marginRight='1rem'
              onClick={handleSubmit(editNote)}
            >
              Submit
            </Button>
            <Button colorScheme='purple' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditNoteModal;
