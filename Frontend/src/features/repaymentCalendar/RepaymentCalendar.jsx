import React, { useEffect, useState } from "react";
import axios from "axios";
import "./calendar.css";
import { formatDate } from "../../utils/dateUtils";

const RepaymentCalendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [paidStatus, setPaidStatus] = useState({}); // track which payments are made

  const fetchSchedule = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/calendar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSchedule(res.data);
    } catch (error) {
      console.error("Error fetching repayment schedule", error);
    }
  };

  const handlePayment = (id) => {
    // axios.patch(
    //   `${import.meta.env.VITE_API_URL}/calendar/${id}/pay`,
    //   {},
    //   {
    //     headers: { Authorization: `Bearer ${token}` },
    //   }
    //);

    setPaidStatus((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <div className="calendar-section">
      <h3>Repayment Calendar</h3>
      <div className="calendar-grid">
        {schedule.map((entry, idx) => (
          <div
            key={entry._id || idx}
            className={`calendar-cell ${entry.status}`}
          >
            <strong>{formatDate(entry.dueDate)}</strong>
            <p>₹{entry.amount}</p>
            <p className="status-label">{entry.status.toUpperCase()}</p>
            {/* {entry.status === "upcoming" && !paidStatus[entry._id] && (
              <button onClick={() => handlePayment(entry._id)}>
                Make Payment
              </button>
            )} */}
            {entry.status === "upcoming" &&
              (!entry.paid ? (
                <button
                  onClick={async () => {
                    try {
                      const token = localStorage.getItem("token");
                      await axios.patch(
                        `${import.meta.env.VITE_API_URL}/calendar/${
                          entry._id
                        }/pay`,
                        {},
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      );

                      // Update that entry’s status in schedule
                      setSchedule((prev) =>
                        prev.map((item, i) =>
                          i === idx ? { ...item, status: "paid" } : item
                        )
                      );
                    } catch (error) {
                      console.error("Payment failed", error);
                    }
                  }}
                >
                  Make Payment
                </button>
              ) : (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  ✅ Payment Successful
                </p>
              ))}

            {paidStatus[entry._id] && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                ✅ Payment Successful
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepaymentCalendar;
