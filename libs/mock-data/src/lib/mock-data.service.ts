import { Injectable } from '@angular/core';
import { List } from '@arrange-list-game/shared/list';
import { BIBLE_BOOKS, QURAN_CHAPTERS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() {}

  getBibleBooks(): List[] {
    return BIBLE_BOOKS;
  }

  getQuranChapters(): List[] {
    return QURAN_CHAPTERS;
  }
}
