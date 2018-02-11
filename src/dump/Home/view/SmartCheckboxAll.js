import DumpCheckbox from './DumpCheckbox.vue'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    'input': 'home/toggleAll'
  },
  gettersToProps: {
    'checked': 'home/HasCheckedAll'
  }
})('SideBarCheckbox', DumpCheckbox)
