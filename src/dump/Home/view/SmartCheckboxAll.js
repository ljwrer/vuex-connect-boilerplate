import DumpCheckbox from './DumpCheckbox.vue'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    'input': 'entities/home/toggleAll'
  },
  gettersToProps: {
    'checked': 'entities/home/hasCheckedAll'
  }
})('SideBarCheckbox', DumpCheckbox)
