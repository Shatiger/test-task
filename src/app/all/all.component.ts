import { Component, OnInit } from '@angular/core';
import { Smile } from '../models/smile.model';
import { SmileService } from '../smile.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['../../assets/styles.css'],
  providers: [ SmileService ]
})
export class AllComponent implements OnInit {

  public p : number = 1;
  public smiles : Smile[];
  public count : number = 0;

  constructor(private smileService: SmileService){
  }

  ngOnInit() {
    this.getAllSmiles();
  }

  getAllSmiles() {
    this.smileService.getAllSmiles().subscribe(result => {
  		console.log('result is ', result);
      this.smiles = result['data'];
      if (this.smiles != undefined) {
        this.count = this.smiles.length;
      }
  	});
  }

  addToFavorites(smile: Smile) {
    var newSmile = smile;
    newSmile.favorite = !newSmile.favorite;
    this.smileService.smileAction(newSmile).subscribe(result => {
      console.log('result (favorite add): ', result);
      if (result.hasOwnProperty('status')) {
        smile.favorite = newSmile.favorite;
      }
    });
  }

  remove(smile: Smile) {
    smile.removed = true;
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
