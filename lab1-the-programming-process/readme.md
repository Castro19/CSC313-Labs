# Lab 1: The programming process

## Description

The goal of this lab is to use an unfamiliar API to create an application.

- **Purpose**: To see what it is like in the shoes of students who may not be familiar with the programming language they are learning

- **Objective**: Log the entire experience and process of creating this application.

- **Starting point**: 01/11/2025 @ 1:00 PM

## Setup [10 mins]

- [ ] Create a new repository for this lab
- [ ] Create a new Vite project using the setup guide [here](https://openlayers.org/doc/quickstart.html)

### Understand the Project Requirements [15 mins]

1. Create an interactive map using the openlayers api library
2. The map should be centred on Cal Poly.
3. Map will include three different visual representations of icons used to represent where people enrolled in this class (and specifically in your “small” group) are from (their hometowns).
   - Gather the hometowns of the people in my group.
   - Identify their hometown locations based on the ESPG:4326 location
4. Choose a reasonable way to designate which style is associated with what number of people in that area.

### Searching through Documenation [15 mins]

- First, I will look at the project requirements above and see what features I need to use from the openlayers library.

1. How to specify a location on the map?
2. How to add a circle icon to the map?
3. How to increase the size of the circle icon?
4. How to change the color of the circle icon?

- Locate docs from the openlayers website [here](https://openlayers.org/doc/)

## Centering the Map on Cal Poly [20 mins]

- Got stuck looking through the docs
- Modified the code to have the map centered on Cal Poly
- However, it didn't work until I changed the projection to EPSG:4326
  - This took 10 mins to figure out

## Adding the Circle Icon [40 mins total]

### Stuck on how to create a circle icon

- Stuck on how to create a circle icon, so I went to take a break [20 mins]
- The next day, I pick up where I left off and try to figure out how to create a circle icon

### Found a Solution

- Found this helpful example [here](https://openlayers.org/en/latest/examples/icon-scale.html)
- I copied the code and I was able to create a circle icon but now the map was different.
- I reviewed the code and noticed that I had to to fix the layers property to include a new tile layer. with the source of OSM.

## Adding the Circle Icon of the People in my Group [15 mins]

- I had to re-adjust the code to make it easier to add multiple circle icons to the map with different colors and sizes.

## Conclusion

- Total Time: 115 mins
