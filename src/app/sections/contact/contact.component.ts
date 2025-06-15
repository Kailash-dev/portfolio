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

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((profile) => {
      this.contactDetails = profile?.about?.details;
    });
  }
}
