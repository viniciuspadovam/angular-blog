import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string | null): void {
    const result = dataFake.filter(article => article.id === id)[0];
    console.log(result);

    this.photoCover = result.photo;
    this.title = result.title;
    this.description = result.description;
  }

}
