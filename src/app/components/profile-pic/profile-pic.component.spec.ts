import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePicService } from 'src/app/services/profile-pic.service';

import { ProfilePicComponent } from './profile-pic.component';

describe('ProfilePicComponent', () => {
  let component: ProfilePicComponent;
  let fixture: ComponentFixture<ProfilePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePicComponent ],
      imports:[
        BrowserAnimationsModule,
      ],
      providers:[
        ProfilePicService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check image src field validity', () =>{
    const imageSrc = component.formGroup.controls['imageSrc'];
    expect(imageSrc.valid).toBeFalsy();

    imageSrc.setValue('');
    expect(imageSrc.hasError('required')).toBeTruthy();

  });
  it('should check form validity', () =>{
    const element: HTMLElement = fixture.nativeElement;
    const button = element.querySelector('button')!;
    component.formGroup.controls['imageSrc'].setValue('');
    //component.formGroup.controls[''].setValue('');
    expect(component.formGroup.valid).toBeFalsy();
    expect(button.disabled).toBeTruthy();
  });
});
