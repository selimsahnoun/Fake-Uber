import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private fileStorage: AngularFireStorage,
    private UserService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  selectedFile(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.fileStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = this.ref.getDownloadURL())))
      .subscribe();
  }

  onSubmit(f: NgForm) {
    var img = document.getElementsByTagName('a');
    f.value.imgUrl = img[img.length - 1].innerHTML;

    if (f.value.imgUrl === '') {
      alert('must upload a picture');
      location.reload();
    }
    console.log('here');
    this.UserService.createRegister(f.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
