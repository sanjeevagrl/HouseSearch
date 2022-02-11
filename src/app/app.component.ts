import { Component, OnInit } from '@angular/core';
import { interval, of, zip } from 'rxjs';
import { shareReplay, take, share, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HouseSearch';

  ngOnInit(): void {
    // const obs$ = interval(1000).pipe(take(4), share());
    // obs$.subscribe((x) => console.log('sub A:', x));
    // obs$.subscribe((y) => console.log('sub B:', y));
    // const obs$ = interval(1000);
    // const shared$ = obs$.pipe(take(4), shareReplay(3));
    // shared$.subscribe((x) => console.log('sub A: ', x));
    // shared$.subscribe((y) => console.log('sub B: ', y));
  }
}
