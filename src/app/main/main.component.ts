import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  monday = [];
  tuesday = [];
  wednesday = [];
  thursday = [];
  friday = [];
  saturday = [];
  sunday = [];

  day: string = "";

  todoText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  selectDay(): string[] {
    let selectedDay;
    if (this.day == "monday") { selectedDay = this.monday }
    else if (this.day == "tuesday") { selectedDay = this.tuesday }
    else if (this.day == "wednesday") { selectedDay = this.wednesday }
    else if (this.day == "thursday") { selectedDay = this.thursday }
    else if (this.day == "friday") { selectedDay = this.friday }
    else if (this.day == "saturday") { selectedDay = this.saturday }
    else { selectedDay = this.sunday }
    return selectedDay;
  }

  add_item(): void {
    if (this.todoText == "") {
      alert("Empty formfield!")
    }
    else {
      this.selectDay().push(this.todoText);
      this.todoText = "";
      this.day = "monday"
    }
  }


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
