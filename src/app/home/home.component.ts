import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../components/skills/skills.component';
import { HeroComponent } from "../components/hero/hero.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { ContactComponent } from "../components/contact/contact.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkillsComponent, HeroComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
}