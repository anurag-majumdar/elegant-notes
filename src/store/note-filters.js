import { create } from 'zustand';

const useNoteFilters = create((set) => ({
	searchNote: '',
	setSearchNote: (searchTerm) =>
		set((state) => ({ ...state, searchNote: searchTerm })),
}));

export default useNoteFilters;
