import { TestBed } from '@angular/core/testing';

import { GadgetService } from './gadget.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

fdescribe('GadgetService', () => {

  let service: GadgetService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      providers: [{provide: GadgetService, useClass: GadgetService}]
    });
    service = TestBed.inject(GadgetService);
    controller = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("getProducts", (done) => {

      service.getProducts().subscribe({
        next: (data) => {

          expect(data.length).toBe(3);
          done();

        }
      });

      const mockRequest = controller.expectOne(environment.productsUrl);
      mockRequest.flush([
        {id: 1, name: "n1", price: 2000},
        {id: 2, name: "n2", price: 3000},
        {id: 3, name: "n3", price: 4000},
      ]);
  })

  it("getProductsWithPromise", (done) => {

    service.getProductsWithPromise().then((data) => {
      expect(data.length).toBe(3);
      //done();

      service.getProductsWithPromise().then((data) => {
        expect(data.length).toBe(4);
        done();
      });
  
      const mockRequest2 = controller.expectOne(environment.productsUrl);
      mockRequest2.flush([
        {id: 1, name: "n1", price: 2000},
        {id: 2, name: "n2", price: 3000},
        {id: 3, name: "n3", price: 4000},
        {id: 4, name: "n3", price: 4000},
      ]);
      //done();
    });

    

    const mockRequest1 = controller.expectOne(environment.productsUrl);
    mockRequest1.flush([
      {id: 1, name: "n1", price: 2000},
      {id: 2, name: "n2", price: 3000},
      {id: 3, name: "n3", price: 4000},
    ]);
    

   

   

    
})

});
