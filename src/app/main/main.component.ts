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
  anytime = [];

  day: string = "";

  todoText: string = "";

  itemMonday = "itemMonday";
  itemTuesday = "itemTuesday";
  itemWednesday = "itemWednesday";
  itemThursday = "itemThursday";
  itemFriday = "itemFriday";
  itemSaturday = "itemSaturday";
  itemSunday = "itemSunday";
  itemAnytime = "itemAnytime";

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
    else if (this.day == "sunday") { selectedDay = this.sunday }
    else { selectedDay = this.anytime }
    return selectedDay;
  }


  add_item(): void {
    if (this.todoText == "") {
      alert("Empty formfield!")
    }
    else {
      this.selectDay().push(this.todoText);
      this.todoText = "";
      this.day = "";
    }
  }

  delete_item(index: number, array: string[]): void {
    array.splice(index, 1)
  }

  check_item_Monday(index: number): void {
    let items = document.querySelectorAll('.all_itemMonday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Tuesday(index: number): void {
    let items = document.querySelectorAll('.all_itemTuesday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Wednesday(index: number): void {
    let items = document.querySelectorAll('.all_itemWednesday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Thursday(index: number): void {
    let items = document.querySelectorAll('.all_itemThursday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Friday(index: number): void {
    let items = document.querySelectorAll('.all_itemFriday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Saturday(index: number): void {
    let items = document.querySelectorAll('.all_itemSaturday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Sunday(index: number): void {
    let items = document.querySelectorAll('.all_itemSunday')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
    }
  }
  check_item_Anytime(index: number): void {
    let items = document.querySelectorAll('.all_itemAnytime')
    if (String(items[index].classList).includes('item-box')) {
      items[index].classList.remove('item-box')
      items[index].classList.add('checked')
    }
    else if (String(items[index].classList).includes('checked')) {
      items[index].classList.add('item-box')
      items[index].classList.remove('checked')
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
