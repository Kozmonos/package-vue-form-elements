import vModel from './vModel.mixin';
export default {
	mixins: [vModel],
	props: {

		value: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			required: true
		},
		color: {
			type: String
		}, radius: {
			type: String
		},

		required: {
			type: Boolean,
			default: false,
		},
		variant: {
			type: String,
			default: "primary",
		},
		theme: {
			//light - dark -transparent
			type: String,
			default: "light"
		},
	}
}