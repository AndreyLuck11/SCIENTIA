import ky from "ky";

export const api = ky.create({prefixUrl: 'http://localhost:8000/'});

export function objectToQueryString(obj: Record<string, string>): string {
    return Object.entries(obj)
        .filter(([, value]) => value !== '')
        .map(([key, value]) => `${encodeURIComponent(key)  }=${  encodeURIComponent(value)}`)
        .join('&');
}
