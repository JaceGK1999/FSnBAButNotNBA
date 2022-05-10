import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';
// import Main from '../views/Main';
// import CharacterCard from './Characters';

describe('test to see if headers render', () => {
  it('should navigate to Rick Sanchez', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    //when the page loads ,there should be a loading state.
    //after page loads there will be a list of characters
    //you should be able to click a name and it will render a character img and some details about the character
    const loading = screen.getByText('Loading Pickle Ricks');
    expect(loading).toBeInTheDocument();

    const Character = await screen.findByText('Name: Artist Morty (Alive)');
    expect(Character).toBeInTheDocument();

    //   render(<CharacterCard />);
    // const details = await screen.findByText('Specifics: Male Human');
    // expect(details).toBeInTheDocument();
    // screen.debug();

    //   const test = await screen.findByRole('h1');
    //   expect(test).toBeInTheDocument();
  });
});

describe('second test', () => {
  it('should navigate to Morty Smith', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <App />
      </MemoryRouter>
    );

    //when the page loads ,there should be a loading state.
    //after page loads there will be a list of characters
    //you should be able to click a name and it will render a character img and some details about the character

    const loading = screen.getByText('Loading Pickle Ricks');
    expect(loading).toBeInTheDocument();

    const step1 = await screen.findByText('Name: Morty Smith (Alive)');
    expect(step1).toBeInTheDocument();

    userEvent.click(step1);

    // const loading2 = await screen.findByText('Loading Pickle Ricks');
    // expect(loading2).toBeInTheDocument();

    const step3 = await screen.findByAltText('Morty Smith');
    expect(step3).toBeInTheDocument();
    //step 1 find rick sanchez
    screen.debug();
    // step 2 click rick sanchez
    // step 3find Specifics: male human
    //step 4 confirm
  });
});
