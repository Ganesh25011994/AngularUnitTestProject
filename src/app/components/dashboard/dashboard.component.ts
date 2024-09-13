import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleChartsModule , ChartType} from 'angular-google-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  chartType = ChartType.Bar
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];

  chartType2 = ChartType.PieChart
  pieChartData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ]

  chartType3 = ChartType.Bar
  BarChartData3 = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ]

zoneslist   = [
    {
      id: 1,
      city: "Chennai"
    },
    {
      id: 2,
      city: "Bangalore"
    },
    {
      id: 3,
      city: "Mumbai"
    },
    {
      id: 4,
      city: "Kolkatta"
    },
  ];

  BranchList = [
    {
      id: 1,
      branchId: 101,
      Place: "Adyar"
    },
    {
      id: 1,
      branchId: 102,
      Place: "Adyar"
    },
    {
      id: 2,
      branchId: 201,
      Place: "Koramangala"
    }
  ];

  ProductList = [
    {
      id: 1,
      branchId: 101,
      ProductId: 18053,
      Product: "Retail Loan"
    },
    {
      id: 1,
      branchId: 102,
      ProductId: 18054,
      Product: "Home Loan"
    },
    {
      id: 2,
      branchId: 201,
      ProductId: 18055,
      Product: "Vehicle Loan"
    }
  ]

  TestList = [
    {
      id: 1,
      branchId: 101,
      ProductId: 18053,
      Product: "Test1"
    },
    {
      id: 1,
      branchId: 102,
      ProductId: 18054,
      Product: "Test2"
    },
    {
      id: 2,
      branchId: 201,
      ProductId: 18055,
      Product: "Test3"
    }
  ]
}
