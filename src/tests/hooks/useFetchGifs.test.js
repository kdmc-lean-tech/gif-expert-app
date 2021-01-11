import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in useFecthGifs Custom', () => {
  test('should return initial state', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('lindsay lohan'));
    const { results, loading } = result.current;
    await waitForNextUpdate();
    expect(results).toEqual([]);
    expect(loading).toBe(true);
  });
  test('should return a array of gifs and the loading in false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('lindsay lohan'));
    await waitForNextUpdate();
    const { results, loading } = result.current;
    expect(results.length).toBe(20);
    expect(loading).toBe(false);
  });
});
