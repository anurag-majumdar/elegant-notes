import { Grid, Center, Box, GridItem, IconButton, useDisclosure } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import AddNoteModal from './add-note-modal/AddNoteModal';

const NoteSidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Grid gridTemplateRows='2fr 8fr' justifyContent='center' borderRight='1px' height='100vh' borderRightColor='purple.500' margin='0 auto'>
                <GridItem>
                    <Box paddingTop='1.5rem' fontSize='2rem' color='whiteAlpha.900'>
                        ElNote
                    </Box>
                </GridItem>
                <GridItem>
                    <Center>
                        <IconButton onClick={onOpen} as={PlusSquareIcon} width='10px' color='purple.500' cursor='pointer' />
                    </Center>
                </GridItem>
                <AddNoteModal isOpen={isOpen} onClose={onClose} />
            </Grid>
        </>
    );
};

export default NoteSidebar;
