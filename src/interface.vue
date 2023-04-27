<template>
  <v-input
    v-bind="$attrs"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="font"
    :model-value="value"
    @update:model-value="emitValue"
    :dir="direction"
  >
    <template
      v-if="iconLeft"
      #prepend
    ><v-icon :name="iconLeft" /></template>
    <template
      v-if="iconRight"
      #append
    ><v-icon :name="iconRight" /></template>
  </v-input>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  onBeforeMount,
} from "vue";
import { useApi } from "@directus/extensions-sdk";
// const axios = require('axios');
import { get } from "lodash";

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    resultsPath: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    font: {
      type: String as PropType<"sans-serif" | "serif" | "monospace">,
      default: "sans-serif",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: undefined,
    },
  },
  emits: ["input"],
  setup(props, { emit }) {
    const api = useApi();

    onBeforeMount(async () => {
      try {
        const newValue = await fetchResultsRaw();
        emit("input", newValue);
      } catch (error) {
        emit("input", '');
      }
    });

    return { emitValue };

    async function fetchResultsRaw() {
      const { url } = props;
      const res = await api.get(url);
      return props.resultsPath ? get(res.data, props.resultsPath) : res.data;
    }

    function emitValue(value: string) {
      emit("input", value);
    }
  },
});
</script>
