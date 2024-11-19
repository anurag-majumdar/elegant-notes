import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
// import useNoteStore from '../../store/note-store';
import useNoteFilters from '../../store/note-filters';

const NoteSearch = () => {
	const searchNote = useNoteFilters((state) => state.searchNote);
	const setSearchNote = useNoteFilters((state) => state.setSearchNote);

	return (
		<>
			<Box padding="2rem">
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<Search2Icon color="purple.300" />
					</InputLeftElement>
					<Input
						value={searchNote}
						onChange={(e) => setSearchNote(e.target.value)}
						type="search"
						placeholder="Search Note"
					/>
				</InputGroup>
			</Box>
		</>
	);
};

export default NoteSearch;
