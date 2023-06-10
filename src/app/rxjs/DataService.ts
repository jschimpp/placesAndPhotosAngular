import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PostItem } from "../models/PostItem";
import axios from 'axios';

@Injectable({
    providedIn: 'root'
  })

  export class DataSharingService {
    private postArraySubject = new BehaviorSubject<any[]>([])

    posts$ = this.postArraySubject.asObservable();

    getPosts() {
        axios.get('http://localhost:8080/posts')
        .then((response) => {
            const data = response.data;
            this.postArraySubject.next(data);
        })
        .catch((error) => {
            alert('Data not received')
        })
    }

    addPost(post: any) {
        axios({
            url: 'http://localhost:8080/posts',
            method: 'POST',
            data: post
        })
        .then(() => {
            console.log('Successfully Submitted')
            this.getPosts()
        })
        .catch(() => {
            console.log('Data not submitted')
        })
    }

    editPhoto(_id: string, photo: string) {
            axios.put(`http://localhost:8080/posts/${_id}`, {photo: photo})
            .then(() => {
                console.log('Successfully Updated')
                this.getPosts()
            })
            .catch(() => {
                console.log('Failed to Update')
            })
    }

    deletePhoto(_id: string) {
        axios.delete(`http://localhost:8080/posts/${_id}`)
        .then(() => {
            console.log('Successfully Deleted')
            this.getPosts()
        })
        .catch(() => {
            console.log('Failed to Delete')
        })
    }
  }