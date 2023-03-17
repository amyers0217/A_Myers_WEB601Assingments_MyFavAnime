import {Component, Input} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  search?: string;
  contentItems: Content[] = [];
  class: any;
  constructor() {

  }

  imageClick(item: Content) {
    console.log(item.id + " " + item.title);
  }

  searchTerm = '';
  searchResult: boolean | null = null;
  searchContent() {
    this.searchResult= this.contentItems.some(c => c.title === this.searchTerm);
  }
}
