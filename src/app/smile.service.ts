import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Smile } from './models/smile.model';

@Injectable()
export class SmileService {

	constructor(private http: HttpClient){
	}
	
	getAllSmiles() {
		return this.http.post('/api/smiles/getSmiles',{removed: false, favorite: [true, false]});
	}

	getFavoriteSmiles() {
		return this.http.post('/api/smiles/getSmiles',{removed: false, favorite: true});
	}

	getRemovedSmiles() {
		return this.http.post('/api/smiles/getSmiles',{removed: true, favorite: false});
	}

	smileAction(smile: Smile) {
		return this.http.post('/api/smiles/smileAction', smile);
	}

}