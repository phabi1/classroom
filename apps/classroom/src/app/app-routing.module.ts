import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tools/tools.module').then((m) => m.ToolsModule),
  },
  {
    path: 'tools/daysofmonth',
    loadChildren: () =>
      import('./pages/tools-daysofmonth/tools-daysofmonth.module').then(
        (m) => m.ToolsDaysofmonthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
