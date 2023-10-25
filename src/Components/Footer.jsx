import React from 'react'

const Footer = () => {
    const day = new Date();
    console.log(day);
    const year = day.getFullYear();
    console.log(year);
  return (
    <footer>
        <p>Copyright ©  {year}</p>
    </footer>
  )
}

export default Footer