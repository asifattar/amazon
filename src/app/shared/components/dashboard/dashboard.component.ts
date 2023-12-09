import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/iproduct';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: Product[] = []; // Modify the type based on your data structure

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProdData().subscribe(
      (data: Product[]) => {
        this.products = data; // Store the retrieved data in the products array
        console.log(this.products); // You'll see the actual fetched data here
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

}
