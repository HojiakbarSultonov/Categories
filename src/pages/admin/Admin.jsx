// import React, { useState } from "react";
// import { nanoid } from "nanoid";
// function Admin({ invoice, setInvoice }) {
//   //   const [senderName, setSenderName] = useState("");
//   //   const [senderStreet, setSenderStreet] = useState("");
//   //   const [senderCity, setSenderCity] = useState("");
//   //   const [receiverName, setReceiverName] = useState("");
//   //   const [receiverStreet, setReceiverStreet] = useState("");
//   //   const [receiverCity, setReceiverCity] = useState("");
//   // const [invoice, setInvoice] = useState({
//   //     clientName:'',
//   //     clientAddress:{
//   //         city:'',
//   //         street:''
//   //     },
//   //     senderName:'',
//   //     senderAddress:{
//   //         city:'',
//   //         street:''
//   //     },
//   // })

//   const [data, setData] = useState({
//     clientName: "",
//     senderName: "",
//     clientAddress: {
//       city: "",
//       street: "",
//     },
//     senderAddress: {
//       city: "",
//       street: "",
//     },
//   });

//   const handleChange = (e) => {
//     setData((state) => {
//       return {
//         ...state,
//         [e.target.id || e.target.name]: e.target.id
//           ? {
//               ...state[e.target.id],
//               [e.target.name]: e.target.value,
//             }
//           : e.target.value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setInvoice([...invoice, { ...data, id: nanoid() }]);
//     // const data = {
//     //   senderName,
//     //   senderAddress: {
//     //     senderCity,
//     //     senderStreet,
//     //   },
//     //   receiverName,
//     //   receiverAddress: {
//     //     receiverCity,
//     //     receiverStreet,
//     //   },
//     // };
//     // console.log(data);
//   };

//   return (
//     <div>
//       <form
//         className="bg-red-600 flex flex-col gap-3 w-2/4 m-auto p-10"
//         onSubmit={handleSubmit}
//       >
//         {/* <input type="text" name="senderName" placeholder="sender Name" onChange={e=>setSenderName(e.target.value)}/>
//         <input type="text" name="senderStreet" id="senderAdress" placeholder="sender Street" onChange={e=>setSenderStreet(e.target.value)}/>
//         <input type="text" name="senderCity" id="senderAdress" placeholder="sender City" onChange={e=>setSenderCity(e.target.value)}/>
//         <input type="text" name="receiverName" placeholder="receiver Name"  onChange={e=>setReceiverName(e.target.value)}/>
//         <input type="text" name="receiverStreet" placeholder="receiver street" id="receiverAddress" onChange={e=>setReceiverStreet(e.target.value)}/>
//         <input type="text" name="receiverCity" placeholder="receiver city"  id="receiverAddress" onChange={e=>setReceiverCity(e.target.value)}/>
//         <button type="submit">Enter</button> */}
//         {/* 1 */}
//         <input
//           type="text"
//           name="clientName"
//           placeholder="client Name"
//           onChange={handleChange}
//         />
//         {/*2*/}
//         <input
//           type="text"
//           name="street"
//           id="clientAddress"
//           placeholder=" Street"
//           onChange={handleChange}
//         />
//         {/*3*/}
//         <input
//           type="text"
//           name="city"
//           id="clientAddress"
//           placeholder="city"
//           onChange={handleChange}
//         />

//         {/*4*/}
//         <input
//           type="text"
//           name="senderName"
//           placeholder="receiver Name"
//           onChange={handleChange}
//         />

//         {/*5*/}
//         <input
//           type="text"
//           name="street"
//           id="senderAddress"
//           placeholder=" Street"
//           onChange={handleChange}
//         />
//         {/*6*/}
//         <input
//           type="text"
//           name="city"
//           id="senderAddress"
//           placeholder="city"
//           onChange={handleChange}
//         />

//         <button type="submit">Enter</button>
//       </form>
//     </div>
//   );
// }

// export default Admin;
