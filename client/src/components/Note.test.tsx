import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Note from './Note'; // Adjust the import path as needed
import { INote } from '../notes/types/note';

describe('Note component', () => {
    const mockNoteOne: INote = {
        id: 1,
        note: 'Test Note 1',
        user: 'Test User 1',
        createdAt: new Date('2023-09-06T12:34:56.789Z'),
    };

    const mockNoteTwo: INote = {
        id: 1,
        note: 'Test Note 2',
        user: 'Test User 2',
        createdAt: new Date('2023-01-01T12:34:56.789Z'),
    };

    it('Renders a single note', () => {
        render(<Note {...mockNoteOne} />);

        // Confirm that our mock note is displayed with the correct information
        expect(screen.getByText('Test Note 1')).toBeInTheDocument();
        expect(screen.getByText('Test User 1 · 6th Sep 2023')).toBeInTheDocument();
    });

    it('Renders multiple notes', () => {
        render(<Note {...mockNoteOne} />);
        render(<Note {...mockNoteTwo} />);

        // Confirm that our mock notes are displayed with the correct information
        expect(screen.getByText('Test Note 1')).toBeInTheDocument();
        expect(screen.getByText('Test User 1 · 6th Sep 2023')).toBeInTheDocument();

        expect(screen.getByText('Test Note 2')).toBeInTheDocument();
        expect(screen.getByText('Test User 2 · 1st Jan 2023')).toBeInTheDocument();
    });
});