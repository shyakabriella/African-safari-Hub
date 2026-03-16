import ApartmentsBanner from "@/components/industries/IndustriesApartmentsBnbResource/ApartmentsBanner";
import ApartmentsBnbCTA from "@/components/industries/IndustriesApartmentsBnbResource/ApartmentsBnbCTA";
import ApartmentsBnbProplem from "@/components/industries/IndustriesApartmentsBnbResource/ApartmentsBnbProplem";
import ApartmentsBnbSolution from "@/components/industries/IndustriesApartmentsBnbResource/ApartmentsBnbSolution";
import WhyUs from "@/components/industries/IndustriesApartmentsBnbResource/WhyUs";

export default function ApartmentsAirbnb() {
  return (
    <>
      <ApartmentsBanner />
      <ApartmentsBnbProplem />
      <ApartmentsBnbSolution />
      <WhyUs />
      <ApartmentsBnbCTA />
    </>
  )
}
