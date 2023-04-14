import { Component } from '@angular/core';
import { AnimeService } from "../anime.service";
import { ContentListComponent } from "../content-list/content-list.component";
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {
  contentItems!: Content[];

  title: string = '';
  description: string = '';
  creator: string = '';
  imgURL: string = '';
  type: string = '';
  tags: string = '';

  constructor(private animeService: AnimeService, private contentComponent: ContentListComponent) {

  }
}
