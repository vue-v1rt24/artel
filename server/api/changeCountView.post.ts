export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  const { id, nameField } = await readBody(event);

  const data = await $fetch(`${apiUrl}/artel/change-count`, {
    method: 'POST',
    body: {
      id,
      nameField,
    },
  });
});
