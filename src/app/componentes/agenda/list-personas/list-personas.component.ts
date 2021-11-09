import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.scss']
})
export class ListPersonasComponent implements OnInit {

  constructor( private personaService: PersonaService) { }

  ngOnInit(): void {
  }

}
