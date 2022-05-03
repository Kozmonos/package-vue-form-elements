import { shallowMount } from '@vue/test-utils'
import { expect } from "chai";
import KSelect from '../../src/items/select/select.vue'
describe("Select", function () {

	it("variant", () => {
		const wrapper = shallowMount(KSelect, {
			propsData: {
				variant: 'danger',
				options: ['a', 'b']
			}
		});
		expect(wrapper.find(".selected-item").classes()).to.contain('bg-danger')
	})

	it("theme light", () => {
		const wrapper = shallowMount(KSelect, {
			propsData: {
				theme: 'light',
				options: ['a', 'b']
			}
		});
		expect(wrapper.find("div.selected").classes()).to.contain('bg-light')
		expect(wrapper.find("div.selected").classes()).to.contain('text-dark')
		expect(wrapper.find("div.items").classes()).to.contain('text-dark')
	})


	it("theme dark", () => {
		const wrapper = shallowMount(KSelect, {
			propsData: {
				theme: 'dark',
				options: ['a', 'b']
			}
		});
		expect(wrapper.find("div.selected").classes()).to.contain('bg-dark')
		expect(wrapper.find("div.selected").classes()).to.contain('text-light')
		expect(wrapper.find("div.items").classes()).to.contain('text-light')
	})


	it("value", () => {
		const wrapper = shallowMount(KSelect, {
			propsData: {
				options: ["a", "b", "c"],
				value: "b"
			}
		});

		expect(wrapper.vm.selected).to.equal("b")
		expect(wrapper.find(".items .selected-item").text()).to.equal("b")
	})

	it("list", () => {
		const wrapper = shallowMount(KSelect, {
			propsData: {
				options: ["a", "b", "c"]
			}
		});

		expect(wrapper.findAll(".items div").length).to.equal(3)
		expect(wrapper.find(".items .selected-item").text()).to.equal("a")
	})
})