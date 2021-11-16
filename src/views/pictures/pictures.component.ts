import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
})
export class PicturesComponent implements OnInit {

  @Input() src!: String;
  @Input() alt!: String;
  @Input() class!: String;

  constructor() {}
  ngOnInit(): void {}
}
