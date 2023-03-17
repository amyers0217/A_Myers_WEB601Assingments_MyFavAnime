import {Component, Input} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  @Input() contentItems: Content[];
  search?: string;
  class: any;
  constructor() {
    this.contentItems = [
      {
        id: 1,
        title: 'One Piece',
        description: 'Follows the adventures of Monkey D Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger',
        creator: 'Eichiro Oda',
        type: 'Action, Adventure'
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
      },
      {
        id: 4,
        title: 'Attack on Titan',
        description: 'In a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from man-eating humanoids called Titans, Eren Jeager vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother',
        creator: 'Hajime Isayama',
        type: 'Action, Post-Apocalyptic'
      },
      {
        id: 5,
        title: 'Haikyu!!',
        description: 'Determined to be like the volleyball championship star played nicknamed the Little Giant, Shoyo Hinata joins his high school volleyball club',
        creator: 'Haruichi Furudate',
        type: 'Sports'
      },
      {
        id: 6,
        title: 'Hunter x Hunter',
        description: 'Gon Freeces aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out hus father, who left him when he was younger',
        creator: 'Yoshihiro Togashi',
        type: 'Action, Adventure, Fantasy'
      },
      {
        id: 7,
        title: 'Free! Iwatobi Swim Club',
        description: 'Haruka Nanase has a love for water and a passion for swimming. After an encounter with an elementary school rival, Haruka, Makoto, and Nagisa decide to form the Iwatobi High School Swim Club',
        creator: 'Hiroko Utsumi',
        type: 'Sports'
      }
    ];
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
