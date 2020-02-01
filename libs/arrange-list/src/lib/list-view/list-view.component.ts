import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '@arrange-list-game/shared/list';

@Component({
  selector: 'game-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() list: List[];
  complete = true;
  gameList: List[];

  constructor() {}

  ngOnInit() {
    this.gameList = this.mixList(this.list);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.gameList, event.previousIndex, event.currentIndex);
    this.complete = this.validateList(this.gameList);
  }

  private mixList(list: List[]): List[] {
    return list;
  }

  private validateList(list: List[]): boolean {
    const allValues: number[] = list.map(function(e) {
      return e.value;
    });
    return this.isSorted(allValues);
  }

  private isSorted(arr) {
    const limit = arr.length - 1;
    return arr.every((_, i) => (i < limit ? arr[i] <= arr[i + 1] : true));
  }
}
