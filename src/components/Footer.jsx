import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div>
            <div className={"flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm"}>
                <div>
                    <img src={assets.logo} className={"mb-5 w-32"} alt={"logo"}/>
                    <p className={"w-full md:w-2/3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eaque.</p>
                </div>
                <div>
                    <p className={"text-xl font-medium mb-5"}>COMPANY</p>
                    <ul className={"flex flex-col gap-1 text-gray-600"}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className={"text-xl font-medium mb-5"}>GET IN TOUCH</p>
                    <ul className={"flex flex-col gap-1 text-gray-600"}>
                        <li>+90 555 000 00 00</li>
                        <li>info@ursamajor.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className={"py-5 text-sm text-center"}>Copyright 2024 @ All Right Reserved</p>
            </div>
        </div>
    );
};
export default Footer;