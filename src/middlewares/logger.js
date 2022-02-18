const logger =
    (store) => (next) => (action) => {
      console.group('Action Type ', action.type)
      console.log('The action ', action)
      const results = next(action)
      console.log('The new state is', store.getState())
      console.groupEnd()
      return results
    }

export default logger