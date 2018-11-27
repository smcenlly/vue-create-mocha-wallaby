import { expect } from 'chai'
import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  // Scenario 1: Check text content
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.be.equal('Welcome to Your Vue.js App')
  })

  // Scenario 2: Check type of props
  it('should props count is Number', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({
      propsData: { count: 1 }
    }).$mount()
    expect(typeof vm.$props.count).to.be.equal('number')
  })

  // Scenario 3: Check props default value
  it('should props default value of count is 1 ', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$props.count).to.be.equal(1)
  })

  // Scenario 4: Check props bound value
  it('should props count is Number', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({
      propsData: { count: 2 },
    }).$mount()
    expect(vm.$props.count).to.be.equal(2)
  })

  // Scenario 5: data "itemCount"
  it('should itemCount is 0', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.itemCount).to.be.equal(0)
  })

  // Scenario 6: increase data "itemCount" with "increaseCount()"
  it('should itemCount is increased by increaseCount()', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.itemCount).to.be.equal(0)
    vm.increaseCount()
    expect(vm.itemCount).to.be.equal(1)
    vm.increaseCount() // 2
    vm.increaseCount() // 3
    expect(vm.itemCount).to.be.equal(3)
  })

  // Scenario 7: computed property "reversedMessage"
  it('should reverseMessage is based on msg', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.msg = 'Hello'
    expect(vm.msg).to.be.equal('Hello')
    expect(vm.reversedMessage).to.be.equal('olleH')
    vm.msg = 'Tomato'
    expect(vm.reversedMessage).to.be.equal('otamoT')
  })
})
