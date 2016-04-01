# Photo Album - Backbone

This is a simple Backbone app, used for educational purposes.

## Set-up

1. Run ```bower install``` to install dependencies (Angular, Angular route, and Angular mocks).
2. Open index.html in your browser.

### Create a "Hello World" Backbone app

This is the barest of the bare bones for Backbone.

Conceptually, these are the steps needed to create a Backbone app.

1. Create an index.html file with:
  * Backbone as the first script
  * ```<script src="models/AppModel.js"></script>```
  * ```<script src="views/AppView.js"></script>```
  * ```<script src="app.js"></script>```

You need at least one Backbone model, to hold some data.

You also need at least one Backbone view, to render this data as a DOM element.

The app.js file will be the entry point for your Backbone app.

2. In app.js, attach the DOM element from the top-level view to the body.

```
var appModel = new AppModel();
var appView = new AppView({ model: appModel });
$('body').append(appView.render());
```

3. Create three folders: ```models```, ```views```, and ```collections```.