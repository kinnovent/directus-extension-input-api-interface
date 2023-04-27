import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'input-api-interface',
	name: 'Input(API)',
	description: 'An Input to get the value beforehand via API!',
	icon: 'text_fields',
	component: InterfaceComponent,
	group: 'standard',
	types: ['string'],
	options: [
		{
		  field: 'url',
		  name: '$t:url',
		  type: 'string',
		  meta: {
			required: true,
			interface: 'input',
			options: {
			  placeholder: 'https://example.com/search?q={{value}}',
			  font: 'monospace'
			},
			width: 'full'
		  }
		},
		{
		  field: 'resultsPath',
		  name: '$t:interfaces.input-autocomplete-api.results_path',
		  type: 'string',
		  meta: {
			interface: 'input',
			options: {
			  placeholder: 'result.predictions',
			  font: 'monospace'
			},
			width: 'full'
		  }
		},
		{
		  field: 'placeholder',
		  name: '$t:placeholder',
		  meta: {
			width: 'half',
			interface: 'system-input-translated-string',
			options: {
			  placeholder: '$t:enter_a_placeholder'
			}
		  }
		},
		{
		  field: 'font',
		  name: '$t:font',
		  type: 'string',
		  meta: {
			width: 'half',
			interface: 'select-dropdown',
			options: {
			  choices: [
				{ text: '$t:sans_serif', value: 'sans-serif' },
				{ text: '$t:monospace', value: 'monospace' },
				{ text: '$t:serif', value: 'serif' }
			  ]
			}
		  },
		  schema: {
			default_value: 'sans-serif'
		  }
		},
		{
		  field: 'iconLeft',
		  name: '$t:icon_left',
		  type: 'string',
		  meta: {
			width: 'half',
			interface: 'select-icon'
		  }
		},
		{
		  field: 'iconRight',
		  name: '$t:icon_right',
		  type: 'string',
		  meta: {
			width: 'half',
			interface: 'select-icon'
		  }
		}
	  ]
});
