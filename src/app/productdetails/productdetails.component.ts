import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../sotck-int';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productService: ProductService = inject(ProductService);
  product: Product | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  
    ngOnInit(): void {
      this.product = this.productService.getProductById(parseInt(this.route.snapshot.params['id'], 10));
    }
}
