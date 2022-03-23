import { shallowMount } from '@vue/test-utils'
import { expect } from "chai";
import KCheckbox from '../../src/items/checkbox.vue'
describe("Checkbox", function () {


	it("variant", () => {
		const wrapper = shallowMount(KCheckbox, {
			propsData: {
				variant: 'danger',
				value: true
			}
		});
		expect(wrapper.find("span.checkbox").classes()).to.contain('border-danger')
		expect(wrapper.find("span.checkbox").classes()).to.contain('bg-danger')
	})

	it("theme light", () => {
		const wrapper = shallowMount(KCheckbox, {
			propsData: {
				theme: 'light'
			}
		});
		expect(wrapper.find("span.checkbox-name").classes()).to.contain('text-light')
	})


	it("theme dark", () => {
		const wrapper = shallowMount(KCheckbox, {
			propsData: {
				theme: 'dark'
			}
		});
		expect(wrapper.find("span.checkbox-name").classes()).to.contain('text-dark')
	})


	it("slot name", () => {
		const wrapper = shallowMount(KCheckbox, {
			slots: {
				default: "test"
			}
		});
		expect(wrapper.find("span.checkbox-name").text()).to.equal("test")
	})


	it("value true", () => {
		const wrapper = shallowMount(KCheckbox, {
			propsData: {
				value: true
			}
		});
		expect(wrapper.vm.checkedBg).to.not.equal("")
		expect(wrapper.vm.checkedData).to.equal(true)
		expect(wrapper.find("input").element.checked).to.equal(true)
	})


	it("value false", () => {
		const wrapper = shallowMount(KCheckbox, {
			propsData: {
				value: false
			}
		});

		expect(wrapper.vm.checkedData).to.equal("")
		expect(wrapper.find("input").element.checked).to.equal(false)
	})

})