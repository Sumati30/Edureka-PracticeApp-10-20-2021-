import {Component} from '@angular/core';

@Component ({
    selector : 'app-quickSearch',
    templateUrl : './quickSearch.component.html',
    styleUrls : ['./quickSearch.component.css']
})

export class QuickSearchComponent{
    hotelType : any[] = 
    [
        {
            "_id":1,
            "trip":"1",
            "name": "Business",
            "image" : "./assets/HotelAPI/buisnessTrips.jpg",
            "cost" : 5000
        },
        {
            "_id":2,
            "trip":"2",
            "name": "Holiday",
            "image" : "./assets/HotelAPI/holidayTrip.jpg ",
            "cost" : 3000
        },
        {
            "_id":3,
            "trip":"3",
            "name": "Travel",
            "image" : "./assets/HotelAPI/travelTrip.jpg ",
            "cost" : 2000
        },
        {
            "_id":4,
            "trip":"4",
            "name": "Luxury",
            "image" : "./assets/HotelAPI/luxury.jpg ",
            "cost" : 10000
        }
    ]
}