import { Component } from '@angular/core';

@Component({
  selector: 'app-register-individu',
  imports: [],
  templateUrl: './register-individu.html',
  styleUrl: './register-individu.css'
})
export class RegisterIndividu {
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const previewImage = document.getElementById('profile-preview') as HTMLImageElement;
        if (previewImage) {
          previewImage.src = reader.result as string;
        }
      };
    }
  }

}
