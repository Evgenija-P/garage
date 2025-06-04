import { BASE_URL_IMG } from '@/constants/APIConfig';

export function getCarImage(url: string | undefined) {
  return url ? `${BASE_URL_IMG}${url}` : '/images/no-image.jpg';
}
