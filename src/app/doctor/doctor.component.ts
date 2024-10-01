import { Component, input, Input } from '@angular/core';
import { Medecin } from '../types/medecin'; // Adjust the path as necessary

@Component({
  selector: 'app-doctor',
  standalone: true,
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctor=input.required<Medecin>();
}
