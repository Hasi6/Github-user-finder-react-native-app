import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  public dummyData = [
    {
      message: 'Hasi is the best businesses, web development teams can consist of hundreds of people (web developers) and follow standard methods like Agile methodologies while developing websites. Smaller organizations may only require a single permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information systems technician. Web development may be a collaborative effort between departments rather than the domain of a designated department. There are three kinds of web developer specialization: front-end developer, back-end developer',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      message: 'Hasi is the best',
      createdAt: new Date(),
      sender: {
        firstName: 'Hasitha',
        lastName: 'Chandula',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
