# Paris Velib Map
[ReactJS] Training with Velib API in Paris area

# Technologies
- ReactJS
- React Google Maps (with Clusters)
- Bulma CSS
- Webpack
- fetch w/ Promise

# Features
###/!\ This repo does not use Redux for state management.

**However**, it uses a 3-level bidirectional data flow:

1. The *\<Stations>* component is a container wrapping two components: *\<Map>* and *\<StationCard>*.
2. *\<Stations>* contains the `handleMarkerClick` function which is passed to the *\<Map>* component as `props`, which passes it to the *\<GoogleMapWrapper>* component, which also passes it to each *\<Marker>* component created.
2. Then, when a user clicks on a marker, the `handleMarkerClick` function (passed as props) is called with the marker as argument, allowing the *\<Stations>* container to set the station selected (marker clicked) in the current **state**.
3. The selected station set in the current **state** is passed as props to the \<StationCard> component, which can then display all the informations about the station.

# Preview
![velib](https://cloud.githubusercontent.com/assets/6444106/20282305/7f713e7a-aab4-11e6-8d0d-aa360f7b582f.PNG)
