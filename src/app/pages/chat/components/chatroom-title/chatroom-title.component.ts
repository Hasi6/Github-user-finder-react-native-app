import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatroom-title',
  templateUrl: './chatroom-title.component.html',
  styleUrls: ['./chatroom-title.component.scss']
})
export class ChatroomTitleComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
