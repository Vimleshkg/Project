import React from 'react'
import starWars from './starWarsDashboard.jpg'
export default function Dashboard() {
  return (
    <div className="dashboard">
    <div className="dashboardImg">
<img src={starWars} alt="" />
    </div>

    < div className="dashboardDesc">
         <h2>Welcome to Star Wars <br/> Dashboard</h2>
         </div>

         < div className="dashboarParagraph">
         <p> Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
         
         </div>

    </div>
  )
}
