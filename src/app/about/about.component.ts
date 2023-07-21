import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg'
    }
    this.service.createProduct(product)
      .subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (error: HttpErrorResponse) => {
          if (error instanceof ErrorEvent) {
            // @ts-ignore
            console.error('An error occurred:', error.error.message);
          } else {
            // server side error
            console.error(`Server returned status code ${error.status}, error message: ${error.message}`);
          }
        }
      });

  }


}
