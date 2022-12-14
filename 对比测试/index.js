import { observe } from './observer'
import { initWatch } from './state'

const options = {
  data:{
    car: {
      brand: 'Ford'
    }
  },
  watch: {
    'car.brand': {
      handler(newValue) {
        console.log('新值', newValue)
      },
      immediate: true
    }
  }
}
observe(options.data)
// debugger
initWatch(options.data, options.watch)

options.data.car.brand = 'Benz'