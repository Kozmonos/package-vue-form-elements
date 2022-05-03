import { mount } from '@vue/test-utils'
import { expect } from "chai";
import KTextarea from '../../src/items/textarea/textarea.vue'
describe("Textarea", function () {

	it("variant", () => {
		const wrapper = mount(KTextarea, {
			propsData: {
				label: 'test',
				variant: 'danger'
			}
		});
		expect(wrapper.find("label").classes()).to.contain('text-danger')
		expect(wrapper.find("textarea").classes()).to.contain('border-danger')
	})

	it("theme light", () => {
		const wrapper = mount(KTextarea, {
			propsData: {
				label: 'test',
				theme: 'light'
			}
		});
		expect(wrapper.find("textarea").classes()).to.contain('text-light')
	})


	it("theme dark", () => {
		const wrapper = mount(KTextarea, {
			propsData: {
				label: 'test',
				theme: 'dark'
			}
		});
		expect(wrapper.find("textarea").classes()).to.contain('text-dark')
	})


	it("label", () => {
		const wrapper = mount(KTextarea, {
			propsData: {
				label: 'test'
			}
		});
		expect(wrapper.find("label").text()).to.equal("test");
	})


	it("focus", () => {
		const wrapper = mount(KTextarea, {
			propsData: {
				label: 'test'
			}
		});
		wrapper.find("textarea").trigger('focus')

		expect(wrapper.find(".form-field").classes()).to.contain('form-field--is-active')

	})

})