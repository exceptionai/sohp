import { UserModel } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: UserModel = {
    name: 'Sophia',
    avatarUrl: 'https://media-private.canva.com/Os1hU/MAEAgROs1hU/1/tl.jpg?response-expires=Tue%2C%2021%20Jul%202020%2003%3A52%3A03%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200721T005715Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10487&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20200721%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5cf9b4ebbbf97062c2666233e8dfa8ce6897784b4c6501e08343b808783b12e9'
  };

  constructor() { }

  ngOnInit(): void {
  }

  getAvatarUrl(): string{
    return `url("${this.user.avatarUrl}")`;
  }

}
