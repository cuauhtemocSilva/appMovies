import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';
import { MovieDetail } from '../interfaces/interfaces';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  pageNumber:number = 0;

  constructor( private http: HttpClient ) { }


  getMovieList() {
    this.pageNumber++;
    return this.http.get<RespuestaMDB>(`${ URL }/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2021-09-01&api_key=${ apiKey }&language=es&page=${ this.pageNumber }`);
  }

  getMovieDetail( id: string ){
    return this.http.get<MovieDetail>(`${ URL }/movie/${ id }?api_key=${ apiKey }&language=es`); 
  }
}
