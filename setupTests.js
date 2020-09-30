/* eslint-env jest */
// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

// Setup enzyme
configure({ adapter: new Adapter() })

// Setup snapshotSerializers
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
