import DumpChart from './DumpChart'
import { connect } from 'vuex-connect'
export default connect({
  gettersToProps: {
    data: 'entities/home/chartData',
    index: 'entities/home/drawIndex'
  }
})('SmartChart', DumpChart)
