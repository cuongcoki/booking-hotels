import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);
  return (
    <div>
      <Title
        align={"left"}
        title="Room Listrings"
        font={"outfit"}
        subTitle="View,edit or manage listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium">
                Price / night
              </th>
              <th>
                <th className="py-3 px-4 text-gray-800 font-medium text-center">
                  Actions
                </th>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm border-t border-gray-300">
            {rooms.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-3 px-4 text-gray-700  border-gay-300">
                  <p>{item.roomType}</p>
                </td>
                <td className="py-3 px-4 text-gray-700  border-gay-300 max-sm:hidden">
                  <p>{item.amenities.join(", ")}</p>
                </td>
                <td className="py-3 px-4 text-gray-700  border-gay-300">
                  <p>{item.pricePerNight}</p>
                </td>
                <td className="py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
