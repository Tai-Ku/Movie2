const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "57e2cd1c9b2448612fc38560e713a70d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
