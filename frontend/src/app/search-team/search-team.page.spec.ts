import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchTeamPage } from './search-team.page';

describe('SearchTeamPage', () => {
  let component: SearchTeamPage;
  let fixture: ComponentFixture<SearchTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
