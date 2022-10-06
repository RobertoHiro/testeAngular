import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome:string='';
  pessoa:any={
    nome:'asdf',
    idade:12
  };

  nomeDoCurso = "Angular";

  valorInicial=15;  

  onMudouValor(evento:any){
    console.log(evento.novoValor);
    
  }

}
