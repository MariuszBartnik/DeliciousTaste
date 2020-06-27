import RestaurantReviews from './index';

import { setUpTest, findByTestAttribute, checkProps } from '../../shared/scripts/testUtils';

describe('Restaurant Reviews component', () => {
    
    describe('Checking propTypes', () => {
        it('Should render without warning', () => {

            const props = [
                {
                    id: 1,
                    rating: 4,
                    review_text: 'sample review text',
                    review_time_friendly: '2 days ago',
                    user: {
                        name: 'John',
                        foodie_level: 'master',
                        foodie_color: 'fff',
                        profile_image: 'profile image'
                    }
                },
                {
                    id: 1,
                    rating: 3,
                    review_text: 'sample review text number 2',
                    review_time_friendly: '3 days ago',
                    user: {
                        name: 'Jane',
                        foodie_level: 'super user',
                        foodie_color: 'd1d1d1',
                        profile_image: 'profile image'
                    }
                },
                {
                    id: 3,
                    rating: 5,
                    review_text: 'sample review text number 3',
                    review_time_friendly: '4 days ago',
                    user: {
                        name: 'John',
                        foodie_color: 'fff',
                        profile_image: 'profile image'
                    }
                }
            ];

            const propsErrors = checkProps(RestaurantReviews, props);
            expect(propsErrors).toBeUndefined();
        });
    });

    describe('Checking rendering', () => {
        
        let component;
        beforeAll(() => {
            const reviews = [
                {
                    review: {
                        id: 1,
                        rating: 4,
                        review_text: 'sample review text',
                        review_time_friendly: '2 days ago',
                        user: {
                            name: 'John',
                            foodie_level: 'master',
                            foodie_color: 'fff',
                            profile_image: 'profile image'
                        }
                    }
                },
                {
                    review: {
                        id: 1,
                        rating: 3,
                        review_text: 'sample review text number 2',
                        review_time_friendly: '3 days ago',
                        user: {
                            name: 'Jane',
                            foodie_level: 'super user',
                            foodie_color: 'd1d1d1',
                            profile_image: 'profile image'
                        }
                    }
                },
                {
                    review: {
                        id: 3,
                        rating: 5,
                        review_text: 'sample review text number 3',
                        review_time_friendly: '4 days ago',
                        user: {
                            name: 'John',
                            foodie_color: 'fff',
                            profile_image: 'profile image'
                        }
                    }
                }
            ];

            component = setUpTest(RestaurantReviews, { reviews });
        }) 

        it('Should render without errors', () => {
            const wrapper = findByTestAttribute(component, 'RestaurantReviews');
            expect(wrapper).toHaveLength(1);
        });

        it('Should render correct number of reviews items', () => {
            const reviewsItems = findByTestAttribute(component, 'ReviewItem');
            expect(reviewsItems).toHaveLength(3);
        });
        
    });

    describe('Lack of props', () => {
        
        it('Should not render if props were not sent', () => {
            const component = setUpTest(RestaurantReviews);
            const wrapper = findByTestAttribute(component, 'RestaurantReviews');
            expect(wrapper).toHaveLength(0);
        });
    })
    
    
});
