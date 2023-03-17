import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { contentItems} from "./helper-files/contentDb";
import { AnimeService} from "./anime.service";
import { MessagesService} from "./messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A-Myers-MyFavAnime';

  constructor(private animeService: AnimeService, private messagesService: MessagesService) { }
}
