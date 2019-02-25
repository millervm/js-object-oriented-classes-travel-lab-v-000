class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return new Date("Jan 01, " + year).getFullYear() - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    function horizontalNumber(avenue) {

    };
    //const horizontalDistance =
    //eastWest.findIndex(function(avenue) {return avenue === this.endingLocation.horizontal});
    //}) - eastWest.findIndex(function(avenue) {return avenue === this.beginningLocation.horizontal});

    const horizontalDistance = eastWest.findIndex(function(avenue) {return avenue == this.beginningLocation.horizontal;});
    const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    return verticalDistance;
  };
};
