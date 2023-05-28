import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';
  @Input() title: string = 'aaaaaa';
  @Input() description: string = 'lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam';

  constructor() { }

  ngOnInit(): void {
  }

}
