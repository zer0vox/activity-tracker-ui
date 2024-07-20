import { APIs } from "../constants";
import { instance } from "../utils/axios";

export const create = (payload) => {
  return instance.post(APIs.SUBACTIVITIES, payload);
};
export const update = (id, payload) => {
  return instance.patch(APIs.SUBACTIVITIES + `${id}`, payload);
};

export const remove = (id) => {
  return instance.delete(APIs.SUBACTIVITIES + `/${id}`);
};
