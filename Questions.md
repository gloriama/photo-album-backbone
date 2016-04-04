# Open Questions

These are questions that bear research to better understand Backbone.

1. Can the top-level AppModel feasibly be an AppCollection instead? (Consider the case where your entire app really just needs one collection of data, e.g. a music library or a photo album.) Is there something that models provide that collections do not?

2. What is the difference between .append and .html for subviews, in regards to view listeners being set or lost?

3. Relatedly, what is the canonical way (or at least one good way) to decide on when to use .append and .html?

4. Should subviews re-render themselves, or should their parent view re-render them? Or is this context-dependent (i.e. lowest level view that can handle the re-render should do so)?

5. Clarify the exact means of transfer of data between:
  * model -> view
  * view -> model
  * child model/collection -> parent model
  * model -> enclosing collection
  * child view -> parent view

6. Clarify if child model/collection -> parent model is the only time that .trigger() is needed. How about for model -> enclosing collection?

7. Clarify the above usage of .trigger() - is it the only way to get the job done?