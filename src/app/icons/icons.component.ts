import { Attribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  @Input() type: string = '';
  @Input() size: string = '8';
  public center: boolean = false;

  constructor(@Attribute('center') center: boolean) {
    if (center) this.center = center;
  }

  getStyle() {
    return this.center ? 'mx-auto' : '';
  }
}
