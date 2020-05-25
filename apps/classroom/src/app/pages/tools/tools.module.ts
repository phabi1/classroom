import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { PageComponent } from './containers/page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, ToolsRoutingModule],
})
export class ToolsModule {}
