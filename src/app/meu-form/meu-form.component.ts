import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }
  
  pessoa:any={
    nome:'asdf',
    idade:12
  };

  nomeDoCurso:string="Angular";

  ngOnInit(): void {
  }

}
