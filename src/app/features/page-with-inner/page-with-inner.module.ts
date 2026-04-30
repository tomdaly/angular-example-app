import { NgModule } from '@angular/core';
import { InnerSectionModule } from '@inner/lib/inner-section/inner-section.module';
import { PageWithInnerComponent } from './page-with-inner.component';

@NgModule({
  declarations: [PageWithInnerComponent],
  imports: [InnerSectionModule],
  exports: [PageWithInnerComponent],
})
export class PageWithInnerModule {}
