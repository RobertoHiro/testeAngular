import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  constructor() { }


  @Input() valorInicial = 10;

  ngOnChange(): void {
    console.log('on change');
  }
  ngOnInit(): void {
    console.log('on init');
  }
  ngDoCheck(): void {
    console.log('on do check');
  }
  ngAfterContentInit(): void {
    console.log('on after content ');
  }
  ngAfterContentChecked(): void {
    console.log('on after content checked');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }


}
