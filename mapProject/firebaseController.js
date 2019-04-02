var locationsRef = firebase.database().ref('locationData/');
var locationsDataArray=[];

locationsRef.on('value', function(snapshot){
  snapshotToArray(snapshot);
  updateLocations();
});

function snapshotToArray(snapshot){
  var loactionArray=[];
  snapshot.forEach(function(childSnapshot){
    var item= childSnapshot.val();
    locationArray.push(item);
  });
  locationsDataArray = locationArray;
}
