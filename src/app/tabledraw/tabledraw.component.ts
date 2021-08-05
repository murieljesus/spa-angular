import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';
import { Detail } from '../shared/drawdetail';

@Component({
  selector: 'app-tabledraw',
  templateUrl: './tabledraw.component.html',
  styleUrls: ['./tabledraw.component.scss']
})
export class TabledrawComponent implements OnInit {

  details: Detail[];
  selectedDetail: Detail;

  constructor( private detailService: DetailService ) { }

  ngOnInit() {
    this.details = this.detailService.getDetail();
    
  }

}
