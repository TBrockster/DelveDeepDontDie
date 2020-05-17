import React from 'react'
import { render } from '@testing-library/react'
import MapRenderer from '../'

describe('MapRenderer', () => {
  it('Introduces itself', () => {
    const { getByText } = render(<MapRenderer />)
    expect(getByText('Hi', { exact: false }).textContent).toEqual(
      'Hi! This is MapRenderer'
    )
  })
})