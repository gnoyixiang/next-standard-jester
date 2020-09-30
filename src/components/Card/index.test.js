/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Card from '.'

describe('Card', () => {
  test('renders inactive without crashing', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapshot()
  })
})
