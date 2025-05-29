import React, { useState } from "react";
import styles from "../../styles/ContactUs.module.css";
import Footer from "../../Components/Footer/Footer";

const coverImages = [
  "/HomepagePhotos/home11.jpg",
  "/HomepagePhotos/home12.jpg",
  "/HomepagePhotos/home13.jpg",
];

const sideImages = [
  "/HomepagePhotos/home14.jpg",
  "/HomepagePhotos/home11.jpg",
  "/HomepagePhotos/home13.jpg",
  "/HomepagePhotos/home12.jpg",
];

const ContactUs = () => {
  // React state for all form fields
  const [formData, setFormData] = useState({
    coupleName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    weddingDate: "",
    location: "",
    packageType: "",  // renamed from 'package' (avoid reserved keyword)
    guestCount: "",
    moodboards: "",
    referral: "",
    eventDetails: "",
  });

  // Handle inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler
  const sendEmail = async (e) => {
    e.preventDefault();

    // Prepare data to match backend expected fields:
    // Adjust keys to your backend API's expected property names.
    const dataToSend = {
      from_name: formData.coupleName,
      email: formData.email,
      phone: formData.countryCode + formData.phone,
      wedding_date: formData.weddingDate,
      wedding_location: formData.location,
      packageType: formData.packageType,
      guest_count: formData.guestCount,
      event_details: formData.eventDetails,
      moodboard: formData.moodboards,
      source: formData.referral,
    };

    try {
      const response = await fetch("http://localhost:5000/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Enquiry sent successfully!");
        // Reset form
        setFormData({
          coupleName: "",
          email: "",
          countryCode: "+91",
          phone: "",
          weddingDate: "",
          location: "",
          packageType: "",
          guestCount: "",
          moodboards: "",
          referral: "",
          eventDetails: "",
        });
      } else {
        alert("Failed to send enquiry");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      {/* Cover Section */}
      <section className={styles.coverSection}>
        <div className={styles.coverSlider}>
          {coverImages.map((img, index) => (
            <img
              src={img}
              key={index}
              alt={`Cover ${index}`}
              className={styles.coverImage}
            />
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.leftSide}>
          {sideImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Side ${idx}`}
              className={styles.sideImage}
            />
          ))}
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.formHeading}>
            Help us learn more about your wedding
          </h2>

          <form className={styles.enquiryForm} onSubmit={sendEmail}>
            <input
              type="text"
              name="coupleName"
              placeholder="Name of the couple"
              value={formData.coupleName}
              onChange={handleChange} 
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className={styles.phoneGroup}>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              >
                <option value="+91">IN +91</option>
                {/* Add more country codes if needed */}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <label className="form-label" htmlFor="weddingDate">
              Wedding Date *
            </label>
            <input
              type="date"
              id="weddingDate"
              name="weddingDate"
              value={formData.weddingDate}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Wedding Location"
              value={formData.location}
              onChange={handleChange}
            />
            <textarea
              name="eventDetails"
              placeholder="Details of all events (with dates)"
              value={formData.eventDetails}
              onChange={handleChange}
            />

            <label className="form-label">Select a Photography Package *</label>
            <div className="radio-group" onChange={handleChange}>
              <label>
                <input
                  type="radio"
                  name="packageType"
                  value="Couple Photoshoot"
                  checked={formData.packageType === "Couple Photoshoot"}
                  required
                />
                Couple Photoshoot
              </label>
              <label>
                <input
                  type="radio"
                  name="packageType"
                  value="Couple Photoshoot & Videos"
                  checked={formData.packageType === "Couple Photoshoot & Videos"}
                />
                Couple Photoshoot & Videos
              </label>
              <label>
                <input
                  type="radio"
                  name="packageType"
                  value="Wedding Photography"
                  checked={formData.packageType === "Wedding Photography"}
                />
                Wedding Photography
              </label>
              <label>
                <input
                  type="radio"
                  name="packageType"
                  value="Wedding Photography & Films"
                  checked={formData.packageType === "Wedding Photography & Films"}
                />
                Wedding Photography & Films
              </label>
            </div>

            <input
              type="text"
              name="guestCount"
              placeholder="Estimated guest count"
              value={formData.guestCount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="moodboards"
              placeholder="Link to moodboards (if any)"
              value={formData.moodboards}
              onChange={handleChange}
            />
            <input
              type="text"
              name="referral"
              placeholder="How did you hear about us?"
              value={formData.referral}
              onChange={handleChange}
            />

            <button type="submit">Send</button>
          </form>

          <p className={styles.note}>
            We take up very limited weddings per year, so please share as many
            details as possible. Contact us for availability and a meet-up
            consultation to discuss packages and details:
            <br />
            <br />
            <strong>connect@korakagazmedia.com</strong>
            <br />
            <strong>+91 9876543210</strong>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;

