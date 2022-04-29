import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { bufferTime, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-system-dashboard',
  templateUrl: './system-dashboard.component.html',
  styleUrls: ['./system-dashboard.component.css'],
})
export class SystemDashboardComponent implements OnInit {
  private destroyed = new Subject<void>();
  loading = true;
  constructor() {}

  ngOnInit() {
    const fortigate = new BehaviorSubject(null);
    fortigate
      .pipe(bufferTime(100), takeUntil(this.destroyed))
      .subscribe((v) => {
        v;
        debugger;
        this.loading = false;
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
  }
}
