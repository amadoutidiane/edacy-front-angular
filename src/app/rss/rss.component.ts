import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item';
//import { newRss } from 'src/models/newRss';

import { RssServiceService } from 'src/services/rss-service.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.sass']
})
export class RssComponent implements OnInit {
  newRssList: Item[] = [];
  title:string = "";
  page:number = 1;
  count: number = 0;
  tableSize : number = 5;
  tableSizes: any = [5, 10, 15, 20];

  constructor( private rssService:RssServiceService) { }

  ngOnInit(): void {
    this.getRss();
  }
   onTableDataChnage(event: any){
     this.page = event;
     this.getRss();
   }
   onTableSizeChnage(event: any): void{
     this.tableSize = event.target.value
     this.page = 1;
     this.getRss();
  }
  datax:any;
   getRss(){
    this.rssService.getConfig().subscribe((data)=>{
     
     this.title = data.channel.title
     this.newRssList = data.channel.item
     this.datax = data.channel.item[0]
     console.log(this.datax)
    })
   }
}
