import { Component, OnInit } from '@angular/core';
import { AuthLibService, EventBusService } from 'auth-lib';
import { SharedLibService } from 'shared-lib-for-mfe';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent implements OnInit{
  constructor(
    private service: AuthLibService,
    private sharedService: SharedLibService,
    private eventBus: EventBusService
  ) {
    console.log('User Name', this.service.user);
  }

  ngOnInit(): void {
    const temp =this.sharedService.getToken();
    this.service.obs$.subscribe((result) => console.log(result));
    this.eventBus.getEmitterSubs().subscribe((res) =>{
      console.log(res);
    })
    // console.log(temp);
  }
}
