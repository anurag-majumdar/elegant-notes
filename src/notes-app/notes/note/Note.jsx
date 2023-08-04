import {
  Card,
  GridItem,
  CardHeader,
  CardBody,
  Flex,
  Spacer,
  CardFooter,
  Stack,
  Heading,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import useNoteStore from '../../../store/note-store';
import EditNoteModal from './edit-note-modal/EditNoteModal';

const transformNoteDescription = (desc, noteDescLimit) =>
  desc.length <= noteDescLimit ? desc : `${desc.slice(0, noteDescLimit)}...`;

const Note = ({ note }) => {
  const removeNote = useNoteStore((state) => state.removeNote);
  const noteDescription = transformNoteDescription(note.description, 80);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem>
        <Card
          variant='elevated'
          height='18rem'
          borderRadius='5%'
          color={note.color}
          bg={note.bg}
        >
          <CardHeader padding='0.75rem' justifyContent='right'>
            <Flex>
              <Spacer />
              <IconButton
                as={CloseIcon}
                onClick={() => removeNote(note)}
                _hover={{ bg: note.bg }}
                height='1.25rem'
                bg={note.bg}
                color={note.color}
                cursor='pointer'
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Stack mt='3' spacing='3'>
              <Heading size='md'>{note.title}</Heading>
              <Text>{noteDescription}</Text>
            </Stack>
          </CardBody>
          <CardFooter justifyContent='right'>
            <IconButton
              as={EditIcon}
              onClick={onOpen}
              _hover={{ bg: note.bg }}
              height='1.5rem'
              bg={note.bg}
              color={note.color}
              cursor='pointer'
            />
          </CardFooter>
        </Card>
      </GridItem>
      <EditNoteModal isOpen={isOpen} onClose={onClose} note={note} />
    </>
  );
};

export default Note;
