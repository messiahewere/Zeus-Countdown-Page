import { Component } from '@angular/core';
import { Mainfirst } from './mainfirst/mainfirst';
import { Mainsecond } from './mainsecond/mainsecond';
import { Mainthird } from './mainthird/mainthird';
import { Mainforth } from './mainforth/mainforth';
import { Mainfifth } from './mainfifth/mainfifth';
import { Mainsixth } from './mainsixth/mainsixth';
import { Mainseventh } from './mainseventh/mainseventh';
import { Maineight } from './maineight/maineight';
import { Mainnineth } from './mainnineth/mainnineth';

@Component({
  selector: 'app-main',
  imports: [Mainfirst, Mainsecond, Mainthird, Mainforth, Mainfifth, Mainsixth, Mainseventh,
            Maineight, Mainnineth],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
