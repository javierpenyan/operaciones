// import { useState } from "react"
// import { UserContext } from "./UserContext"

// export const UseProvider = ({ children} ) => {

//   const [user, setUser] = useState({
//     total: 0,
//     totalIngresos: 0,
//     totalDegresos: 0
//   });

  

//   return (
//         // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
//         <UserContext.Provider value={{ user, setUser }}> 
//         {/* Aqui en el useContext.Provider envio la informacion que quiero compartir */}
//             { children } 
//         </UserContext.Provider>
//     )
// }