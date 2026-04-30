import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-with-inner',
  template: `<inner-section>App-level page consuming the wrapper</inner-section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PageWithInnerComponent {}
