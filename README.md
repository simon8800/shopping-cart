# Shopping Cart

## About

This is a mock e-commerce website to excercise the following skills:

- Client-side routing with `react-router-dom`
- Styling components with `styled-components`
- Managing data with `context` and `state`

## Lessons learned

### Routing

I think client-side routing can be straight forward, but it did take some time to get used to the syntax of how I wanted my paths to look. I will return to this project because I am enjoying making a clone of uniqlo and I'd like to implement product pages and the path /products/:productId

### Styling

I am enjoying `styled-components` a lot. It has helped me get a better handling on CSS in general by forcing me to think about how much CSS I was reusing across my components. I was often creating a new flex container and I decided to extract all flex containers into a single component that could be reused for all styled components. This pattern also led me to thinking about styling from inside-out, where I work on the smaller elements and then let the container element decide how to place them. This method of styling has been super beneficial in helping me work on one thing at a time.

### Data management

Using `context` is super helpful in helping me manage states and handler functions that needed to be passed to nested components. I don't have to go running through the waterfall of components to make something work. It's like grabbing state and functions from a central repository.

## APIs used

- [Fake Store API](https://fakestoreapi.com/)

## Credit

- Images by 
    - [Alexander Grey](https://unsplash.com/@sharonmccutcheon)
    - [Baily Alexander](https://unsplash.com/@baileyal3xander)
    - [Force Majeure](https://unsplash.com/@forcemajeure)