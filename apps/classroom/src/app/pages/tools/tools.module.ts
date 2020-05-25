import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { PageComponent } from './containers/page/page.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, MatListModule, ToolsRoutingModule],
})
export class ToolsModule {}
