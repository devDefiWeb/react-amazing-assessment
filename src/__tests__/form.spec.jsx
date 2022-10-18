import renderer from 'react-test-renderer'
import React from 'react'
import { shallow } from 'enzyme'
import { Title, Row, Item, StyledInput, StyledLabel, StyledSelect, StyledTextarea, SubmitButton, StyledSpan } from '../components/form'

describe('<Title />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Title />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<Row />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Row />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<Item />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Item />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<StyledInput />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<StyledInput />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<StyledLabel />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<StyledLabel />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<StyledSelect />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<StyledSelect />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<StyledTextarea />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<StyledTextarea />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<SubmitButton />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<SubmitButton />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<StyledSpan />', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<StyledSpan />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
