import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: '1m8675a3',
	dataset: 'production',
	apiVersion: '2022-03-25',
	useCdn: false
});
