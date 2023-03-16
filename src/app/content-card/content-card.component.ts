import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent {
  contentItems: Content[] = [
    {
      id: 1,
      title: 'One Piece',
      description: 'Follows the adventures of Monkey D Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger',
      creator: 'Eichiro Oda',
      type: 'Action Adventure'
    },
    {
      id: 2,
      title: 'Blue Lock',
      description: 'High school soccer players from across Japan gather for a controversial project designed to create the best and most egoistic striker in the world',
      creator: 'Muneyuki Kaneshiro and Yusuke Nomura',
      type: 'Sports'
    },
    {
      id: 3,
      title: 'Chainsaw Man',
      description: 'Follows the story of Denji, an impovershied young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws',
      creator: 'Tasuki Fujimoto',
      type: 'Action, Horror'
    }
    ];
  contentList = new ContentList();

  constructor() {
    this.contentItems.forEach((item: Content) => this.contentList.addItem(item));

  }
}
