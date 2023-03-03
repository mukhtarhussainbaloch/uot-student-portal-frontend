import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { profilePic } from 'src/app/models/profile-pic';


@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {
  
  @Output() onUploadProfilePic: EventEmitter<profilePic>= new EventEmitter;
	imageUrl: string= "../assets/profile-placeholder.png";
	//imageSrc: string="";
  	msg: any = "";
  	formGroup: FormGroup;
    fileName!: string;
  constructor(private fb: FormBuilder) {
	this.formGroup= this.fb.group({
		id: new FormControl(null),
		imageSrc: new FormControl('', [Validators.required])
	})
   }

  ngOnInit(): void {
  }
  selectFile(event: any) {  
	  const reader = new FileReader();
    //const URL = window.URL;
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileName = file.name;
      if(file.size > 512209){
        this.msg= "file size should not exceed 0.5 MB"
      }
      else{
        reader.readAsDataURL(file);   
        this.msg=""; 
        reader.onload = () => {
          this.imageUrl = reader.result as string;
          this.formGroup.patchValue({
            imageSrc: reader.result
          });
        };
      }
      
	}

	}
	onUpload(){
    this.onUploadProfilePic.emit(this.formGroup.value);
	}

}
