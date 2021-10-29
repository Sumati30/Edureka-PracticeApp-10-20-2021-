import {Component} from '@angular/core';

@Component ({
    selector : 'app-search',
    templateUrl : './search.component.html',
    styleUrls : ['./search.component.css']
})

export class SearchComponent{
    title : string = "Book your trip with Us";
    locations : any[] = [
        {
            "_id" : 1,
            "city_name" : "Goa",
            "city" : 1,
            "country_name" : "India" 
        },
        {
            "_id" : 2,
            "city_name" : "Indore",
            "city" : 2,
            "country_name" : "India" 
        },
        {
            "_id" : 3,
            "city_name" : "Hyderabad",
            "city" : 3,
            "country_name" : "India" 
        },
        {
            "_id" : 4,
            "city_name" : "Kolkatta",
            "city" : 4,
            "country_name" : "India" 
        },
        {
            "_id" : 5,
            "city_name" : "Mumbai",
            "city" : 5,
            "country_name" : "India" 
        },
        {
            "_id" : 6,
            "city_name" : "Bangalore",
            "city" : 6,
            "country_name" : "India" 
        },
    ]
}