import { Component } from '@angular/core';

@Component({
  selector: 'wap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  events: string[] = [];
  opened: boolean;

  shouldRun = true;
}
