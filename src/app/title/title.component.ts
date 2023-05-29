import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() saudacao: string = '';
  constructor() {
    console.log(`${this.saudacao} Constructor`);
    
  }

  ngOnChanges(): void {
    console.log(`${this.saudacao} onChanges`);
    
  }

  ngOnInit(): void {
    console.log(`${this.saudacao} onInit`);
    
  }

}
