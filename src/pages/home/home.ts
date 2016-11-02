import { Component } from '@angular/core';
import{ Http } from '@angular/http'
import{ NavController } from 'ionic-angular'
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items
  constructor(public navCtrl: NavController, private http: Http) {


              this.http.get("http://localhost:3000/db").map(res => res.json()).subscribe(data => {
              this.items = data;

              conole.log("GOT RESULTS");
              },


              error =>
              {console.log("oops");
              });

}
