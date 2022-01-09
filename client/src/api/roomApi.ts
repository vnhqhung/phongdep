import { ListParams, ListResponse, Room } from 'models';
import axiosClient from './axiosClient';

const roomApi = {
  getAll(params: ListParams): Promise<ListResponse<Room>> {
    const url = '/rooms';
    return axiosClient.get(url, { params });
  },
  get(id: String): Promise<Room> {
    const url = `/rooms/${id}`;
    return axiosClient.get(url);
  },
  add(data: Room): Promise<Room> {
    const url = '/rooms';
    return axiosClient.post(url, { data });
  },
  update(data: Room): Promise<Room> {
    const url = '/rooms';
    return axiosClient.patch(url, { data });
  },
  delete(id: string): Promise<any> {
    const url = `/rooms/${id}`;
    return axiosClient.delete(url);
  },
};

export default roomApi;
