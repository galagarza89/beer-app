import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-beer',
  templateUrl: './get-beer.component.html',
  styleUrls: ['./get-beer.component.scss']
})


export class GetBeerComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  		document.body.classList.add('random-bg');
  	}

}
