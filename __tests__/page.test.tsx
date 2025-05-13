import '@testing-library/jest-dom'
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react'
import Page from '../src/pages/About';
 
describe('Page', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  })
  it('should ', () => {
    expect(1).toBeTruthy()
  })
})