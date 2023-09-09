import {API_Key} from './Constants/Constants' 

export const originals=`discover/tv?api_key=${API_Key}&with_networks=213`;

export const trending =`trending/all/week?api_key=${API_Key}&language=en-US`;

export const comedyMovies= `discover/movie?api_key=${API_Key}&with_genres=35`;

export const horrorMovies= `discover/movie?api_key=${API_Key}&with_genres=27`;

export const ActionMovies= `discover/movie?api_key=${API_Key}&with_genres=28`;

export const RomanceMovies=`discover/movie?api_key=${API_Key}&with_genres=10749`;

export const Documentaries=`discover/movie?api_key=${API_Key}&with_genres=99;
`