import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.jsx";

const PaymentButton = () => {
    const {getCartAmount, delivery_fee} = useContext(ShopContext);
    const [ip, setIp] = useState("");

    useEffect(() => {
        fetch("https://api64.ipify.org?format=json")
            .then((res) => res.json())
            .then((data) => setIp(data.ip));
    }, []);

    const handlePayment = async () => {
        const paymentData = {
            email: "test@test.com",
            payment_amount: (getCartAmount() + delivery_fee) * 100,
            user_name: "test",
            user_address: "adresssss",
            user_phone: "1234567890",
            user_ip : ip,
            user_basket: "[['Item1', '10.00', 1], ['Item2', '20.00', 1]]",
        };

        try {
            console.log(paymentData);
            console.log("Backend'e istek atılıyor...");
            const response = await fetch('http://localhost:3000/api/paytr/get-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(paymentData),
            });

            console.log("Backend'den yanıt alındı:", response);

            // Yanıtı plain text olarak oku
            const textResponse = await response.text();
            console.log("Backend'den gelen yanıt (plain text):", textResponse);

            // Yanıtı JSON'a çevirmeye çalış
            try {
                const data = JSON.parse(textResponse);
                console.log("Token alındı:", data.token);
                // Ödeme sayfasını yeni bir sekmede aç
               // window.open(`http://localhost:3000/paytr/payment?token=${data.token}`, '_blank');
                window.open(`http://localhost:3000/paytr/payment?token=${data.token}`, '_blank');


                //     window.open(`http://localhost:3000/api/paytr/get-token?token=${data.token}`, '_blank');
            } catch (error) {
                console.error("Yanıt JSON formatında değil:", error);
                console.error("Backend'den gelen yanıt (HTML):", textResponse);
            }
        } catch (error) {
            console.error('Bir hata oluştu:', error);
        }
    };

    return (
        <button onClick={handlePayment} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Ödeme Yap
        </button>
    );
};

export default PaymentButton;