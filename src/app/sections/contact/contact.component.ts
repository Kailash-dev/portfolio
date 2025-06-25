import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactDetails: any;

  constructor(private profileService: ProfileService) {}


  onSubmit() {
  // Replace this with actual form logic or email integration
  alert("Your message has been sent!");
}
}
