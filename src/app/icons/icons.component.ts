import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  public type: string = '';
  public size: number = 0;

  constructor(@Attribute('type') type: string, @Attribute('size') size: number = 8) {
    this.type = type;
    this.size = size;
  }
}
