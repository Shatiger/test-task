import { Component, OnInit } from '@angular/core';
import { Smile } from '../models/smile.model';
import { SmileService } from '../smile.service';

@Component({
  selector: 'app-removed',
  templateUrl: './removed.component.html',
  styleUrls: ['../../assets/styles.css'],
  providers: [ SmileService ]
})
export class RemovedComponent implements OnInit {

  public p : number = 1;
  public smiles : Smile[];
  public count : number = 0;

  constructor(private smileService: SmileService){
  }

  ngOnInit() {
    this.getRemovedSmiles();
  }

  getRemovedSmiles() {
    this.smileService.getRemovedSmiles().subscribe(result => {
  		console.log('result is ', result);
      this.smiles = result['data'];
      if (this.smiles != undefined) {
        this.count = this.smiles.length;
      }
  	});
  }

  restore(smile: Smile) {
    smile.removed = false;
    this.smileService.smileAction(smile).subscribe(result => {
      console.log('result (smile restore): ', result);
      if (result.hasOwnProperty('status')) {
        var newSmiles = this.smiles.filter((item) => item.name !== smile.name);
        this.smiles = newSmiles;
        this.count--;
      }
    });
  }

}
