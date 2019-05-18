import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomTitleComponent } from './chatroom-title.component';

describe('ChatroomTitleComponent', () => {
  let component: ChatroomTitleComponent;
  let fixture: ComponentFixture<ChatroomTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
