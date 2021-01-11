import { shallow } from 'enzyme';
import Category from '../../components/Category';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Category Component Test', () => {
  test('should render category component', () => {

    useFetchGifs.mockReturnValue({
      results: [],
      loading: true
    });

    const category = 'gohan';
    const wrapper = shallow(<Category category={ category } />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should show items when be upload gifs useFecthGifs', () => {
    const results = [
      {
        url: 'https://media0.giphy.com/media/1dMNqVx9Kb12EBjFrc/giphy.gif?cid=a91e1fa02z4huvfdz4isenmiuf5oyayjiodcifdstfjnk4ci&amp;rid=giphy.gif"',
        title: 'Bugs Bonny',
        id: '3'
      }
    ];
    useFetchGifs.mockReturnValue({
      results,
      loading: false
    });
    const category = 'gohan';
    const wrapper = shallow(<Category category={ category } />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifItem').length).toBe(results.length);
  });
});
