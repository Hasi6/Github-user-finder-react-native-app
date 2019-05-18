import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  public dummyData = [
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
