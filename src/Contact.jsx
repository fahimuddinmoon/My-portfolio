import pic from '../public/Image/icons8-whatsapp-96.png'
import pic2 from '../public/Image/icons8-phone-contact-96.png'
import pic3 from '../public/Image/icons8-email-96.png'

const Contact = () => {
    return (
        <div id="contact">
            <h2 className="text-4xl font-bold text-center mb-9">Contact With Me</h2>

            <div className="lg:flex items-center gap-5 my-6 justify-evenly">

                <div className="border-2 border-blue-400 rounded-3xl text-center p-2 sm:p-4 mb-4 bg-white text-black">
                    <img className="mx-auto" src={pic3} alt="" />
                    <h3 className="text-2xl font-bold" > Email Address : - </h3>
                    <p><a className="text-blue-600 text-lg font-bold sm:text-2xl Sm:font-bold" >fahimmoon103@gmail.com</a></p>
                </div>
                <div className="border-2 border-blue-400 rounded-3xl text-center p-2 sm:p-4 mb-4 bg-white text-black">
                    <img className="mx-auto" src={pic2} alt="" />
                    <h3 className="text-2xl font-bold" > Mobile NO : -  </h3>
                    <p><a className="text-blue-600 text-lg font-bold sm:text-2xl Sm:font-bold" href="">+8801864466864</a></p>
                </div>
                <div className="border-2 border-blue-400 rounded-3xl text-center p-2 sm:p-4 mb-4 bg-white text-black">
                    <img className="mx-auto" src={pic} alt="" />
                    <h3 className="text-2xl font-bold" > WhatsApp : -  </h3>
                    <p><a className="text-blue-600 text-lg font-bold sm:text-2xl Sm:font-bold" href="https://wa.me/8801864466864">https://wa.me/8801864466864</a></p>
                </div>

            </div>
        </div>
    );
};

export default Contact;