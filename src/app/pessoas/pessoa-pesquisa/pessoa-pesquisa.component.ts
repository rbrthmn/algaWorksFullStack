import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  pessoas = [
    { nome: "Fulano", cidade: "Goiânia", cep: "7454625"},
    { nome: "Fulano", cidade: "Goiânia", cep: "7454625"}
  ];

}
