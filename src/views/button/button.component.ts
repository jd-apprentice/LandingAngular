import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() btnName!: string;
  @Input() btnClass!: string;

  constructor() {}
  ngOnInit(): void {}
}
