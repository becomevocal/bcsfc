import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import { ProductForm } from './index'

configure({ adapter: new Adapter() })

const defaultProps = {
  product: {},
  action: 'http://test.com/json',
  method: 'POST',
  classes: 'hello',
  styles: {},
  children: [],
  onChange: () => {},
  onSubmit: (): boolean => true,
}

const render = (props = {}): any => {
  const wrapper = shallow(<ProductForm {...defaultProps} {...props} />)

  return {
    instance: wrapper.instance(),
    form: wrapper.find('form'),
    wrapper,
  }
}

describe('ProductForm', () => {
  it('renders', () => {
    const { form } = render()
    expect(form).toMatchSnapshot()
  })

  it('passes props to children', () => {
    const children = <div>hello</div>
    const { wrapper } = render({ children })
    const childNode = wrapper.find('div')
    const childProps = childNode.props()
    expect(childProps).toMatchSnapshot()
  })
})
