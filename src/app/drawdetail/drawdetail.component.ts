import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { DetailService } from '../services/detail.service';
import { Detail } from '../shared/drawdetail';

@Component({
  selector: 'app-drawdetail',
  templateUrl: './drawdetail.component.html',
  styleUrls: ['./drawdetail.component.css']
})
export class DrawdetailComponent implements OnInit {

  detail:Detail;
  details: Detail[];
  selectedDetail: Detail;

  constructor( private detailService: DetailService, private route: ActivatedRoute, private location: Location ) { }

  ngOnInit() {
    this.details = this.detailService.getDetail();
    const id = +this.route.snapshot.params['id'];
    this.detail = this.detailService.getDetails(id.toString());
  }
  goBack(): void {
    this.location.back();
  }

}
