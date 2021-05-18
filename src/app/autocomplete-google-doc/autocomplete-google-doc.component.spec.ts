import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteGoogleDocComponent } from './autocomplete-google-doc.component';

describe('AutocompleteGoogleDocComponent', () => {
  let component: AutocompleteGoogleDocComponent;
  let fixture: ComponentFixture<AutocompleteGoogleDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteGoogleDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteGoogleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
