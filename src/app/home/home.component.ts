import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../sotck-int'; // Ajusta la ruta según tu estructura de carpetas
import { dataStock } from '../data-stock'; // Ajusta la ruta según tu estructura de carpetas
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  productService: ProductService = inject(ProductService);

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
