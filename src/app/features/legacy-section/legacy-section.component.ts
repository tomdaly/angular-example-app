import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-legacy-section',
  template: `<example-banner variant="warning">Pre-standalone usage</example-banner>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LegacySectionComponent {}
