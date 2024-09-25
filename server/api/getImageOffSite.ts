import { TypeOffSLider } from '../types/getImageOffSite.types';

export default defineEventHandler(async (event) => {
  const res = await $fetch<string>('http://176.53.163.5:5000/wp-json/artel/off-site');

  return JSON.parse(res) as TypeOffSLider;
});
