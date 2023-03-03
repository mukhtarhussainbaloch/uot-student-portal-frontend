import {Component, OnInit} from '@angular/core';
import {SidenavRoute} from "../../models/models";
import {ConfigService} from "../../services/config.service";

const MY_WORK_ROUTES = 'my-work-routes';
const CUSTOMER_ROUTES = 'customers-routes';
// const SALES_ROUTES = 'sales-routes';
// const COLLATERAL_ROUTES = 'collateral-routes';
// const MARKETING_ROUTES = 'marketing-routes';
const STUDENT_ROUTES = 'student-routes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  public myWorkRoutes: SidenavRoute[] | undefined;
  public customerRoutes: SidenavRoute[] | undefined;
  public studentRoutes: SidenavRoute[] | undefined;

  constructor(private configService: ConfigService) {
  }

  async loadNavListItems() {

    this.configService.get(MY_WORK_ROUTES).subscribe(data => {
      this.myWorkRoutes = data;
    });

    this.configService.get(CUSTOMER_ROUTES).subscribe(data => {
      this.customerRoutes = data
    });

    this.configService.get(STUDENT_ROUTES).subscribe(data => {
      this.studentRoutes = data;
    });

  }

  ngOnInit(): void {
    this.loadNavListItems();
  }
}
