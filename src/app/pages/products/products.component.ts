import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatToolbarModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  imageList = [
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assets/img1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/img2.jpeg'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assets/img3.jpeg'
    },
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assets/img4.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/img5.jpeg'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assets/img6.jpeg'
    },
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assets/img7.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/img8.jpeg'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assets/img9.jpeg'
    },
    
  ];
}
