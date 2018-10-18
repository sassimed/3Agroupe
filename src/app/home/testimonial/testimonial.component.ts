import { Component, OnInit } from '@angular/core';
import  {TestimonialService} from '../../Service/testimonial.service';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(private TestimonialService : TestimonialService) { }

  testimonials = [];
  ngOnInit() {
  	this.testimonials = this.TestimonialService.testimonials;
  }

}
