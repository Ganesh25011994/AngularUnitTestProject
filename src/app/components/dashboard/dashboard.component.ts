import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';
import {GoogleChartsModule , ChartType, ChartSelectionChangedEvent, getPackageForChart, ScriptLoaderService, Row, Column} from 'angular-google-charts';
import { TaskService } from '../../services/tasks/task.service';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from '../../Utils/ChartConfiguration';
declare const google:any;
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,GoogleChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit,AfterViewInit{
  private readonly chartPackage = getPackageForChart(ChartType.BarChart);
  @ViewChild('container', { read: ElementRef })
  private containerEl!: ElementRef<HTMLElement>;

  chartType = ChartType.ColumnChart

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

  initianSearchIndex = 0
  myColumns = [ChartConfiguration.SearchCriterias[this.initianSearchIndex], 'Leads Count',{role:'style'}]

  chartOptions = {
    title: `Lead Summary of ${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
    chartArea: {width: '50%'},
    hAxis: {
      title: `${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
      minValue: 0
    },
    vAxis: {
      title: 'Quantity'
    }
  };
  myData!:Row[] 
  taskservice = inject(TaskService)
  chartData$  = this.taskservice.fetchChartsData('zone',true)
  constructor(private loaderService: ScriptLoaderService){  
   
    }
  ngOnInit(): void {
   
    
  }

  
  ngAfterViewInit(): void {

   
  }


  drawBasic(){
   
    const data = google.visualization.arrayToDataTable();
    const chart = new google.visualization.BarChart(this.containerEl.nativeElement);

    chart.draw(data, this.chartOptions);
  }

  onSelectChart(e:ChartSelectionChangedEvent){
    this.initianSearchIndex+=1
    if(this.initianSearchIndex < ChartConfiguration.SearchCriterias.length){
      this.chartData$ =  this.taskservice.fetchChartsData(
        ChartConfiguration.SearchCriterias[this.initianSearchIndex],true)

        this.chartOptions = {...this.chartOptions,
          title:`Lead Summary of ${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
          hAxis: {
            title: `${ChartConfiguration.SearchCriterias[this.initianSearchIndex]}`,
            minValue: 0
          }}
    }
    
    
  }
}


/*

zonal data - name - zone name , value - number 

onselection of zone - show branches lead summary 


*/