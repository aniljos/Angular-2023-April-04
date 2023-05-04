import { Product } from '../model/Product';
import { ProductFilterPipe } from './product-filter.pipe';

//test suite
//fdescribe ==> focus
//xdescribe ==> exclude
fdescribe('ProductFilterPipe', () => {

  //Unit test
  it('create an instance', () => {
    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();
  
  });

  it('should return the input for no searchkey', () =>{

    const pipe = new ProductFilterPipe();
    const input = [ new Product(1, "N1", 7000, "D1"), 
                    new Product(2, "N2", 7000, "D2"), 
                    new Product(3, "N3", 7000, "D3")]
    const result = pipe.transform(input, "");

    expect(result).toBe(input);
    expect(result.length).toBe(input.length);

  })

  it('should return the filtered output for a searchkey', () =>{

    const pipe = new ProductFilterPipe();
    const input = [ new Product(1, "N1", 7000, "D1"), 
                    new Product(2, "N2", 7000, "D2"), 
                    new Product(3, "N3", 7000, "D3")]
    const result = pipe.transform(input, "N2");

    
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(2);

  })



});
