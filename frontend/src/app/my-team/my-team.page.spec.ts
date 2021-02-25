import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyTeamPage } from './my-team.page';

describe('MyTeamPage', () => {
  let component: MyTeamPage;
  let fixture: ComponentFixture<MyTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
