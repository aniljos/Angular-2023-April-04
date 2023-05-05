import { TestBed, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { GadgetService } from './gadget.service';

fdescribe('GadgetService', () => {
  let service: GadgetService;
  let mock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GadgetService]
    });
    service = TestBed.inject(GadgetService);
    mock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts', (done) => {
    
    
    
      service.getProducts().subscribe({
        next: (data) => {
          expect(data.length).toBe(3);
          done();
        },
        error: () => {
          fail();
        }
      });

      const request = mock.expectOne("http://localhost:9000/products");
      console.log(request.request.url);
      request.flush([
        {id: 1, name: "N1",  price: 1000, description: "D1"},
        {id: 2, name: "N2",  price: 2000, description: "D2"}, 
        {id: 3, name: "N3",  price: 3000, description: "D3"}
      ]);

  });

  it('getProductsWithPromise', (done) => {
    
    
    
    service.getProductsWithPromise().then((data) => {

        expect(data.length).toBe(3);
          done();

    });

    const request = mock.expectOne("http://localhost:9000/products");
    console.log(request.request.url);
    request.flush([
      {id: 1, name: "N1",  price: 1000, description: "D1"},
      {id: 2, name: "N2",  price: 2000, description: "D2"}, 
      {id: 3, name: "N3",  price: 3000, description: "D3"}
    ]);

});

it('getProductsWithCallback', (done) => {
    
    
    
  service.getProductsWithCallback((data) => {

      expect(data?.length).toBe(3);
        done();

  }, () => {});

  const request = mock.expectOne("http://localhost:9000/products");
  console.log(request.request.url);
  request.flush([
    {id: 1, name: "N1",  price: 1000, description: "D1"},
    {id: 2, name: "N2",  price: 2000, description: "D2"}, 
    {id: 3, name: "N3",  price: 3000, description: "D3"}
  ]);

});
});
