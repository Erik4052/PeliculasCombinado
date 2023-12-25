import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  imgBase64!:any;
  @Input() urlActualImage!:any;
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>()
  constructor() { }

  ngOnInit(): void {
  }

  change(event:any) {
    console.log(this.urlActualImage);

    if(event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file).then((value) => this.imgBase64 = value)
      .catch(err => console.log(err));
      this.fileSelected.emit(file);
      this.urlActualImage = null;
    }
    console.log(this.urlActualImage);
  }

}
