import { Component } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Content } from "../helper-files/content-interface";
import {AnimeService} from "../anime.service";

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent {
  contentId: number;
  contentItem: Content | undefined;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) {
    this.contentId = this.route.snapshot.params['id'];
  }
}
