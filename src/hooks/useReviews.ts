import useSWR from 'swr';

import { fetcher } from '@/utils/api-request.util';

export default function useReviews() {
  const { data, error } = useSWR({ url: `reviews` }, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
