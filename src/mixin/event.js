export default {
  methods: {
    addEvent (bus, event, handler) {
      if (!this.$_event_busMap) {
        this.$_event_busMap = new Map()
      }
      bus.$on(event, handler)
      if (!this.$_event_busMap.has(bus)) {
        this.$_event_busMap.set(bus, new Map())
      }
      const eventMap = this.$_event_busMap.get(bus)
      if (!eventMap.has(event)) {
        eventMap.set(event, [])
      }
      eventMap.get(event).push(handler)
    }
  },
  beforeDestroy () {
    this.$_event_busMap.forEach((eventMap, bus) => {
      eventMap.forEach((handlerList, event) => {
        while (handlerList.length) {
          bus.$off(event, handlerList.shift())
        }
      })
      eventMap.clear()
    })
    this.$_event_busMap.clear()
    delete this.$_event_busMap
  }
}
