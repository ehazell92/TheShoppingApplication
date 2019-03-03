import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() prods: any;
  @ViewChild('categoryFilter') categoryFilter;
  @Output() inputChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterI(event: any) {
    if (event.keyCode === 8) {
      event.target.value = '';
    }
    this.inputChange.emit(event);
  }
}
