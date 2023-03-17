import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { Content } from './helper-files/content-interface';
import { contentItems} from "./helper-files/contentDb";
import { MessagesService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(private messagesService: MessagesService) { }

  getContent(): Observable<Content[]> {
    const anime = of(contentItems);
    this.messagesService.add('Content array loaded!')
    return anime;
  }

  getContentById(id: number): Observable<Content | undefined> {
    const item = contentItems.find(c => c.id === id);
    if(item) {
      this.messagesService.add(`Content Item at Id: ${id}`);
      return of(item);
    } else return of(undefined);
  }
}
