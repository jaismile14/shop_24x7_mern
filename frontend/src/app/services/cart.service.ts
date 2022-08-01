import { JsonpClientBackend } from '@angular/common/http';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable } from '@angular/core';
//import { ICart } from 'intefaces/cart';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] =[]
  
  cartLatestValue: Subject<any[]>= new Subject<any[]>();

  constructor() {
    console.log("CART SERVICE CALLED", this.cart)
    // this.cartLatestValue.subscribe((data) =>{
    //   this.cart=data
    // })
   }
    
  AddToCart(product: any, quantity: string){
    console.log(product,quantity)
    var item = JSON.parse(localStorage.getItem('cartitems') || '{}')
    console.log("item is ", item)
    var cartItems : any[]=[];
    console.log('json item', JSON.stringify(item))
    if(JSON.stringify(item).trim()!=='{}'){
      console.log('concatenating', JSON.stringify(item))
      cartItems= cartItems.concat(item)
    }
    console.log('retrieved cartitems: ', cartItems);
    var newProduct = {"product": product ,"quantity": quantity}
    var found=false
    for(var i=0; i<cartItems.length; i++){
      if(cartItems[i].product._id===newProduct.product._id){
        cartItems[i].quantity= parseInt(cartItems[i].quantity) + parseInt(newProduct.quantity)
        found=true
        break;
      }
    }
    if(!found){
      cartItems.push(newProduct)
    }
    
    console.log("in cart. added : ", cartItems)
    this.cartLatestValue.next(cartItems)
    //alert(cartItems)
    localStorage.setItem('cartitems', JSON.stringify(cartItems));
  }
  

  CartDetails(){
    var item = JSON.parse(localStorage.getItem('cartitems') || '{}')
    var cartItems: any =[];

    if(JSON.stringify(item).trim()!=='{}'){
      cartItems= cartItems.concat(item)
    }
    return cartItems 
  }
}
