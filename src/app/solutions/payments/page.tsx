import Benefits from "@/components/solution-payment/Benefits";
import OneClickIntegration from "@/components/solution-payment/OneClickIntegration";
import PaymentFeatures from "@/components/solution-payment/PaymentFeatures";
import PaymentMain from "@/components/solution-payment/PaymentMain";
import Security from "@/components/solution-payment/Security";

export default function OnlinePayment() {
  return (
    <>
      <PaymentMain />
      <PaymentFeatures />
      <Benefits />
      <Security />
      <OneClickIntegration />
    </>
  )
}
