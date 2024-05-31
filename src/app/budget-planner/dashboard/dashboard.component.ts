import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public router: Router) { }

  lastMonthsIncome = ['January : $151,000' , 'February : $61,000', 'March : $61,000'];
  currentMonthIncome = '$63,150'

   //Expense
   lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
   currentMonthExpense = '$1500';
  
   //Todo Trans
   todoTransactions = [
     { description: 'Pay electricity bill' },
     { description: 'Submit monthly report' },
     { description: 'Buy groceries' },
     { description: 'Call insurance company' }
   ];
 
   //Total
   totalCurrentMonthIncome = 2000;
   totalCurrentMonthExpense = 1500;
 
   onIncome() {
     this.router.navigate(['/budget-planner/income']);
   }
   onExpense() {
     this.router.navigate(['/budget-planner/expense']);
   }
   onTodo() {
     this.router.navigate(['/budget-planner/todo']);
   }
   
   //Calculate Total
   get currentMonthSavings(): number {
     return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
   }

}
