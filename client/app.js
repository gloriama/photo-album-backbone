//Create an instance of PhotoCollection with the seed data
var photoCollection = new PhotoCollection(initialPhotos);

//Create an instance of AppModel with photoCollection
var appModel = new AppModel({ collection: photoCollection });

//Create an instance of AppView with appModel
var appView = new AppView({ model: appModel });

//Attach it to the DOM
$('body').append(appView.render());