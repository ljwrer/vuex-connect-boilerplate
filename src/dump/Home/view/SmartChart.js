import DumpChart from './DumpChart'
import { connect } from 'vuex-connect'
export default connect({
  gettersToProps: {
    data: 'home/chartData',
    index: 'home/drawIndex'
  }
})('SmartChart', DumpChart)
