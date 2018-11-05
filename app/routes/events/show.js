import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  headData: inject(),
  model: function(params) {
    return this.store.find('event', params.slug);
  },
  afterModel(model) {
    this.get('headData').setProperties({
      title: model.get('title'),
      description: model.get('description')
    });
  }
});
