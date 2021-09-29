import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = "";

  constructor( private menuCtrl: MenuController,
               private router: Router) { }

  ngOnInit() {}

  regresar(){
    this.router.navigate(['/inicio']);
    //this.menuCtrl.open('first');
    //console.log('apretado');
  }

}
