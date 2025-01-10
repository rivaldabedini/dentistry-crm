import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { EventCalendarComponent } from "../event-calendar/event-calendar.component";

@Component({
  selector: 'app-schedule-appointment',
  standalone: true,
  imports: [CommonModule, EventCalendarComponent],
  templateUrl: './schedule-appointment.component.html',
  styleUrl: './schedule-appointment.component.scss'
})
export class ScheduleAppointmentComponent {
}
