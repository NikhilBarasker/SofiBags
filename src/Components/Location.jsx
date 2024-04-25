import React from 'react'

export default function Location() {
  return (
    <div>
      <h1 className="hd" style={{marginBottom:"30px"}}>
        Location
      </h1>
      <iframe
        className="locdiv"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0911091955854!2d79.09980157401529!3d21.148772180530727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c011f8b8d1%3A0xbff68551732d59df!2sSofi%20bags%20and%20novelties%20Pvt%20ltd!5e0!3m2!1sen!2sin!4v1710144171983!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
