import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory Test', () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategory={ setCategory }/>);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={ setCategory }/>);
  });
  test('should render AddCategory component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should set input text in ""', () => {
    const value = wrapper.find('#input-text').prop('value');
    expect(value).toEqual('');
  });
  test('should change the input text', () => {
    const input = wrapper.find('#input-text');
    const newValue = 'test';
    input.simulate('change',
    { 
      target: {
        value: newValue
      }
    });
    const value = wrapper.find('#input-text').prop('value');
    expect(value).toEqual('test');
  });
  test('should not call setCategories function', () => {
    wrapper.find('#form').simulate('submit', { preventDefault: () => {} });
    expect(setCategory).not.toHaveBeenCalled();
  });
  test('should call the setCategory function and clear the input text', () => {
    const input = wrapper.find('#input-text');
    const newValue = 'test';
    input.simulate('change',
    { 
      target: {
        value: newValue
      }
    });
    wrapper.find('#form').simulate('submit', { preventDefault: () => {} });
    expect(setCategory).toHaveBeenCalled();
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    const value = wrapper.find('#input-text').prop('value');
    expect(value).toEqual('');
  });
});
