import { render, screen } from '@testing-library/react';
import CharacterCard from './Characters';

describe(
  'test to see if headers render',
  () =>
    it('header 1 renders', () => {
      render(<CharacterCard />);
      screen.findByLabelText('headerSize1');
      screen.debug();

      const test = screen.getAllByRole('h1');
      expect(test).toBeInTheDocument();
    }),
  it('header 3 renders', () => {
    render(<CharacterCard />);
    screen.findAllByLabelText('headerSize3');

    const test2 = screen.getAllByRole('h3');

    expect(test2).toBeInTheDocument();
  })
);
