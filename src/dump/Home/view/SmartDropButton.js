import DumpDropButton from './DumpDropButton'
import { connect } from 'vuex-connect'
export default connect({
  actionsToEvents: {
    click: 'entities/home/dropAll'
  }
})('SmartDropButton', DumpDropButton)
