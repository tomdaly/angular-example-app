import { NgModule } from '@angular/core';
import { BannerModule } from '@example/components/banner/module';
import { LegacySectionComponent } from './legacy-section.component';

@NgModule({
  declarations: [LegacySectionComponent],
  imports: [BannerModule],
  exports: [LegacySectionComponent],
})
export class LegacySectionModule {}
