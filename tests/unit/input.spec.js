import { mount } from '@vue/test-utils'
import { expect } from "chai";
import KInput from '../../src/items/input.vue'
describe("Input", function () {

	it("variant", () => {
		const wrapper = mount(KInput, {
			propsData: {
				label: 'test',
				variant: 'danger'
			}
		});
		expect(wrapper.find("label").classes()).to.contain('text-danger')
		expect(wrapper.find("input").classes()).to.contain('border-danger')
	})

	it("theme light", () => {
		const wrapper = mount(KInput, {
			propsData: {
				label: 'test',
				theme: 'light'
			}
		});
		expect(wrapper.find("input").classes()).to.contain('text-light')
	})


	it("theme dark", () => {
		const wrapper = mount(KInput, {
			propsData: {
				label: 'test',
				theme: 'dark'
			}
		});
		expect(wrapper.find("input").classes()).to.contain('text-dark')
	})

	it("label", () => {
		const wrapper = mount(KInput, {
			propsData: {
				label: 'test'
			}
		});
		expect(wrapper.find("label").text()).to.equal("test");
	})


	it("focus", () => {
		const wrapper = mount(KInput, {
			propsData: {
				label: 'test'
			}
		});
		wrapper.find("input").trigger('focus')

		expect(wrapper.find(".form-field").classes()).to.contain('form-field--is-active')

	})

})