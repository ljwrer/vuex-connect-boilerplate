export default {
  name: 'DumpTable',
  props: {
    head: {
      type: Array,
      default: []
    },
    body: {
      type: Array,
      default: []
    }
  },
  render () {
    return (<table class={'table is-bordered is-striped'}>
      <thead>
        <tr>
          {
            this.head.map((head) => (<th key={head.key}>{head.renderHead ? <head.renderHead/> : head.title}</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          this.body.map(row => (<tr key={row.id}>
            {
              this.head.map(head => (<td key={`${row.id}_${head.key}`}>{head.render ? <head.render id={row.id}/> : row[head.key]}</td>))
            }
          </tr>))
        }
      </tbody>
    </table>)
  }
}
