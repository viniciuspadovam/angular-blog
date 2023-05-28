import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() id: string = "1";

  constructor() { }

  ngOnInit(): void {
  }

}

/**
 * https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png
 * Saiu a nova versão do Angular
 * Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nihil ipsa eius numquam provident unde commodi voluptatem necessitatibus!
 */
