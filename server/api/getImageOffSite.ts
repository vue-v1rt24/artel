export default defineEventHandler(async (event) => {
  const res = await $fetch('http://176.53.163.5:5000/wp-json/artel/off-site');

  return res;
});
