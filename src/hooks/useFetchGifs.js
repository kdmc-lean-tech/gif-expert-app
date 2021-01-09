import { useEffect, useState } from 'react';
import { fetchGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ loading: true, results: [] });

  useEffect(() => {
    fetchGifs(category)
      .then(gifs => setState({
        loading: false,
        results: gifs
      }));
  }, [category]);

  return {...state};
}
