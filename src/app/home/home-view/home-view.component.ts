import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit {
  webDev = {
    name: 'Richard Leung Woo-Gabriel',
    title: '<Web Developer>',
    built: '<Angular>',
    imagesUrl: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29yayUyMGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

      '/assets/Me.jpeg',
    ],
  };
  hobbies = [
    {
      title: 'Business',
      urlImage:
        'https://media.istockphoto.com/photos/online-shopping-picture-id1153881995?b=1&k=20&m=1153881995&s=170667a&w=0&h=bJL4qdsFSFAY5gjwEYx4at8lgshQeQaiFVEtjhpDHsM=',
      description:
        'Sales has unlimited potential thus having a sales business whether product of service is important',
    },
    {
      title: 'Track and Field',
      urlImage:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      description:
        'Track has always been a sport that shows personality as its an individual sport. Growing up Track has been my most loved competetive sport.',
    },
    {
      title: 'Cars',
      urlImage:
        'https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      description: 'Luxury is a must, and cars are one of my loves',
    },
    {
      title: 'Gym',
      urlImage: '/assets/gym.jpeg',
      description:
        'Gym and fitness came natural for me and i will do it till i die',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
