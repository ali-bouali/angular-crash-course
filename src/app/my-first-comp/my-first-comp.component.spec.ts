import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCompComponent } from './my-first-comp.component';

describe('MyFirstCompComponent', () => {
  let component: MyFirstCompComponent;
  let fixture: ComponentFixture<MyFirstCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFirstCompComponent]
    });
    fixture = TestBed.createComponent(MyFirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
