import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildService } from '../servies/child.service';
import { ParentService } from '../servies/parent.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childData: any[] = [];
  parentId: number;
  sender: string;
  receiver: string;
  totalAmount: number;
  currentPage: number;
  noData: boolean = false;

  constructor(private childService: ChildService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* Subscribing to changes in the route parameters. Whenever the route parameters change, the code inside the callback function will be executed. */
    this.route.paramMap.subscribe((params) => {
      this.parentId = parseInt(params.get('parentId'));
      this.sender = params.get('sender');
      this.receiver = params.get('receiver');
      this.totalAmount = parseFloat(params.get('totalAmount'));
      this.currentPage = parseFloat(params.get('currentPage'));
      this.loadChildData(this.parentId);
    });
  }

  /* The function retrieves child data based on a parent ID and updates the "childData" property with the retrieved data,
  while also setting the "noData" property to true if there is no child data. */
  loadChildData(parentId: number) {
    this.childService.getChildData(parentId).subscribe((data: any) => {
        this.childData = data;
        this.noData = this.childData.length == 0;
      });
  }
}
