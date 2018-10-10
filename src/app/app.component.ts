import { Component, OnInit } from '@angular/core';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // SITE LOGO
  logo: string = "../assets/images/logo.png";
  // OPENS AND CLOSES SEARCH
  search_open() {
    let elem = document.querySelector('.right > .search');
    if (elem !== null) {
      if (elem.classList.contains('show')) {
        elem.classList.remove('show');
      } else {
        elem.classList.add('show');
      }
    }
  }
  // OPENS AND CLOSES MENU
  menu_open(targetElem) {
    let elem = document.querySelector('.left > .menu');
    let overlay = document.querySelector('.left > .overlay');
    let body = document.querySelector('body');
    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    } else {
      body.classList.add('menu-open');
    }
    if (elem !== null) {
      if (elem.classList.contains('show')) {
        elem.classList.remove('show');
      } else {
        elem.classList.add('show');
      }
    }
    if (overlay !== null) {
      if (overlay.classList.contains('show')) {
        overlay.classList.remove('show');
      } else {
        overlay.classList.add('show');
      }
    }
    if (targetElem.target.classList.contains('show')) {
      targetElem.target.classList.remove('show');
    } else {
      targetElem.target.classList.add('show');
    }
  }
  // CLOSES MENU
  close_menu(targetElem) {
    targetElem.target.classList.remove('show');
    let elem = document.querySelector('.left > .menu');
    let menuIcon = document.querySelector('.left > img');
    let body = document.querySelector('body');
    let overlay = document.querySelector('.left > .overlay');
    let search = document.querySelector('.right > .search');

    body.classList.remove('menu-open');
    if (elem !== null) {
      elem.classList.remove('show');
    }
    if (menuIcon !== null) {
      menuIcon.classList.remove('show');
    }
    if (overlay !== null) {
      overlay.classList.remove('show');
    }
    if (search !== null) {
      search.classList.remove('show');
    }
  }
  ngOnInit() { }
}
