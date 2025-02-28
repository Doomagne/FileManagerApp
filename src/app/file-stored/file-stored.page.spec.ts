import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FileStoredPage } from './file-stored.page';

describe('FileStoredPage', () => {
  let component: FileStoredPage;
  let fixture: ComponentFixture<FileStoredPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileStoredPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FileStoredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
