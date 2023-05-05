import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataBindingComponent } from "./data-binding.component";
import { FormsModule } from "@angular/forms";

fdescribe("DataBindingComponent", () => {

    let fixture: ComponentFixture<DataBindingComponent>;
    let instance: DataBindingComponent;
    let nativeElement: any;


    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [DataBindingComponent],
            imports: [FormsModule]
            //providers: []
        }).compileComponents();

        fixture = TestBed.createComponent(DataBindingComponent);
        instance = fixture.componentInstance;
        
        fixture.detectChanges();
        nativeElement =  fixture.nativeElement;
    })

    it("Test1", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        //Class(Component)
        const instance = fixture.componentInstance;
        //View(Template)
        const debugElememt = fixture.debugElement;

        expect(fixture).toBeTruthy();
        expect(instance).toBeTruthy();
        expect(debugElememt).toBeTruthy();

    });

    it("Test2", () => {

        // const fixture = TestBed.createComponent(DataBindingComponent);
        // //Class(Component)
        // const instance = fixture.componentInstance;
        expect(instance.count).toBe(10);
        instance.inc({});
        expect(instance.count).toBe(11);

    });

    it("Test3", () => {

        expect(instance.message).toBe("Hello");
        //handle to the <span id="msg">Message: {{ message }}</span>
        let elementContent = nativeElement.querySelector("#msg").textContent;
        expect(elementContent).toContain("Hello");
        
        //handle to <input id="msgTB" [(ngModel)]="message" />
        let messageTextbox = nativeElement.querySelector("#msgTB");
        
        //expect(messageTextbox.value).toContain("Hello");
       
       
        messageTextbox.value = "Welcome";
        messageTextbox.dispatchEvent(new Event("input"));
        fixture.detectChanges();
        
        elementContent = nativeElement.querySelector("#msg").textContent;
        expect(elementContent).toContain("Welcome");
        expect(messageTextbox.value).toContain("Welcome");

        

    });


})