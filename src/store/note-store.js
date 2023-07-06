import { create } from "zustand";
import { v4 as uuid4 } from 'uuid';

const desc = 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.';

const initialNotes = [
    { id: uuid4(), title: 'Fullstack engineering is the way to become CTO', description: desc, favourite: true, bg: 'cyan.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Frontend engineering is cool', description: desc, favourite: true, bg: 'green.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Backend engineering is fun', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Fullstack engineering is the way to become CTO', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Frontend engineering is cool', description: desc, favourite: true, bg: 'cyan.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Backend engineering is fun', description: desc, favourite: true, bg: 'orange.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Fullstack engineering is the way to become CTO', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Frontend engineering is cool', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Backend engineering is fun', description: desc, favourite: true, bg: 'teal.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Fullstack engineering is the way to become CTO', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Frontend engineering is cool', description: desc, favourite: true, bg: 'blue.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Backend engineering is fun', description: desc, favourite: true, bg: 'pink.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Fullstack engineering is the way to become CTO', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Frontend engineering is cool', description: desc, favourite: true, bg: 'pink.500', color: 'whiteAlpha.900' },
    { id: uuid4(), title: 'Backend engineering is fun', description: desc, favourite: true, bg: 'purple.500', color: 'whiteAlpha.900' }
];

const useNoteStore = create(set => ({
    notes: initialNotes,
    createNote: (note) => set(state => ({ notes: [...state.notes, note] })),
    updateNote: (note) => set(state => ({ notes: state.notes.map(n => n.id === note.id ? note : n) })),
    removeNote: (note) => set(state => ({ notes: state.notes.filter(n => n.id !== note.id) })),
}));

export default useNoteStore;
