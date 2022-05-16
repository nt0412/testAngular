import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFirstComponentComponent } from './test-first-component.component';

describe('TestFirstComponentComponent', () => {
  let component: TestFirstComponentComponent;
  let fixture: ComponentFixture<TestFirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFirstComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
