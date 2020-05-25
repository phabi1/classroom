import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { PageComponent } from './containers/page/page.component';
import { ToolsRoutingModule } from './tools-routing.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, MatListModule, TranslateModule, ToolsRoutingModule],
})
export class ToolsModule {}
