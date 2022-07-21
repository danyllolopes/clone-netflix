const BASE_URL = "https://api.themoviedb.org/3";
const token = "7994589bfbdf324a46155fafeea9ddfb";

const basicFetch = async (url) => {
  const request = await fetch(`${BASE_URL}${url}`);
  const json = await request.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        item: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        item: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        item: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        item: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        item: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        item: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        item: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${token}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        item: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${token}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
           info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${token}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${token}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
