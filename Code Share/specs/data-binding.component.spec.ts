import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DataBindingComponent } from "./data-binding.component"
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

fdescribe("DataBindingComponent", () => {

    let fixture: ComponentFixture<DataBindingComponent>;
    let instance: DataBindingComponent;
    beforeEach(async () => {

        await TestBed.configureTestingModule({

            declarations: [DataBindingComponent],
            imports: [FormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(DataBindingComponent);
        instance = fixture.componentInstance;
        fixture.autoDetectChanges();
    })

    it("create instance", () => {

        var fixture = TestBed.createComponent(DataBindingComponent);
        expect(fixture).toBeTruthy();
        expect(fixture.componentInstance).toBeTruthy();
        expect(fixture.debugElement).toBeTruthy();

    })

    it("should increment count", () => {

        var fixture = TestBed.createComponent(DataBindingComponent);
        const instance = fixture.componentInstance;
        expect(instance.count).toBe(10);
        instance.inc({});
        expect(instance.count).toBe(11);
    })

    it("should update the UI on count", () => {

        const element = fixture.nativeElement;
        let ctrContent = element.querySelector("#ctr").textContent;
        expect(ctrContent).toContain("10");
        instance.inc({});
        fixture.detectChanges();
        ctrContent = element.querySelector("#ctr").textContent;
        expect(ctrContent).toContain("11");

       
        let messageTB = element.querySelector("#msg");
       
        expect(messageTB.value).toContain("Hello");
        messageTB.value = "test"
        messageTB.dispatchEvent(new Event("input"));
        fixture.detectChanges();
        expect(instance.message).toContain("test");
    })
})