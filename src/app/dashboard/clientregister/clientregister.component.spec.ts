import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientregisterComponent } from './clientregister.component';

describe('ClientregisterComponent', () => {
  let component: ClientregisterComponent;
  let fixture: ComponentFixture<ClientregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientregisterComponent]
    });
    fixture = TestBed.createComponent(ClientregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
