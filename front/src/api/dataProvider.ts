import ky from 'ky-universal';

export const api = ky.extend({
	prefixUrl: 'http://localhost:8000/api/'
});

export function objectToQueryString(obj: Record<string, string | boolean>): string {
	return Object.entries(obj)
		.filter(([, value]) => value !== '' && value !== false)
		.map(([key, value]) => `${encodeURIComponent(key)  }=${  encodeURIComponent(value)}`)
		.join('&');
}
