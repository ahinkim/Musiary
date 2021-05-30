import useSWR from "swr";
import ApiRequest from "../util/ApiRequest";

export default function useMusicHistory() {
  const { data, error } = useSWR("/history/music", ApiRequest.getMusicHistory);
  return {
    musicHistory: data ? data : null,
    isLoading: !error && !data,
    isError: error,
  };
}
