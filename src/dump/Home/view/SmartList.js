import DumpList from './DumpList'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    draw: 'entities/home/draw'
  },
  gettersToProps: {
    data: 'entities/home/checkedPlatformList'
  }
})('SmartList', DumpList)
