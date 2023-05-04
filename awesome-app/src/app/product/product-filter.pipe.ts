import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/Product';


// somedata | productFilter
@Pipe({
  name: 'productFilter',
  pure: true
})
export class ProductFilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string): Array<Product> {

    console.log("in ProductFilterPipe")
    if(!searchKey){
      return input;
    }
    else{

      return input.filter(item => item.id?.toString() === searchKey 
                                          || item.name?.toLowerCase().includes(searchKey.toLowerCase())
                                          || item.description?.toLowerCase().includes(searchKey.toLowerCase())
                                          || item.price?.toString() === searchKey)
    }
    
  }

}
