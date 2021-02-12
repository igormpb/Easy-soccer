import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadTimePage } from './cad-time.page';

describe('CadTimePage', () => {
  let component: CadTimePage;
  let fixture: ComponentFixture<CadTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
