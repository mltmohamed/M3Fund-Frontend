import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  imports: [],
  templateUrl: './card-project.html',
  styleUrl: './card-project.css'
})
export class CardProject {
    @Input() amount: string = '';
    @Input() category: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() progress: string = '';
    @Input() collaborators: string = '';
    @Input() dateDebut: string = '';
    @Input() dateFin: string = '';
    @Input() avancement: string = '';
}
