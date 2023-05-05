import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCoreLibComponent } from './the-core-lib.component';

describe('TheCoreLibComponent', () => {
  let component: TheCoreLibComponent;
  let fixture: ComponentFixture<TheCoreLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCoreLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheCoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
