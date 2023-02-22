import React from "react";
import InvoiceDatas from "./InvoiceDatas";
import "./Invoice.css";
function Invoices({ invoice }) {
  console.log(invoice);
  return (
    <table>
      <thead>
        <tr>
          <th>ClientName</th>
          <th>ClientCity</th>
          <th>ClienStreet</th>
          <th>SenderName</th>
          <th>SenderCity</th>
          <th>SenderStreet</th>
        </tr>
      </thead>

      <tbody>
        {invoice.map((item) => (
          <InvoiceDatas key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

export default Invoices;
