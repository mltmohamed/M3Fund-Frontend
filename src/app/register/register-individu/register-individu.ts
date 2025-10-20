import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-individu',
  imports: [],
  templateUrl: './register-individu.html',
  styleUrl: './register-individu.css'
})
export class RegisterIndividu {
 
  // Variable pour stocker l'URL de l'image de prévisualisation
  profileImagePreview: string | ArrayBuffer | null = null;

  constructor(private router: Router) { } // Injectez Router si nécessaire

  /**
   * Gère la sélection d'un fichier de profil et crée une URL de prévisualisation.
   * @param event L'événement de changement d'input de fichier.
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      
      // Utilisation de FileReader pour lire le fichier
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.profileImagePreview = reader.result;
      };
    }
  }

  /**
   * Méthode de soumission du formulaire (à implémenter)
   */
  onSubmit(): void {
    console.log('Formulaire soumis.');
    // Ici, vous enverriez les données à votre API
  }
  
  /**
   * Gère le clic sur le bouton "Retour" (Navigation Angular)
   */
  goBack(): void {
    // Exemple de navigation vers la page précédente ou une page spécifique
    window.history.back(); // Pour revenir à la page précédente
    // Ou utilisez le Router Angular:
    // this.router.navigate(['/accueil']); 
    console.log('Action de retour déclenchée.');
  }

}
