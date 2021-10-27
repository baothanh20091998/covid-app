import React from 'react'
import Header from '../../components/header/header.component'
import home from "../../img/contact/house_PNG11.png"
import mail from "../../img/contact/email_PNG1.png"
import phone from "../../img/contact/phone_PNG463.png"
import "./contact.style.scss"

export default function Contact() {
    return (
        <section className="contact">
            <Header></Header>
            <div className="contact__info">
                <div className="contact__img"></div>
                <div className="contact__info">
                    <div className="contact__content">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.5877793366503!2d106.67932145773611!3d10.767906818628143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1f8d4cba91%3A0x3589bb43ad3ceae3!2zTMO0IEQgLSBjaHVuZyBjxrAgTmd1eeG7hW4gVGhp4buHbiBUaHXhuq10LCBQaMaw4budbmcgMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1631004667442!5m2!1svi!2s" width="450" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="contact__content">
                        <div className="contact__item">
                            <div className="contact__item--img">
                                <img src={phone} alt="" />
                            </div>
                            <div className="contact__item--text">
                                <p className="text--title">Phone</p>
                                <a href="tel:0921758718">
                                    <p>0921 758 718</p>
                                </a>
                            </div>
                        </div>
                        <div className="contact__item">
                            <div className="contact__item--img">
                                <img src={mail} alt="" />

                            </div>
                            <div className="contact__item--text">
                                <p className="text--title">Email</p>
                                <a href="mailto:hlb.thanh20091998@gmail.com">
                                    <p>hlb.thanh20091998@gmail.com</p>
                                </a>
                            </div>
                        </div>
                        <div className="contact__item">
                            <div className="contact__item--img">
                                <img src={home} alt="" />

                            </div>
                            <div className="contact__item--text">
                                <p className="text--title">Address</p>
                                <div className="address">
                                    <p>219 Lo D Nguyen Thien Thuat Apartment, Ward 1, District 3</p>
                                    <p>Ho Chi Minh City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
