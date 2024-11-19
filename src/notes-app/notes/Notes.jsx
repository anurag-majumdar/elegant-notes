import { Grid } from '@chakra-ui/react';
import useNoteFilters from '../../store/note-filters';
import useNoteStore from '../../store/note-store';
import Note from './note/note';

const useSearchFilter = (notes, search) =>
	notes.filter((note) =>
		note.title.toLowerCase().includes(search.toLowerCase()),
	);

const Notes = () => {
	const notes = useNoteStore((state) => state.notes);
	const searchNote = useNoteFilters((state) => state.searchNote);
	const filteredNotes = useSearchFilter(notes, searchNote);

	return (
		<>
			<Grid gridTemplateColumns="repeat(5, 20rem)" gap="2rem" padding="0 2rem">
				{filteredNotes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</Grid>
		</>
	);
};

export default Notes;
