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
          renderHead: {
            functional: true,
            render () {
              return (<div>
                <SmartCheckboxAll/>
                <SmartDropButton/>
              </div>)
            }
          },
          render: SmartCheckbox,
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
