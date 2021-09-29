import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {  Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

	counter: number = 1;
	peliculasRecientes: Pelicula[] = [];

	constructor( 
		private moviesService: MoviesService,
		private modalCtrl: ModalController 
		) { }

  	ngOnInit() {

		this.loadMovies();
  	}

	doInfinite( event ){
		//console.log('event',event);
		this.loadMovies( event );

	}

	loadMovies( event? ){

		this.moviesService.getMovieList()
		.subscribe( resp =>{
			for( let p = 0; p < resp.results.length; p++ ){
				
				if( this.counter > 6){
					this.counter = 1;
				}
				resp.results[p].color = this.counter;
				this.counter++;
		  }

		  if( resp.results.length == 0 ){
			event.target.disabled = true;
			event.target.complete();
			return;
		  }

		  const temp = [ ...this.peliculasRecientes, ...resp.results ];
		  this.peliculasRecientes = temp;
		  
		  if( event ){
			event.target.complete();
		  }
		  //console.log('respuesta', resp);
		});

	}

	color( value: number){
		//console.log('value',value);
		switch (true) {
			case ( value == 1 ):
				return 'color1';
			case ( value == 2 ):
				return 'color2';
			case ( value == 3 ):
				return 'color3';
			case ( value == 4 ):
				return 'color4';
			case ( value == 5 ):
				return 'color5';
			case ( value == 6 ):
				return 'color6';
		}
  	}

	async movieDetail( id: number, color:number ){
		const modalDetail = await this.modalCtrl.create({
			component: DetailComponent,
			componentProps:{
				id,
				color
			}
		});
		modalDetail.present();
	}

}
