import React from "react";

function InvoiceDatas({ clientName, senderName, clientAddress, senderAddress,  }) {
  console.log(clientAddress);
  return (
   
      
      <tr>
         <td>{clientName}</td>
         <td>{clientAddress.city}</td>
         <td>{clientAddress.street}</td>
         <td>{senderName}</td>
        
      </tr>

      
    
  );
}

export default InvoiceDatas;
