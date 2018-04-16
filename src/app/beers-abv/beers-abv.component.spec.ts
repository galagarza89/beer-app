import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersAbvComponent } from './beers-abv.component';

describe('BeersAbvComponent', () => {
  let component: BeersAbvComponent;
  let fixture: ComponentFixture<BeersAbvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersAbvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersAbvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
