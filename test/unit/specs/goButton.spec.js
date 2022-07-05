import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import KGoButton from '../../../src/items/go-button/go-button.vue'
describe('Go Button', function () {
  it('variant', () => {
    const wrapper = shallowMount(KGoButton, {
      propsData: {
        variant: 'danger'
      }
    })
    expect(wrapper.find('button').classes()).to.contain('bg-danger')
  })

  it('theme light', () => {
    const wrapper = shallowMount(KGoButton, {
      propsData: {
        theme: 'light'
      }
    })
    expect(wrapper.find('button').classes()).to.contain('light')
  })

  it('theme dark', () => {
    const wrapper = shallowMount(KGoButton, {
      propsData: {
        theme: 'dark'
      }
    })
    expect(wrapper.find('button').classes()).to.contain('dark')
  })

  it('slot', () => {
    const wrapper = shallowMount(KGoButton, {
      slots: {
        default: 'Go'
      }
    })
    expect(wrapper.find('span.text').text()).to.equal('Go')
  })

  it('escape html', () => {
    const wrapper = shallowMount(KGoButton, {
      slots: {
        default: 'Go'
      }
    })
    expect(wrapper.vm.escapeHtml('<>"\'`')).to.equal('&lt;&gt;&quot;&#39;&#x60;')
    expect(wrapper.vm.escapeHtml('https://kozmonos.com?q=1&q2=2')).to.equal('https://kozmonos.com?q=1&q2=2')
  })
})
