import React from 'react';
import "../assets/css/Aboutus.css";
import {Link} from "react-router-dom";

const Aboutus: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    return (
        <div className={"au-container"}>
            <div className={"au-header"}>

                <div className={"au-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"images/Plantdecor/logo1.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className={"au-btn_before"}>
                    <button>Brands</button>
                    <button>Categories</button>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                </div>

                <div className={"au-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"au-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"au-btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <Link to={"/wishlist"}><button><i className="fa-regular fa-heart"></i>Wishlist</button></Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/myaccount">
                                <button>My Account</button>
                            </Link>
                            <Link to="/">
                                <button onClick={()=>{
                                    localStorage.clear();
                                    window.location.href="/login"
                                }}>Sign Out</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button>Sign In</button></Link>
                            <Link to="/register"><button>Sign Up</button></Link>
                        </>
                    )}
                </div>


            </div>
            <div className={"au-body"}>
                <h1>About Us</h1>
                <p>Welcome to Plant Decor, your go-to destination for the finest online shopping experience in the world of plant enthusiasts in Nepal. At Plant Decor, we are dedicated to providing a delightful range of top-quality plants and accessories, making us your ultimate choice for green living.</p>

                <h2>Plant Decor - Nurturing Nature, Nurturing Homes</h2>
                <p>Discover the beauty of nature within your living spaces with Plant Decor. We strive to create an easy and trustworthy platform, ensuring that your journey into the world of plant decor is both enjoyable and seamless.</p>

                <h2>Our Commitment to You:</h2>

                <h2>Botanical Variety:</h2>
                <p>Explore our extensive collection, featuring a diverse range of plants suitable for indoor and outdoor settings. From elegant succulents to vibrant tropical plants, we offer choices that cater to every plant lover's taste and style.</p>

                <h2>Customer Satisfaction:</h2>
                <p>As one of the leading online plant shops in Nepal, we prioritize your satisfaction above all. If you encounter any issues or have questions, our dedicated customer service team is ready to assist you promptly, ensuring a positive experience.</p>

                <h2>Green Delivery:</h2>
                <p>Experience fast, reliable, and eco-friendly delivery services across Nepal. Our reasonable charges and order tracking system keep you informed about your plant's journey. Enjoy free delivery within Kathmandu, and for those who prefer a personal touch, inquire about our free Scheduled Collection Service.</p>

                <h2>Website Accessibility:</h2>
                <p>Our user-friendly website is designed to help you easily navigate and find the perfect green companions for your space. Accessible on various devices, including PCs, laptops, tablets, and smartphones, Plant Decor is available 24/7 for your convenience.</p>

                <h2>Affordable Greenery:</h2>
                <p>At Plant Decor, we believe in making plant shopping affordable. By carefully sourcing and buying in bulk, we pass on the savings to you through competitive prices and exciting discounts.</p>

                <h2>Return Policy:</h2>
                <p>Our 'green guarantee' ensures your confidence in every purchase. If you're not satisfied, our flexible return policy allows for easy returns or replacements.</p>

                <h2>Secure Payments:</h2>
                <p>Shop with confidence using our secure and encrypted online payment system. We also provide cash on delivery options for your convenience.</p>

                <h2>Special Offers:</h2>
                <p>Take advantage of our daily and weekly special deals, providing you with opportunities to enhance your plant collection at unbeatable prices. Plant Decor not only makes plant shopping in Nepal affordable but also enjoyable.</p>

                <p>Plant Decor is your key to bringing nature's beauty into your home. Join us in creating green and vibrant spaces that inspire and nurture.</p>

            </div>




            <div className={"au-footer"}>
                <div className={"au-get-help"}>
                    <h1>GET HELP</h1>
                    <Link to="/Customercare"><button>Customer Care</button></Link>
                    <Link to="/Payment"><button>Payment Options</button></Link>
                    <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>
                    <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>
                    <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>
                    <span>@2023 PlantDecor Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"au-about-us"}>
                    <h1>Plant Decor</h1>
                    <Link to="/Aboutus"><button>About Us</button></Link>
                    <Link to="/Contactus"><button>Contact Us</button></Link>
                    <Link to="/Careers"><button>Careers</button></Link>
                </div>
                <div className={"au-logos"}>
                    <span>Connect with us:</span>
                    <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/fb.png"}
                            alt="Facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/luga.hub69/"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/insta.png"}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.threads.net/@luga.hub69"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            width={43}
                            src={"images/thread.png"}
                            alt="X"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
