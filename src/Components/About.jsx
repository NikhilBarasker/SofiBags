import React from 'react'
import { FcApproval } from "react-icons/fc";
import bag from "../Photoes/bag.png"
import abtscdpic from "../Photoes/abtscdpic.png"
import Owner from "../Photoes/Owner.png"

export default function About() {
  return (
    <div>
      <div className="abtcontent">
        <div className="abouthd">
          <h1>ABOUT US</h1>
        </div>
        <div className="">
          <div className="cont1">
            <div className="para1 main-content">
              <div className="">
                <div>
                  <h3 className="subhd">THE PROMOTERS</h3>
                </div>
                <div>
                  <p id="fstintro" className="abtdetails">
                    The flagship company sofi bags and novelties Pvt. Ltd.has
                    been promoted by a team of professionals and techocrats
                    headed by <strong> HajI.Abdulsaleem Abduljabbar</strong>
                    ,chairman and managing director,with wide experienced in the
                    field and having good reputation.The senior managment of the
                    company is dedicated to the philosophy of total qulity
                    management.
                    <br />
                    <br />
                    <br />
                    That dedication has lead to the implementation of continuous
                    improvement program through out the organization. M/s Sofi
                    bags and novelties Pvt. Ltd. is a professionaly managed bag
                    manufacturing company run by the highly compenent,
                    experienced and professional businessman.The managing
                    director Haji.Abdulsaleem Abduljabbar are leading team
                    highly commited safe motivated and knowledgeable service
                    executive.
                  </p>
                </div>
              </div>
              <div className="about_image">
                <img style={{ borderRadius: "15px" }} src={bag} />
              </div>
            </div>
          </div>
          <div className="para2">
            <div className="about_image">
              <img src={abtscdpic} />
            </div>
            <div>
              <div>
                <h3 className="subhd">OUR STRENGTH</h3>
              </div>
              <div>
                <ul>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      Pioneers in the line of school bags in the centre india.
                    </li>
                  </div>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      Well laid-out manufacturing facility meeting standard
                      requirements of the industry.
                    </li>
                  </div>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      Current capacity utilization 50% on the single shift
                      basic;toll manufacturing capacity available.
                    </li>
                  </div>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      Use of in-house developed unique technology for
                      manufacturing of different product.
                    </li>
                  </div>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      promoters are experienced and technocrats.
                    </li>
                  </div>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      Experience in timely delivery of quality product in large
                      output.
                    </li>
                  </div>
                  <div style={{ display: "flex", marginLeft: "15px" }}>
                    <FcApproval />
                    <li className="abtdetails">
                      Experiance of approx 40 years in manufacturing of luggage
                      ,school bags and novelties.
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="subhd">OUR TECHNOLOGICAL POWER</h3>
          </div>
          <div>
            <ul>
              <div style={{ display: "flex", marginLeft: "15px" }}>
                <FcApproval />
                <li className="abtdetails">
                  Specializes in the devlopment and manufacture of leather
                  product.
                </li>
              </div>
              <div style={{ display: "flex", marginLeft: "15px" }}>
                <FcApproval />
                <li className="abtdetails">Scientific method of marketing.</li>
              </div>
              <div style={{ display: "flex", marginLeft: "15px" }}>
                <FcApproval />
                <li className="abtdetails">Skilled manegireal man power.</li>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "15px",
                  paddingBottom: "50px",
                }}
              >
                <FcApproval />
                <li className="abtdetails">
                  Experienced professional promote to real estate business.
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="form_container">
          <div className="div-container">
            <h3 className="subhd">FACTSHEET</h3>
            <div>
              <div>
                <h3 className="abtdetails">Basic Information</h3>
              </div>
              <table style={{ display: "block" }}>
                <div className='tablediv' style={{ display: "flex" }}>
                  <div>
                    <tr>
                      <td className="subhd2">Nature of Business</td>
                      <td className="subhd2">Manufacturer</td>
                    </tr>
                    <tr>
                      <td className="subhd2">Additional Business</td>
                      <td className="subhd2">Trader</td>
                    </tr>
                    <tr>
                      <td className="subhd2">Company CEO</td>
                      <td className="subhd2">
                        <strong>Abdul Salim</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="subhd2">Total Number of Employees</td>
                      <td className="subhd2">51 to 100 People</td>
                    </tr>
                    <tr>
                      <td className="subhd2">Year of Establishment</td>
                      <td className="subhd2">1984</td>
                    </tr>
                    <tr>
                      <td className="subhd2">Legal Status of Firm</td>
                      <td className="subhd2">
                        Limited Company (Ltd./Pvt.Ltd.)
                      </td>
                    </tr>
                    <tr>
                      <td className="subhd2">Annual Turnover</td>
                      <td className="subhd2">Upto Rs. 50 Lakh</td>
                    </tr>
                  </div>
                  <div>
                    <tr>
                      <img id="Owner" src={Owner} />
                    </tr>
                  </div>
                </div>
              </table>
              <div>
                <h3 className="abtdetails">
                  Packaging/Payment and Shipment Details
                </h3>
              </div>
              <table>
                <tr>
                  <td className="subhd2">Payment Mode</td>
                  <td className="subhd2">
                    Cash ,Credit Card, Cheque, DD, Online
                  </td>
                </tr>
                <tr>
                  <td className="subhd2">Shipment Mode</td>
                  <td className="subhd2">By Road</td>
                </tr>
              </table>
              <div>
                <h3 className="abtdetails">Statutory Profile</h3>
              </div>
              <table>
                <tr>
                  <td className="subhd2">Banker</td>
                  <td className="subhd2">
                    UNION BANK OF INDIA & STANDARD CHARTERED BANK
                  </td>
                </tr>
                <tr>
                  <td className="subhd2">GST No.</td>
                  <td className="subhd2">27AACCS4436R1ZR</td>
                </tr>
                <tr>
                  <td className="subhd2">CIN No.</td>
                  <td className="subhd2">U19100MH1994PTC076398</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
