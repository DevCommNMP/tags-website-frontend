import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/baseUrl";
import LoaderImg from "../components/LoaderImg";

const OrderTracking = () => {
  // Encoded credentials
  const encodedCredentials = "YW1yZWVuLmludHJhQGdtYWlsLmNvbToxMjM0NTY=";

  // Status lookup object
  const statusLookup = {
    1: "Order Uploaded",
    2: "Order Assigned",
    3: "Order Failed",
    4: "Pickup Pending",
    5: "Picked",
    6: "Intransit",
    7: "Out for Delivery",
    8: "Order Cancelled",
    9: "Shipment Cancelled",
    10: "Delivered",
    11: "Delivery Failed",
    12: "RTO Pending",
    13: "RTO Delivered",
    14: "Heldup",
    15: "Lost",
    16: "Damaged",
    17: "Contact Customer Care",
    18: "Arrived at Destination",
    19: "Cancellation Requested",
    20: "RTO Undelivered",
    21: "Pickup Cancelled by Merchant",
    22: "Pickup Cancelled by Courier",
    23: "Pickup Failed",
    24: "Auto Cancelled",
    25: "Order Processing",
  };

  const { id } = useParams();
  const [orderStatusDetails, setOrderStatusDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [awbno, setAwbno] = useState("");

  useEffect(() => {
    const fetchOrderStatus = async () => {
      
      try {
        const response = await axios.get(`${baseUrl}/api/track-order/${id}`);

        setAwbno(response.data.awb_no);
    
        const tekipostResponse = await axios.post(
          "https://api.tekipost.com/connect/pull-tracking",
          {
            awb_no: awbno,
          },
          {
            headers: {
              Authorization: `Bearer ${encodedCredentials}`,
            },
          }
        );

        console.log(tekipostResponse.data.data);
        setOrderStatusDetails(tekipostResponse.data.data);
        console.log(orderStatusDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatus();
  }, [id]);

  const trackingData = (time) => {
    const date = new Date(time);
  
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
  
    // Format hours for 12-hour clock
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  
    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  return (
    <>
      <Header />
      <h2 style={styles.header}>Track Order</h2>
      <div style={styles.container}>
        {loading ? (
          <div style={styles.loading}>
            <LoaderImg />
          </div>
        ) : (
          <div style={styles.trackingContainer}>
            {orderStatusDetails ? (orderStatusDetails.map((detail, index) => (
              <div key={index} style={styles.trackingItem}>
                <div style={styles.status}><span role="img" aria-label="truck">🚚</span>{statusLookup[detail.status_id]}</div>
                <div style={styles.location}>
                  <span role="img" aria-label="location" style={styles.icon}>
                    📍
                  </span>
                  {detail.current_location}
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div style={styles.date}>
                    <span role="img" aria-label="calendar" style={styles.icon}>
                      📅
                    </span>
                    {trackingData(detail.courier_event_date_time).date}{" "}
                  </div>
                  <div style={styles.date}>
                    <span role="img" aria-label="time" style={styles.icon}>
                      🕛
                    </span>
                    {trackingData(detail.courier_event_date_time).time}{" "}
                  </div>
                </div>
              </div>
            ))) : (
              <div  style={styles.trackingItem}>
                <div style={{textAlign:"center",fontSize:30}}><span role="img" aria-label="truck">🚚</span>{statusLookup[4]}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );





}


const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
  },
  error: {
    textAlign: "center",
    fontSize: "18px",
    color: "red",
  },
  trackingContainer: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  trackingItem: {
    padding: "15px",
    borderBottom: "1px solid #e0e0e0",
  },
  status: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  location: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
  date: {
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "8px",
  },
};

export default OrderTracking;
