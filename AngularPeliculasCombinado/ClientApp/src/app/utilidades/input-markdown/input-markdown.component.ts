import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  contentMarkDown = '';
  @Output() changeMarkDown: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(event:Event){
  const target = event.target as HTMLTextAreaElement;
  if (target instanceof HTMLTextAreaElement) {
    this.contentMarkDown = target.value;
    this.changeMarkDown.emit(target.value);
  }
  }
}
