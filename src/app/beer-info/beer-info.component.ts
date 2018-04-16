import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.scss']
})


export class BeerInfoComponent implements OnInit {

	private routeSub:any;
	id: string;

	constructor(private route: ActivatedRoute, private http: Http) { }

	beer = [];
	ngOnInit() {
		
		this.routeSub = this.route.params.subscribe(params => {
			this.id = params['id'];
		})

    	this.http.get(`https://api.punkapi.com/v2/beers/${this.id}`).subscribe(
    		(res: Response) => {
    			console.log(this.beer = res.json());
    		}
    	)
	}

}
