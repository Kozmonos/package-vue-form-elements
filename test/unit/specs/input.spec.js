import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import KInput from '../../../src/items/input/input.vue'
describe('Input', function () {
  it('variant', () => {
    const wrapper = mount(KInput, {
      propsData: {
        label: 'test',
        variant: 'danger'
      }
    })
    expect(wrapper.find('label').classes()).to.contain('text-danger')
    expect(wrapper.find('input').classes()).to.contain('border-danger')
  })

  it('theme light', () => {
    const wrapper = mount(KInput, {
      propsData: {
        label: 'test',
        theme: 'light'
      }
    })
    expect(wrapper.find('input').classes()).to.contain('text-light')
  })

  it('theme dark', () => {
    const wrapper = mount(KInput, {
      propsData: {
        label: 'test',
        theme: 'dark'
      }
    })
    expect(wrapper.find('input').classes()).to.contain('text-dark')
  })

  it('label', () => {
    const wrapper = mount(KInput, {
      propsData: {
        label: 'test'
      }
    })
    expect(wrapper.find('label').text()).to.equal('test')
  })

  // it('input trigger', (done) => {
  //   const wrapper = mount(KInput, {
  //     propsData: {
  //       label: 'test'
  //     }
  //   })
  //   wrapper.find('.form-field__input').trigger('input')
  //   wrapper.vm.$nextTick(() => {
  //     wrapper.vm.onInput(wrapper.find('.form-field__input').element)
  //     expect(wrapper.find('.form-field__input').emitted()).to.equal(true)
  //     done()
  //   })
  // })

  it('input', async () => {
    const oldInputData = 'test'
    const newInputData = 'test changed'

    const wrapper = mount(KInput, {
      propsData: {
        label: 'test',
        text: oldInputData
      }
    })

    expect(wrapper.find('input').element.value).to.equal(oldInputData)
    wrapper.find('input').setValue(newInputData)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().update.length).to.equal(1)
    expect(wrapper.emitted().update[0][0]).to.equal(newInputData)
  })

  it('focus and blur', () => {
    const wrapper = mount(KInput, {
      attachTo: document.body,
      propsData: {
        label: 'test'
      }
    })
    wrapper.find('.form-field__input').trigger('focus')
    expect(wrapper.find('.form-field').classes()).to.contain('form-field--is-active')
    wrapper.find('.form-field__input').trigger('blur')
    expect(wrapper.find('.form-field').classes()).to.not.contain('form-field--is-active')
  })
  it('required blur', () => {
    const wrapper = mount(KInput, {
      attachTo: document.body,
      propsData: {
        label: 'test',
        required: true
      }
    })
    wrapper.find('.form-field__input').trigger('focus')
    expect(wrapper.find('.form-field').classes()).to.contain('form-field--is-active')
    wrapper.find('.form-field__input').trigger('blur')
    expect(wrapper.find('.form-field').classes()).to.not.contain('form-field--is-active')
  })
})
