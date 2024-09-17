export const requestFetch = async (
  query: string,
  url: string = useRuntimeConfig().apiUrlGraphql,
) => {
  const res = await $fetch(url, {
    query: {
      query,
    },
  });

  return res;
};
