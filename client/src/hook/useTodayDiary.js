import useSWR from "swr";
import ApiRequest from "../util/ApiRequest";

export default function useTodayDiary() {
  const { data, error } = useSWR("/diary/today/", ApiRequest.getTodayDiary);

  return {
    diaries: data ? data.diaries : null,
    isLoading: !error && !data,
    isError: error,
  };
}
