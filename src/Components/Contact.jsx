import React from 'react'
import Location from './Location';

export default function Contact() {
  return (
    <div>
      <div className='contactbody'>
        <div>
          <div id="contact">
            <div className="contdiv">
              <form className="form">
                <p className="title">Register </p>
                <p className="message">
                  Register and get our details to contact us
                </p>
                <div className="flex">
                  <label>
                    <input
                      required=""
                      placeholder="Enter your Name"
                      type="text"
                      className="input2"
                    />
                    
                  </label>

                  <label>
                    <input
                      required=""
                      placeholder="Last Name"
                      type="text"
                      className="input2"
                    />
                    
                  </label>
                </div>

                <label>
                  <input
                    required=""
                    placeholder="Email"
                    type="email"
                    className="input2"
                  />
                  
                </label>

                <label>
                  <input
                    required=""
                    placeholder="Mobile"
                    type="text"
                    className="input2"
                  />
                  
                </label>
                <label>
                  <textarea
                    required=""
                    placeholder="Message"
                    type="text"
                    className="input2"
                  />
                  
                </label>
                <button className="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
}
