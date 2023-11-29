import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotesModal from './NotesModal';

describe('NotesModal component', () => {
    const onCloseMock = jest.fn();

    it('Displays error message when note is not provided', async () => {
        render(<NotesModal isOpen={true} onClose={onCloseMock} />);

        // Click the submit button without providing a note
        fireEvent.click(screen.getByRole('button', { name: /add/i }));

        // Wait for the error message to appear
        await waitFor(() => {
            expect(screen.getByText('Note is required')).toBeInTheDocument();
        });

        // Verify that the onConfirm function is not called
        expect(onCloseMock).not.toHaveBeenCalled();
    });

    it('Displays error message when note is more than 500 characters', async () => {
        render(<NotesModal isOpen={true} onClose={onCloseMock} />);

        // Click the submit button without providing a note
        fireEvent.click(screen.getByRole('button', { name: /add/i }));

        // Wait for the error message to appear
        await waitFor(() => {
            expect(screen.getByText('Note is required')).toBeInTheDocument();
        });

        // Verify that the onConfirm function is not called
        expect(onCloseMock).not.toHaveBeenCalled();
    });
});