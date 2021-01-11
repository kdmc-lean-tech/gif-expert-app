import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';

describe('GifExpertApp Component Test', () => {
  const wrapper = shallow(<GifExpertApp />);
  test('should render GifExpertApp component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should show catgories list', () => {
    const categories = ['Lindsey Lohan', 'Inuyasha'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Category').length).toBe(categories.length);
  });
});
