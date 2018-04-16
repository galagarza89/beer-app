import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.scss']
})

export class RandomBeerComponent implements OnInit {

  	constructor( private http: Http ) { }

    beer = [];
    getData = function(){
    	this.http.get('https://api.punkapi.com/v2/beers/random').subscribe(
    		(res: Response) => {
    			this.beer = res.json();
    		}
    	)
    }

  	ngOnInit() {
  		document.body.classList.add('random-bg');
  		this.getData();
  	}

}
