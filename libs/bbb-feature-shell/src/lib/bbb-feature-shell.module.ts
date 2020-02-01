import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArrangeListModule } from '@arrange-list-game/arrange-list';
import { MockDataService } from '@arrange-list-game/mock-data';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent
  }
];

@NgModule({
  imports: [ArrangeListModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [ShellComponent],
  providers: [MockDataService],
  bootstrap: [ShellComponent]
})
export class BbbFeatureShellModule {}
