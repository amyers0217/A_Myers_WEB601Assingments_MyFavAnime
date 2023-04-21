import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private updates: SwUpdate) { }

  checkForUpdate() {
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      if (confirm('New version available. Load new version?')) {
        this.activeUpdate();
      }
    });
  }

  private activeUpdate() {

  }
}
