import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DSRM';

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
  ) {}

  openComp(inp){
    this.router.navigate([inp])
  }
}
