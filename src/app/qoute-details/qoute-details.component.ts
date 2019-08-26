import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  likes: number;
  dislikes: number;

  constructor(
  ) { 
    this.likes = 0;
    this.dislikes = 0;
  }
  like(){
    this.likes += 1;
  }
  dislike(){
    this.dislikes += 1;
  }

  ngOnInit() {
  }

}
