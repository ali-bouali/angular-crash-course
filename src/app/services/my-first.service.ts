import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Alibou',
      email: 'alibou@mail.com',
      message: 'Hello world'
    });
    this.insert({
      name: 'John',
      email: 'john@mail.com',
      message: 'Hello world - John'
    });
    this.insert({
      name: 'Doe',
      email: 'doe@mail.com',
      message: 'Hello world - Doe'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
