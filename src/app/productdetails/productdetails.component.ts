import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../sotck-int';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetails',
  imports: [RouterModule, CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  cartService = inject(CartService);
  route: ActivatedRoute = inject(ActivatedRoute);
  
    ngOnInit(): void {
      this.product = this.productService.getProductById(parseInt(this.route.snapshot.params['id'], 10));
    }
    addToCart() {
      if (this.product) {
        this.cartService.addToCart(this.product);
      }
    }
} 

