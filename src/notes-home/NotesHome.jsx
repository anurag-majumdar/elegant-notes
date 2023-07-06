import { Grid, GridItem, Heading } from '@chakra-ui/react'
import NoteSearch from './note-search/NoteSearch';
import NoteSidebar from './note-sidebar/NoteSidebar';
import Notes from './notes/Notes';

const NotesHome = () => {
    return (
        <>
            <Grid width='100%' height='100%' templateColumns='1fr 11fr' gap={0}>
                <GridItem height='100%' bg='purple.500'>
                    <NoteSidebar />
                </GridItem>

                <GridItem width='100%' height='100%'>
                    <NoteSearch />
                    <Heading padding='0 0 2rem 2rem' size='2xl'> Notes </Heading>
                    <Notes />
                </GridItem>
            </Grid>
        </>

    );
};

export default NotesHome;