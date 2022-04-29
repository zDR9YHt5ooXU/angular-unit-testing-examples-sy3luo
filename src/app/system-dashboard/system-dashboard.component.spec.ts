import { SystemDashboardComponent } from './system-dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { flush, fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('SystemDashboardComponent', () => {
  let component: SystemDashboardComponent;
  let fixture: ComponentFixture<SystemDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemDashboardComponent],
    });

    fixture = TestBed.createComponent(SystemDashboardComponent);
    component = fixture.componentInstance;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should load', fakeAsync(() => {
    debugger;
    expect(component.loading).toBeTrue();
    fixture.detectChanges();
    // flush();
    tick(300);
    expect(component.loading).toBeFalse();
    tick(300);
    fixture.destroy();
  }));
});
