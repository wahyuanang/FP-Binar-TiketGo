import React from "react";
import NavbarAuthentication from "../components/fragments/Navbar/NavbarAuthentication";
import PaymentHeader from "../components/fragments/PaymentSection/PaymentHeader";
import OrderForm from "../components/fragments/OrderSection/OrderForm";

const Payment = () => {
  const active = {
    text1: true,
    text2: true,
    text3: false,
  };

  return (
    <div>
      <NavbarAuthentication />
      <PaymentHeader
        inputText="Selesaikan Pembayaran sampai 10 Maret 2023 12:00"
        alertType="danger"
        activeStep={active}
      />
      <OrderForm />
    </div>
  );
};

export default Payment;
