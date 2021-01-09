
export const fetchGifs = async ( category ) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=5xwG83MG6Zy8pcijwi1B4lln8x7vzq5I&q=${ encodeURI(category) }&limit=20`;
  const reponse = await fetch(url);
  const { data } = await reponse.json();
  const gifsResult = data.map(data => {
    return {
      id: data.id,
      title: data.title,
      url: data.images?.downsized_medium.url
    }
  });
  return gifsResult;
}
