import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "― Marilyn Monroe", '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”', "Eddy", new Date(2019, 9, 14)),
    new Quote(2, "― Oscar Wilde", '“Be yourself; everyone else is already taken.”', "Eddy", new Date(2019, 10, 9)),
    new Quote(3, "― Albert Einstein", '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.” ', "Eddy", new Date(2019, 11, 14)),
    new Quote(4, "― Bernard M. Baruch", '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.” ', "Eddy", new Date(2019, 8, 31))
  ];
  details(index) {
    this.quotes[index].showName = !this.quotes[index].showName;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete this quote ${this.quotes[index].name}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
