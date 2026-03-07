import TheOnboardingBottleneck from "@/components/setup-onboarding/TheOnboardingBottleneck";
import GoLiveBanner from "../../../components/setup-onboarding/GoLiveBanner";
import FastTrackImplementation from "@/components/setup-onboarding/FastTrackImplementation";
import FeaturesSection from "@/components/setup-onboarding/FeaturesSection";
import FocusOnHospitality from "@/components/setup-onboarding/FocusOnHospitality";
import FinalSetupCTA from "@/components/setup-onboarding/FinalSetupCTA";

export default function SetupOnboarding() {
  return (
    <>
      <GoLiveBanner />
      <TheOnboardingBottleneck />
      <FastTrackImplementation />
      <FeaturesSection />
      <FocusOnHospitality />
      <FinalSetupCTA />
    </>
  )
}
