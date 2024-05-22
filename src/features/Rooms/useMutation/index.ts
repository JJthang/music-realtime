import React from "react";
import { RoomsUrl } from "src/apis/rooms.request";
import { itemUser, roomsIf } from "src/models/Room.model";
import httpRequest from "src/service/httpRequest";

const useRoomMutetion = () => {
  const [roomsData, setRoomsData] = React.useState<roomsIf[] | []>([]);

  const convertStringToArray = (val: string) => {
    const quoted = JSON.parse(val);
    const dataJSON = JSON.parse(quoted);
    return dataJSON;
  };
  const searchRooms = async (...query: unknown[]) => {
    const data = await httpRequest.getData(RoomsUrl(), ...query);
    const currentData: roomsIf[] = data.map((res) => ({
      _id: res._id,
      nameRoom: res.nameRoom,
      password: res.password,
      users: convertStringToArray(res.users),
    }));
    setRoomsData(currentData);
  };
  return {
    searchRooms,
    roomsData,
  };
};

export default useRoomMutetion;
