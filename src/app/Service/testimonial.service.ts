import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }

  testimonials = [
  	{"name" : "Saul Goodman" , "path" : "assets/img/testimonial-1.jpg" , "job" : "Ceo &amp; Founder" , "text" : "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."},
  	{"name" : "Sara Wilsson" , "path" : "assets/img/testimonial-2.jpg" , "job" : "Designer" , "text" : " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."},
	{"name" : "Jena Karlis" , "path" : "assets/img/testimonial-3.jpg" , "job" : "Store Owner" , "text" : " Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."}
];
}
