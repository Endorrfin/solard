import { Injectable } from '@angular/core';
// import { DataServices } from '../shared/data-services';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // dataServices: DataServices[] = [
  //   {title: 'Post 1', text: 'Sample text for post 1', id: 11},
  //   {title: 'Post 2', text: 'Sample text for post 2', id: 22},
  //   {title: 'Post 3', text: 'Sample text for post 3', id: 33},
  //   {title: 'Post 4', text: 'Sample text for post 4', id: 44},
  // ]

  getById(id: number) {
    // return this.dataServices.find(p => p.id === id)
  }

  constructor() {}
}
