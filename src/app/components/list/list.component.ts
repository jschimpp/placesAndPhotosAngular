import { Component } from '@angular/core';
import { PostItem } from 'src/app/models/PostItem';
import { DataSharingService } from 'src/app/rxjs/DataService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
posts: PostItem[]=[]
photo=""
editMode=false

constructor(private dataService: DataSharingService) {
  this.dataService.getPosts()
}

ngOnInit() {
  this.dataService.posts$.subscribe((posts) => {
    this.posts = posts
  })
}
 
editPhoto(_id: string, photo: string) {
  this.photo = photo
  this.dataService.editPhoto(_id, photo)
  this.editMode=false
}

deletePhoto(_id: string) {
  this.dataService.deletePhoto(_id)
}

}
