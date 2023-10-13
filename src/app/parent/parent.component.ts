import { Component, OnInit } from '@angular/core';
import { ParentService } from '../servies/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  sortBy: string = 'id';

  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit(): void {
    this.loadParentData(this.currentPage);
  }

  /* Retrieves paginated and sorted data from the parent service and assigns it to the corresponding variables.
  The page parameter is used to specify which page of data to retrieve. */
  loadParentData(page: number) {
    this.parentService.getPaginatedAndSortedData(page, this.sortBy).subscribe((data) => {
      this.parentData = data.data;
      this.currentPage = data.currentPage;
      this.totalPages = data.totalPages;
    });
  }

  // The function navigates to a child component with specified parameters.
  showChildData(parentId: number, sender: string, receiver: string, totalAmount: number) {
    this.router.navigate(['/child', parentId, sender, receiver, totalAmount, this.currentPage]);
  }

  // Function to change the current page
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  // Loads parent data based on the given page number.
  changePage(page: number) {
    this.loadParentData(page);
  }

  /* The function changes the sorting criteria and reloads the parent data.
  The `sortBy` parameter is a string that specifies the field by which the data should be sorted. */
  changeSort(sortBy: string) {
    this.sortBy = sortBy;
    this.loadParentData(1);
  }
}
