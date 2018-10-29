import { Component, OnInit, OnDestroy, NgZone , ViewChild } from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { Group } from '../../Model/group';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';


declare var google: any;
 
  interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
  }
 
  interface Location {
    lat: number;
    lng: number;
    viewport?: Object;
    zoom: number;
    address_level_1?:string;
    address_level_2?: string;
    address_country?: string;
    address_zip?: string;
    address_state?: string;
    marker?: Marker;
  }

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})



export class InfoComponent implements OnInit, OnDestroy  {

  geocoder:any;
  public location:Location = {
    lat: 51.678418,
    lng: 7.809007,
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
    zoom: 15
  };
 
  @ViewChild(AgmMap) map: AgmMap;


	group: Group ;
  groups: Group[] = [];

  id : number ;
  private sub: any;

  

  constructor(public mapsApiLoader: MapsAPILoader,private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper,private GroupService : GroupService ,  
              private route: ActivatedRoute) 
            { 
                 this.mapsApiLoader = mapsApiLoader;
                 this.zone = zone;
                 this.wrapper = wrapper;
                 this.mapsApiLoader.load().then(() => {
                 this.geocoder = new google.maps.Geocoder();
                 });

            }

  ngOnInit() {
  	
    this.location.marker.draggable = true;  
    
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
 
         this.GroupService.groups.forEach( (group) => {
           console.log("aaa" + group.id);
           if (group.id == this.id) {
            this.group = group ;
           }
         });    
    });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  

}
