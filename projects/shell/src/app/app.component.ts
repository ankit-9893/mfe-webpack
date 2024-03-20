import { AuthLibService, EventBusService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib-for-mfe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(
    private service: AuthLibService,
    http: HttpClient,
    private sharedLib: SharedLibService,
    private eventBus: EventBusService
  ) {
    this.service.login('Max', null);
  }

  ngOnInit(): void {
    this.sharedLib.setToken('ankit');
  }

  onClick() {
    this.sharedLib.setToken('Hello sir refreshing the token');
    this.service.obs$.next('Hello Sir, call from shell app');
    this.eventBus.emit('Click Event from shell-app', 'Testing');
  }
}
