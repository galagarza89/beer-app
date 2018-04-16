import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss']
})


export class AllBeersComponent implements OnInit {

    private routeSub:any;
    page_id: string;
  

    constructor(private route: ActivatedRoute, private http: Http) { }


    beers = [];


    getData = function() {
        this.http.get(`https://api.punkapi.com/v2/beers?page=1&per_page=24`).subscribe(
            (res: Response) => {
                this.beers = res.json();
            }
    )

    }


  ngOnInit() {
      document.body.classList.add('beers-bg');
      this.getData();
  }

}


  
