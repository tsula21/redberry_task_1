// import React, { useContext, useState, useEffect } from "react";
// import "./DropDownMenu.css";
// import { UserContext } from "../../UserContext";
// import left_arrow from "../../Assets/form/down_arrow.svg";

// const DropDownMenu = ({ index }) => {
//   const { educationInfo, setEducationInfo, degreeArr } =
//     useContext(UserContext);

//   return (
//     <div className="dropdown">
//       <div className="dropdown-btn">
//         {selected ? selected : "აირჩიეთ ხარისხი"}
//         <img
//           src={left_arrow}
//           onClick={() => setIsActive(!isActive)}
//           alt="left_arrow"
//         />
//       </div>
//       {isActive && (
//         <div className="dropdown-content">
//           {degreeArr.map((item) => {
//             return (
//               <div
//                 className="dropdown-item"
//                 key={item.id}
//                 onClick={(e) => {
//                   setSelected(e.target.textContent);
//                   setIsActive(false);
//                 }}
//               >
//                 <p>{item.title}</p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropDownMenu;
