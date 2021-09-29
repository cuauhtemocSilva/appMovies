import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;
  @Input() color;
  movieDetail: MovieDetail = {};

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.movieService.getMovieDetail( this.id )
    .subscribe( resp => {
      this.movieDetail = resp;
      //console.log('this.movieDetail',this.movieDetail);
    });
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

}
