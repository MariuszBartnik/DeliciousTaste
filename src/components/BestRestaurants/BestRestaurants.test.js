import BestRestaurants from './index';
import { setUpTest, findByTestAttribute } from '../../shared/scripts/testUtils';



describe('Best Restaurants component', () => {    

    let component;

    beforeAll(() => {
        const city = 'Warsaw';
        const restaurants = [
            {
                "restaurant": {
                  "id": "10900327",
                  "name": "A\u00efoli",
                  "location": {
                    "address": "\u015awi\u0119tokrzyska 18, \u015ar\u00f3dmie\u015bcie P\u00f3\u0142nocne, Warszawa",
                    "locality": "\u015ar\u00f3dmie\u015bcie P\u00f3\u0142nocne",
                    "city": "Warszawa",
                    "city_id": 109,
                    "latitude": "52.2358469258",
                    "longitude": "21.0117354244",
                    "zipcode": "",
                    "country_id": 163,
                    "locality_verbose": "\u015ar\u00f3dmie\u015bcie P\u00f3\u0142nocne, Warszawa"
                  },
                  "cuisines": "Pizza, Burger, Mediterranean",
                  "timings": "09:00 to 24:00 (Mon, Tue, Wed, Thu, Sun), 09:00 to 01:00 (Fri-Sat)",
                  "highlights": [
                    "Credit Card",
                    "Takeaway Available",
                    "Dinner",
                    "Breakfast",
                    "Lunch",
                    "Indoor Seating",
                    "Wifi",
                    "Lunch Menu",
                    "Fullbar",
                    "Outdoor Seating",
                    "Pet Friendly",
                    "Nightlife"
                  ],
                  "thumb": "https://b.zmtcdn.com/data/res_imagery/10900327_RESTAURANT_188e6a7cb11620d0eba71508413ab8a8_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                  "user_rating": {
                    "aggregate_rating": "4.3",
                    "rating_text": "Very Good",
                    "rating_color": "5BA829",
                    "rating_obj": {
                      "title": { "text": "4.3" },
                      "bg_color": { "type": "lime", "tint": "700" }
                    },
                    "votes": "897"
                  },
                  "featured_image": "https://b.zmtcdn.com/data/res_imagery/10900327_RESTAURANT_188e6a7cb11620d0eba71508413ab8a8_c.jpg",
                  "phone_numbers": "22 657 21 26",
                }
              },
              {
                "restaurant": {
                  "id": "10900972",
                  "name": "U Szwejka",
                  "location": {
                    "address": "Plac Konstytucji 1, \u015ar\u00f3dmie\u015bcie Po\u0142udniowe, Warszawa",
                    "locality": "\u015ar\u00f3dmie\u015bcie Po\u0142udniowe",
                    "city": "Warszawa",
                    "city_id": 109,
                    "latitude": "52.2213930000",
                    "longitude": "21.0160250000",
                    "zipcode": "",
                    "country_id": 163,
                    "locality_verbose": "\u015ar\u00f3dmie\u015bcie Po\u0142udniowe, Warszawa"
                  },
                  "cuisines": "Polish, Czech, European",
                  "timings": "08:00 to 24:00 (Mon-Fri),10:00 to 24:00 (Sat-Sun)",
                  "highlights": [
                    "Takeaway Available",
                    "Lunch",
                    "Credit Card",
                    "Breakfast",
                    "Dinner",
                    "Live Music",
                    "Indoor Seating",
                    "Wifi",
                    "Live Sports Screening",
                    "Kid Friendly",
                    "Fullbar"
                  ],
                  "thumb": "https://b.zmtcdn.com/data/res_imagery/10900972_RESTAURANT_a8c6665b3fd8b6e8d4617c142093d91b_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                  "user_rating": {
                    "aggregate_rating": "3.7",
                    "rating_text": "Good",
                    "rating_color": "9ACD32",
                    "rating_obj": {
                      "title": { "text": "3.7" },
                      "bg_color": { "type": "lime", "tint": "600" }
                    },
                    "votes": "783"
                  },
                  "featured_image": "https://b.zmtcdn.com/data/res_imagery/10900972_RESTAURANT_a8c6665b3fd8b6e8d4617c142093d91b_c.jpg",
                  "phone_numbers": "22 339 17 10",
                }
              },
        ]
    
        component = setUpTest(BestRestaurants, {city, restaurants});
        component = component.childAt(0).dive();
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'BestRestaurantsWrapper');
        expect(wrapper.length).toBe(1); 
    });

    it('Should render correct number of restaurants items', () => {
        const restaurantItem = findByTestAttribute(component, 'BestRestaurantsItem');
        expect(restaurantItem.length).toBe(2);
    });

})
