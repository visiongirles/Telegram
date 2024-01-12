import { useEffect, useState } from 'react';

// const pad = (num) => (num < 10 ? '0' : '') + num;
// const toIsoString = (date) => {
//   const tzo = -date.getTimezoneOffset();
//   const dif = tzo >= 0 ? '+' : '-';
//   return (
//     date.getFullYear() +
//     '-' +
//     pad(date.getMonth() + 1) +
//     '-' +
//     pad(date.getDate()) +
//     'T' +
//     pad(date.getHours()) +
//     ':' +
//     pad(date.getMinutes()) +
//     ':' +
//     pad(date.getSeconds()) +
//     dif +
//     pad(Math.floor(Math.abs(tzo) / 60)) +
//     ':' +
//     pad(Math.abs(tzo) % 60)
//   );
// };

export default function Component({ url }: { url: string }) {
  const [data, isLoading, error] = useFetch(url);
  console.log(data, isLoading, error);
  if (!data) return <></>;

  return (
    <div>
      <span>{data['id']}</span>
      <span>{isLoading ? 'true' : 'false'}</span>
      <span>{error}</span>
    </div>
  );
}

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // флаг отмены
    let cancelled = false;

    setIsLoading(true);
    setData(null);
    setError(null);
    console.log('123');
    fetch(url)
      .then((res) => res.json())
      .then((respData) => {
        if (!cancelled) setData(respData);
      })
      .catch((e) => {
        if (!cancelled) setError(e);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      // выставим признак того, что запрос отменен
      cancelled = true;
    };
  }, [url]);

  return [data, isLoading, error];
}
