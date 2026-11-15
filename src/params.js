/**
 * https://svelte.dev/e/kit/params_export_missing
 * params_export_missing
 */
import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
	integer: (param) => (/^\d+$/.test(param) ? Number(param) : undefined)
});
