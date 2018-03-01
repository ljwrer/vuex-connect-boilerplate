import { Model } from '@vuex-orm/core'

export default class HomeList extends Model {
  static fields () {
    return {
      id: this.attr(null),
      checked: this.attr(false),
      platform: this.attr(''),
      pv: this.attr(0),
      uv: this.attr(0)
    }
  }
}
HomeList.entity = 'home'
