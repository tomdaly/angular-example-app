import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'example-banner',
  template: `<div class="banner"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  readonly variant = input<string>('default');
}
