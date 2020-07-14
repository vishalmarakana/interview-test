import React, { useState, useEffect } from "react";
import { fetchShipments } from "../../api";
import ShipmentSheet from "./shipment-sheet";
import { SHIPMENT_SHEET_COLUMNS } from "./columns";
const Shipments = () => {
  const [shipments, setShipments] = useState([]);

  useEffect( () => {
    fetchShipments()
    .then(response => {
      setShipments(response);
    });
  },[]);

  return (
     <ShipmentSheet columns={SHIPMENT_SHEET_COLUMNS} data={shipments} />
  );
};

export default Shipments;