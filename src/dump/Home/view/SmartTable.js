import DumpTable from './DumpTable'
import SmartCheckboxAll from './SmartCheckboxAll'
import SmartCheckbox from './SmartCheckbox'
import SmartDropButton from './SmartDropButton'
import { connect } from 'vuex-connect'
export default connect({
  stateToProps: {
    head () {
      return [
        {
          renderHead () {
            return (<div>
              <SmartCheckboxAll/>
              <SmartDropButton/>
            </div>)
          },
          render (h, {id}) {
            return (<SmartCheckbox id={id}/>)
          },
          key: 'operation'
        },
        {
          title: '平台',
          key: 'platform'
        },
        {
          title: 'uv',
          key: 'uv'
        },
        {
          title: 'pv',
          key: 'pv'
        }
      ]
    }
  },
  gettersToProps: {
    'body': 'home/allDataList'
  }
})('SmartTable', DumpTable)
