import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public title: string = '';

  constructor(@Attribute('title') title: string) {
    this.title = title;
  }
}
