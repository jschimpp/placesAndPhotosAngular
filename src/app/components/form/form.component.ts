import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/rxjs/DataService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  photo=""
  placeName=""
  country=""

  constructor(private dataService: DataSharingService) {}

  addPost() {
    const post = {
      photo: this.photo,
      placeName: this.placeName,
      country: this.country
    }
    this.dataService.addPost(post)
    this.photo=""
    this.placeName=""
    this.country=""
  }
}
