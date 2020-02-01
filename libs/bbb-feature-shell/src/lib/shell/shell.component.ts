import { Component, OnInit } from '@angular/core';
import { MockDataService } from '@arrange-list-game/mock-data';
import { List } from '@arrange-list-game/shared/list';

@Component({
  selector: 'arrange-list-game-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  list: List[];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.list = this.mockDataService.getBibleBooks();
  }
}
