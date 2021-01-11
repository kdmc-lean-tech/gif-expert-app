import { shallow } from 'enzyme';
import GifItem from '../../components/GifItem';

describe('GifItem Component Test', () => {
  const urlGif = 'https://media4.giphy.com/media/1Ot4mnOOXJawg/giphy.gif?cid=a91e1fa0y7j2gknh42f60yu2uhlalpxf4ckzn1vodn7axxdi&rid=giphy.gif';
  test('should render GifItem component', () => {
    const gif = { title: 'Kevin', url: urlGif };
    const wrapper = shallow(<GifItem gif={ gif } />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render property title', () => {
    const gif = { title: 'Kevin', url: urlGif };
    const wrapper = shallow(<GifItem gif={ gif } />);
    const textCardValue = wrapper.find('#card-title').text();
    expect(textCardValue).toEqual('Kevin');
  });
  test('should render property url', () => {
    const gif = { title: 'Kevin', url: urlGif };
    const wrapper = shallow(<GifItem gif={ gif } />);
    const urlCardImage = wrapper.find('#card-image').prop('src');
    expect(urlCardImage).toEqual(urlGif);
  });
});
