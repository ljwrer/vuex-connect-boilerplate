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
  render (h) {
    return (<table class={'table is-bordered is-striped'}>
      <thead>
        <tr>
          {
            this.head.map((head) => (<th key={head.key}>{head.renderHead ? head.renderHead.call(this, h, head) : head.title}</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          this.body.map(row => (<tr key={row.id}>
            {
              this.head.map(head => (<td key={`${row.id}_${head.key}`}>{head.render ? head.render.call(this, h, row) : row[head.key]}</td>))
            }
          </tr>))
        }
      </tbody>
    </table>)
  }
}
