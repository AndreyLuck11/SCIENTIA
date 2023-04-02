import ky from "ky";

export const api = ky.create({prefixUrl: 'http://localhost:8000/'});

export function objectToQueryString(obj: Record<string, string | boolean>): string {
    return Object.entries(obj)
        .filter(([, value]) => value !== '' && value !== false)
        .map(([key, value]) => `${encodeURIComponent(key)  }=${  encodeURIComponent(value)}`)
        .join('&');
}
