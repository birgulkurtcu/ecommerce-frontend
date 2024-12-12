import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const Contact = () => {
    return (
        <div>
            <div className={"text-center text-2xl pt-10 border-t"}>
                <Title text1={'Contact'} text2={'US'} />
            </div>
            <div className={"my-10 flex -flx-col justify-center md:fle-row gap-10 mb-28"}>
                <img className={"w-full md:max-w-[480px]"} src={assets.contact_img} alt=""/>
                <div className={"flex flex-col justify-center item-start gap-6"}>
                    <p className={"font-semibold text-xl text-gray-600"}>Our Store</p>
                    <p className={"text-gray-500"}>34014 Mecidiyekoy Station <br/> Anka 204, Istanbul, TR</p>
                    <p className={"text-gray-500"}>Tel : +90 (212) 999-3414 <br/> Email: info@ursamajor.com</p>
                    <p className={"font-semibold text-xl text-gray-600"}>Careers at Ursamajor</p>
                    <p className={"text-gray-500"}> Learn more about our teams and job openings.</p>
                    <button className={"border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"}>Explore Jobs</button>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    );
};
export default Contact;