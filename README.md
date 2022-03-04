# UFOs
 Use JavaScript and HTML to create an innteractive presentation of data on UFO sightings in McMinnville, Oregon.

## Overview of Project

### Background
[Phase1](https://github.com/aberloro/UFOs/blob/main/static/js/appPhase1.js) of this project converted a large JavaScript array into an interactive HTML table that allowed readers to filter UFO events by date.  

### Purpose
Phase2 of this project will allow readers to filter UFO sightings on multiple simultaneous criteria: date, city, statem country, and shape. 

### Deliverables
 - Filter UFO sightings on multiple criteria
 - Description of code, and an analysis of drawbacks and additional recomendations

### Resources
 - Data Sources: [data.js](https://github.com/aberloro/UFOs/blob/main/static/js/data.js) 
 - Technology: JavaScript ES6, HTML, Bootstrap

 ### Overview of Code
 - [app.js](https://github.com/aberloro/UFOs/blob/main/static/js/app.js) file that holds code to:
    - Import the [data.js](https://github.com/aberloro/UFOs/blob/main/static/js/data.js) file.
    - Execute a "buildTable" function for an html table where each row is an object from the data.js file and each cell is a value for a key:value pair in that object.
    - Execute an "updateFilters" function that stores all user-input filters in an objecct and passes it through a "filterTable" function.
    - Execute a "filterTable" function based on the filters stored in the "updateFilters" object.
    - Pass the "filterTable" output to the "buildTable" function to produce a table with data filtered according to user input. 
 - [index.html](https://github.com/aberloro/UFOs/blob/main/index.html) file to apply Bootstrap3 componenets and [styles.css](https://github.com/aberloro/UFOs/blob/main/static/css/style.css) style to the filtered table from the app.js file. 

## Results
 Performing a search is as easy as adding the filters you want applied to the form on screen and hitting enter or clicking the screen! You can use as many or as few filters as you like and can reset by clicking the nav bar, the refresh buttonon your browser, or deleting any input you entered.

 Select by date: 1/1/2010...the UFOs out here celebrating New Years...
  img

 Select by date and shape: 1/1/2010, triangle
 img

 Select by date, shape, and state: 1/11/2010, triangle, ca
 img

 Select by date, shape, state, city: 1/11/2010, triangle, ca, el cajon
 img


 ## Summary
  ### Limitations
 One drawback of this webpage is the data is not as clean as it could be.  The duration of each event, for example is entered in a number of formats: "1 minute", "4min" "half an hour", and "5-6 minutes" are all entries.  If the duration data formatting were more consistent we could filter that as well.  A second problem with this page is that the filters require an exact match.  Entering the state of "CA" or "Ca" would not return results where "ca" would.  Updating the javascript to look for a lose mathc instead of exact match would make this page more user friendly.

 ### Additional Analysis
I recommend the folllowing edits for future development:
 - Cleaning the duration and shape data for format consistency to allow for filters on those attributes as well.
 - Relaxing the "exact match" requirement of the filters.
 - Adding a drop down menu for each filter so users know what their options in each category...and allowing multiple filters per category. (For example seeing trianlgle and sphere shapes filterd into one output.)
 - Including a link to each event with any coorobating evidence: 
    - other accounts of the same event at the same time / location.
    - accounts of similar events as the object 'traveled" as shown by similar sightings transposed over a map vs time.
    - photos and testimonials.
 - Adding information on any "official explanation" or myth busting of each event.
 - Adding interactive plots, for example to show a record of events over time or by loction, or a bar graph of all events by shape. 

    