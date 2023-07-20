import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailsComponent } from './message-details.component';

describe('MessageDetailsComponent', () => {
  let component: MessageDetailsComponent;
  let fixture: ComponentFixture<MessageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDetailsComponent]
    });
    fixture = TestBed.createComponent(MessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
