import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react'

test('loads and displays greeting', async () => {
  render(<div>Test</div>)

  const el = await screen.findByText('Test');
  expect(el.textContent).toBe('Test');
})
