import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/drawdetail';
import { DetailService} from '../services/detail.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  details: Detail[];
  constructor(private detailservice: DetailService) { }

  ngOnInit() {
    this.details = this.detailservice.getFeatured();
  }

}
