import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';
import { Detail } from '../shared/drawdetail';

@Component({
  selector: 'app-drawdetail',
  templateUrl: './drawdetail.component.html',
  styleUrls: ['./drawdetail.component.css']
})
export class DrawdetailComponent implements OnInit {

  details: Detail[];
  selectedDetail: Detail;

  constructor( private detailService: DetailService ) { }

  ngOnInit() {
    this.details = this.detailService.getDetail();
  }

}
