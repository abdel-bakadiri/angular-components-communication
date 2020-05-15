import { ProductsStateService } from "./../products/products-state.service";
import { ProductShellListComponent } from "./../products/product-shell/product-shell-list.component";
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "pm-critera-filter",
  templateUrl: "./critera-filter.component.html",
  styleUrls: ["./critera-filter.component.css"],
})
export class CriteraFilterComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @ViewChild("filter") inputFilter: ElementRef;
  @Input() displayDetails: boolean;

  @Input() hitCount: number;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _listFilter;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(this.listFilter);
  }

  hitMessageCount: string;

  constructor(private productStateService: ProductsStateService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["hitCount"].currentValue) {
      this.hitMessageCount = `Number of products is ${changes["hitCount"].currentValue}`;
    } else {
      this.hitMessageCount = "No match product";
    }
  }

  ngAfterViewInit(): void {
    this.inputFilter.nativeElement.focus();
  }
  ngOnDestroy(): void {}

  greeting() {
    console.log("Hello from creteria component");
  }
}
