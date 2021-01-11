import { fetchGifs } from '../../helpers/getGifs';

describe('GetGifs Test', () => {
  test('should return length of 10', async() => {
    const category = 'pokemon';
    const results = await fetchGifs(category);
    expect(results.length).toEqual(20);
  });
});
