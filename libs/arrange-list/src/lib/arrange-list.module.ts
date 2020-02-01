import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports: [CommonModule, DragDropModule, MatListModule],
  declarations: [ListViewComponent],
  exports: [ListViewComponent]
})
export class ArrangeListModule {}
