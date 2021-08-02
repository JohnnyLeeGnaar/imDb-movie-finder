import axios from "axios";
//k_vllk5bt8 ili k_sgh456ru ili k_ht2lurt5
const API_KEY = "k_vllk5bt8";
/*requestova mogu 100 u danu raditi. 
Zamijeni API_KEY sa k_vllk5bt8 u slučaju da dođem do limita*/


export function searchImdbSeries(query) {
  return axios(
    `https://imdb-api.com/en/API/SearchSeries/${API_KEY}/${query}`
  ).then((series) => series.data.results);
}

export function searchShow(id) {
  return axios(
    `https://imdb-api.com/en/API/Title/${API_KEY}/${id}/FullActor,Ratings`
  ).then((show) => show.data);
}


