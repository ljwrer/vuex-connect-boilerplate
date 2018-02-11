import DumpList from './DumpList'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    draw: 'home/draw'
  },
  gettersToProps: {
    data: 'home/checkedPlatformList'
  }
})('SmartList', DumpList)
