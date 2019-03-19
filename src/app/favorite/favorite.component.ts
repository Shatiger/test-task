import { Component, OnInit } from '@angular/core';
import { Smile } from '../models/smile.model';
import { SmileService } from '../smile.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['../../assets/styles.css'],
  providers: [ SmileService ]
})
export class FavoriteComponent implements OnInit {

  public p : number = 1;
  public smiles : Smile[];
  public count : number = 0;

  constructor(private smileService: SmileService){
  }

  ngOnInit() {
    this.getFavoriteSmiles();
  }

  getFavoriteSmiles() {
    this.smileService.getFavoriteSmiles().subscribe(result => {
  		console.log('result is ', result);
      this.smiles = result['data'];
      if (this.smiles != undefined) {
        this.count = this.smiles.length;
      }
  	});
  }

  remove(smile: Smile) {
    smile.favorite = false;
    this.smileService.smileAction(smile).subscribe(result => {
      console.log('result (smile remove): ', result);
      if (result.hasOwnProperty('status')) {
        var newSmiles = this.smiles.filter((item) => item.name !== smile.name);
        this.smiles = newSmiles;
        this.count--;
      }
    });
  }

}
