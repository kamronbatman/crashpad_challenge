angular.module('padChal')

.controller('MapCtrl', [
  '$scope',
  'uiGmapGoogleMapApi',
  function($scope, uiGmapGoogleMapApi) {
    var self = this;

    // Static set the data for now
    self.initial = {
      center: {
        "latitude": 34.11165527,
        "longitude": -118.16442252
      },
      zoom: 14,
      events: {}
    };

    // Get the User's location, if we can.
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('The user is at', position);
      // Get the user's position and make a position marker on the map
    });

    // Static set the data for now
    self.requests = {
    "results": [
        {
            "createdAt": "2015-11-01T00:56:21.733Z",
            "description": "I want to get out of town for the night, and would love to wake up near the beach. traveling alone!",
            "location": {
                "__type": "GeoPoint",
                "latitude": 34.11165527,
                "longitude": -118.16442252
            },
            "radius": 1,
            "updatedAt": "2015-11-01T00:56:21.733Z"
        },
        {
            "createdAt": "2015-11-01T09:42:32.195Z",
            "description": "I'm here for a last minute business meeting.",
            "location": {
                "__type": "GeoPoint",
                "latitude": 33.99440507,
                "longitude": -118.29968447
            },
            "radius": 3,
            "updatedAt": "2015-11-01T09:42:48.719Z"
        },
        {
            "createdAt": "2015-11-01T10:39:37.333Z",
            "description": "Here with my girlfriend exploring LA",
            "location": {
                "__type": "GeoPoint",
                "latitude": 33.95081119,
                "longitude": -118.19613157
            },
            "radius": 3,
            "updatedAt": "2015-11-01T10:39:46.419Z"
        },
        {
            "createdAt": "2015-11-02T23:27:14.361Z",
            "description": "Would like to stay in Hollywood or on the west side, where ever it's fun",
            "location": {
                "__type": "GeoPoint",
                "latitude": 33.95800954,
                "longitude": -118.27524761
            },
            "radius": 1,
            "updatedAt": "2015-11-03T03:44:48.071Z"
        },
        {
            "createdAt": "2015-11-01T05:23:07.712Z",
            "description": "Two friends here for the football game.",
            "location": {
                "__type": "GeoPoint",
                "latitude": 33.99484306,
                "longitude": -118.12709369
            },
            "radius": 10,
            "updatedAt": "2015-11-01T05:23:42.325Z"
        },
        {
            "createdAt": "2015-11-01T05:18:39.761Z",
            "description": "Want to stay near the beach for a surf session.",
            "location": {
                "__type": "GeoPoint",
                "latitude": 33.92372565,
                "longitude": -118.30529743
            },
            "radius": 3,
            "updatedAt": "2015-11-01T05:18:50.407Z"
        },
        {
            "createdAt": "2015-11-01T19:44:20.645Z",
            "description": "Just trying this out, a couch is fine.",
            "location": {
                "__type": "GeoPoint",
                "latitude": 34.03690544,
                "longitude": -118.3869378
            },
            "radius": 10,
            "updatedAt": "2015-11-01T19:45:16.229Z"
        },
        {
            "createdAt": "2015-11-01T01:50:31.315Z",
            "description": "It's my first time in LA!",
            "location": {
                "__type": "GeoPoint",
                "latitude": 34.17255984,
                "longitude": -118.33399047
            },
            "radius": 1,
            "updatedAt": "2015-11-01T01:50:42.055Z"
        },
        {
            "createdAt": "2015-11-01T10:20:37.773Z",
            "description": "I am just passing through, looking for a quiet place to sleep. I am leaving at 7am.",
            "location": {
                "__type": "GeoPoint",
                "latitude": 34.18687668,
                "longitude": -118.29914453
            },
            "radius": 1,
            "updatedAt": "2015-11-01T10:20:50.559Z"
        },
        {
            "createdAt": "2015-11-02T05:02:09.832Z",
            "location": {
                "__type": "GeoPoint",
                "latitude": 34.04152559,
                "longitude": -118.41727646
            },
            "radius": 3,
            "updatedAt": "2015-11-02T05:03:37.153Z",
            "description": "This app is amazing!!!"
        }
    ]
};
    console.log('We set the center');

    uiGmapGoogleMapApi.then(function(maps) {
      console.log('We got here!');
    });
}]);