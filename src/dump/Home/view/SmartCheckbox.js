import DumpCheckbox from './DumpCheckbox.vue'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    'input': 'entities/home/toggleItem'
  },
  stateToProps: {
    'checked': function (state, getters) {
      return getters['entities/home/hasChecked'](this.id)
    }
  }
})('SmartCheckbox', DumpCheckbox)
