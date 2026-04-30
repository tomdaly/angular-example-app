import { ChangeDetectionStrategy, Component } from '@angular/core';
// references @example/components in TS (e.g. for type imports / config) but
// the rendered template uses only this lib's own selectors. mirrors customer
// wrapper-lib pattern: TS imports of the external DS without template usage.
import type { BannerComponent } from '@example/components/src/banner.component';

@Component({
  selector: 'inner-section',
  template: `
    <section class="inner-section">
      <h2>Inner section</h2>
      <ng-content />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InnerSectionComponent {
  readonly bannerType: BannerComponent | null = null;
}
