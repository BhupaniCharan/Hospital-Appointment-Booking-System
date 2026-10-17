import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const { backendurl, token, getDoctorsData } = useContext(AppContext);
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  // ✅ Get Appointments
  const getUsersAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendurl + "/api/user/appointments",
        {
          headers: { token },
        }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ✅ Cancel Appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendurl + "/api/user/cancel-appointment",
        { appointmentId },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success("Appointment Cancelled");
        getUsersAppointments();
        getDoctorsData(); // refresh doctor slots
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ✅ Load data
  useEffect(() => {
    if (token) {
      getUsersAppointments();
    }
  }, [token]);

  return (
    <div className="p-6">
      <p className="text-2xl font-semibold mb-6">My Appointments</p>

      {appointments.length === 0 ? (
        <p>No Appointments Found</p>
      ) : (
        <div className="flex flex-col gap-6">
          {appointments.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 border rounded-lg p-4 shadow-sm"
            >
              {/* Doctor Image */}
              <div>
                <img
                  className="w-32 h-32 object-cover rounded-lg"
                  src={item.docData?.image}
                  alt={item.docData?.name}
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    {item.docData?.name}
                  </p>
                  <p className="text-gray-600">
                    {item.docData?.speciality}
                  </p>

                  <p className="text-sm font-medium mt-2">Address:</p>
                  <p className="text-sm text-gray-600">
                    {item.docData?.address?.line1}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.docData?.address?.line2}
                  </p>

                  <p className="mt-2 text-sm">
                    <span className="font-medium">Date & Time:</span>{" "}
                    {item.slotDate} | {item.slotTime}
                  </p>

                  {/* Status */}
                  <p
                    className={`mt-2 text-sm font-medium ${
                      item.cancelled
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {item.cancelled
                      ? "Appointment Cancelled"
                      : "Booked"}
                  </p>
                </div>

                {/* Buttons */}
                {!item.cancelled && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => navigate("/payment")}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Pay Online
                    </button>

                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;