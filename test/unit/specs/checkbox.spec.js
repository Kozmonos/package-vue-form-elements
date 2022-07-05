import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import KCheckbox from '../../../src/items/checkbox/checkbox.vue'

describe('Checkbox', function () {
  it('variant', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        variant: 'danger',
        value: true
      }
    })
    expect(wrapper.find('span.checkbox').classes()).to.contain('border-danger')
    expect(wrapper.find('span.checkbox').classes()).to.contain('bg-danger')
  })

  it('theme light', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        theme: 'light'
      }
    })
    expect(wrapper.find('span.checkbox-name').classes()).to.contain('text-light')
  })

  it('theme dark', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        theme: 'dark'
      }
    })
    expect(wrapper.find('span.checkbox-name').classes()).to.contain('text-dark')
  })

  it('slot name', () => {
    const wrapper = shallowMount(KCheckbox, {
      slots: {
        default: 'test'
      }
    })
    expect(wrapper.find('span.checkbox-name').text()).to.equal('test')
  })

  it('value true', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        value: true
      }
    })
    expect(wrapper.vm.checkedBg).to.not.equal('')
    expect(wrapper.vm.checkedData).to.equal(true)
    expect(wrapper.find('input').element.checked).to.equal(true)
  })

  it('value false', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        value: false
      }
    })

    expect(wrapper.vm.checkedData).to.equal(false)
    expect(wrapper.find('input').element.checked).to.equal(false)
  })

  it('value default(false)', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
      }
    })

    expect(wrapper.vm.checkedData).to.equal(false)
    expect(wrapper.find('input').element.checked).to.equal(false)
  })
  it('mouseover', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
      }
    })

    wrapper.find('label').trigger('mouseover')
    expect(wrapper.vm.hoverBorder).to.contains('border border-')
  })
  it('mouseleave', () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
      }
    })

    wrapper.find('label').trigger('mouseleave')
    expect(wrapper.vm.hoverBorder).to.equal('')
  })

  it('value changed', async () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        value: true
      }
    })
    expect(wrapper.vm.checkedData).to.equal(true)

    await wrapper.setProps({ value: false })

    expect(wrapper.vm.checkedData).to.equal(false)
  })

  it('checkedData changed', async () => {
    const wrapper = shallowMount(KCheckbox, {
      propsData: {
        value: true
      }
    })
    expect(wrapper.vm.checkedData).to.equal(true)
    // ---------------------------------------
    wrapper.setData({checkedData: false})
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input.length).to.equal(1)
    expect(wrapper.vm.checkedData).to.equal(false)
    // ---------------------------------------
    wrapper.setData({checkedData: true})
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input.length).to.equal(2)
    expect(wrapper.vm.checkedData).to.equal(true)
  })
})
