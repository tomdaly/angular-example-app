import { NgModule } from '@angular/core';
import { BannerModule } from '@example/components/banner/module';
import { InnerSectionComponent } from './inner-section.component';

// imports BannerModule so its providers are available, but the inner-section
// template never renders <example-banner>. mirrors how customers wire up an
// external design system at the module level without rendering its selectors.
@NgModule({
  declarations: [InnerSectionComponent],
  imports: [BannerModule],
  exports: [InnerSectionComponent],
})
export class InnerSectionModule {}
