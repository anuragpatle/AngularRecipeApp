import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  selectedExampleType: string;

  constructor() { }


  ngOnInit() {
  }

  onClickExampleOptions(selectedExampleType: string) {
    this.selectedExampleType = selectedExampleType;
  }

}
