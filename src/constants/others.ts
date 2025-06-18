export const others: { title: string; description: string }[] = [
  {
    title: "Unified Mileage Integration Across Two Platforms",
    description:
      "I single-handedly designed and built the entire flow to merge mileage across two platforms. After verifying membership on each platform (and routing non-members appropriately), I handled policy consent and then checked integration eligibility, showed the combined mileage,executed the merge. I also connected admin and identity-verification domains, and ensured system stability through regular demos and cross-team feedback.",
  },
  {
    title: "PDP(Product Detail Page) Performance Optimization",
    description:
      "I fixed a slow issue on the PDP AOS during a big sale by using bottom sheet pre-rendering. Also before the event, I checked the platform to find and remove extra API calls, which made the page more stable when many users visited",
  },
  {
    title: "Debug with Sentry and Kibana",
    description:
      "I fixed problems that only appeared for certain users or devices by searching the user ID in Sentry to see error messages and replaying API responses from Kibana in my local setup. For hard cases like order issues, I worked closely with backend and front-end teammates to dig into the details, share what we found, and find the root cause",
  },
  {
    title: "Monitoring with DataDog after release",
    description:
      "Watched latency graphs in DataDog after deploying the feature to ensure stability",
  },
  {
    title: "Safe release with feature flags and Amplitude",
    description:
      "Used feature flags to turn features on or off for big releases and used Amplitude to test with specific user IDs first in the live environment to keep the product stable",
  },
];
