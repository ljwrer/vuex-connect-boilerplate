import DumpCheckbox from './DumpCheckbox.vue'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    'input': 'home/toggleItem'
  },
  stateToProps: {
    'checked': function (state, getters) {
      return getters['home/hasChecked'](this.id)
    }
  }
})('SmartCheckbox', DumpCheckbox)
