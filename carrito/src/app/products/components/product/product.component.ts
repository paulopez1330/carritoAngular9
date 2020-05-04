import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) {}

  addCart() {
    this.cartService.addCart(this.product);
  }
}
