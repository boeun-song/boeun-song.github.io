import type { ReactNode } from "react";
import { PayPromotionSummarySection } from "~apps/components/sections/PayPromotionSection";

type DemoType = "image" | "video" | "component";

export interface DemoItem {
  type: DemoType;
  component?: ReactNode;
  src?: string;
  description: string | ReactNode;
  size?: "sm" | "md" | "lg";
}

export interface Project {
  title: string;
  demo?: DemoItem[];
  impacts?: string | ReactNode;
  description: string;
  previews: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Cart Page",
    impacts: (
      <>
        Implemented coupon application and a “Lowest Price with Coupon” toggle
        on the cart page, greatly enhancing user convenience and purchase
        conversion rates
        <br />
        <span className="text-blue-600 font-bold text-[13px]">
          Cart Visit → Cart-to-Checkout Conversion 1-day: 26.9% → 28% [+111
          bps];
          <br />
          GGMV: 7,243,265,929 → 7,818,556,782 [+7.94%]
        </span>
      </>
    ),
    demo: [
      {
        type: "video",
        src: "/assets/cart/best_price.mp4",
        description:
          "On entering the cart page, the best discount is automatically applied and clearly shown. Users can toggle the coupon on or off to see the price difference in real-time",
        size: "sm",
      },
      {
        type: "video",
        src: "/assets/cart/change_coupon.mp4",
        description:
          "Through a full-width dialog, users can explore and manually switch coupons for each item — even if it’s not the maximum discount — to suit their preferences.",
        size: "sm",
      },
      {
        type: "video",
        src: "/assets/cart/select_download.mp4",
        description:
          "Even if users don’t own certain coupons, they can preview optimal combinations and download them instantly. When multiple items are selected,the cart suggests the best-discount combination across eligible products.",
        size: "sm",
      },
      {
        type: "video",
        src: "/assets/cart/checkout.mp4",
        description:
          "If a user selects a product and proceeds to checkout without having the optimal coupon, it is automatically downloaded and applied — ensuring the best price without any manual steps",
        size: "sm",
      },
    ],
    description:
      "The cart automatically applies the most valuable coupons for selected items, allowing users to instantly see the lowest possible price",
    previews: [
      "/assets/cart/cart_preview1.webp",
      "/assets/cart/cart_preview2.webp",
    ],
    tech: ["Nextjs", "TailwindCSS", "TypeScript", "Zustand"],
  },
  {
    title: "Admin Website Launch",
    description:
      "Developed new Admin website, implementing a product registration, a product management and a complex options & inventory management",
    previews: ["/assets/admin/admin_diagram.webp"],
    demo: [
      {
        type: "image",
        src: "/assets/admin/admin_diagram.webp",
        description: (
          <div className="mt-10 flex flex-col gap-10">
            <div className="text-left">
              <h4 className="font-bold">Option & Inventory Management</h4>
              <p className="mt-2">
                A complex multi-row table lets admins select products and their
                multiple options via synchronized checkboxes (product check =
                all options checked). <br />
                Each option row supports inline editing of sale status, stock
                quantity, price adjustments, and purchase limits, plus bulk
                updates on selected items. <br />
                Rendering is optimized with Zustand’s shallow subscriptions,
                changed fields are highlighted by text‐color, and an
                unsaved‐changes alert prevents accidental data loss.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-bold">Product Management</h4>
              <p className="mt-2">
                Implemented a performant table interface where admins and
                partners can search (at least one filter required) and view
                thousands of products.
                <br /> Added bulk-operation controls for category, release date,
                name, coupon, and price updates.
                <br />
                Enforced server-side filtering to prevent overload and provided
                clear status indicators for each product.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-bold">
                Product Registration (Partial contribution)
              </h4>
              <p className="mt-2">
                Contributed UI components for brand & category selection, and
                built reusable file upload fields for main and detail images.
                <br />
                Integrated shipping and pricing configuration panels with
                dynamic form validation, ensuring seamless data binding to the
                Admin API.
              </p>
            </div>
          </div>
        ),
        size: "lg",
      },
    ],
    tech: ["Nextjs", "CSS-in-JS", "Zustand"],
  },
  {
    title: "Shared Component for Snowplow Event Tracking",
    description:
      "Developed a wrapper component to track product-related view and click snowplow events with a unified criteria.",
    impacts:
      "Migrated event data from Firebase to Snowplow, set up a real-time analytics environment, and ensured data integrity to support effective decision-making",
    previews: ["/assets/event-track/event_track_preview.webp"],
    demo: [
      {
        type: "video",
        src: "/assets/event-track/event_track_demo.mp4",
        description: (
          <ul className="mt-10 list-disc text-left">
            <li>
              <b>
                Collaborated with Ios, Android Developers to created a unified
                event tracking interface
              </b>
            </li>
            <li>
              Implemented{" "}
              <b>fallback and edge-case logic to ensure accurate tracking</b>
            </li>
            <li>
              A view event is triggered only when 100% of the product thumbnail
              is visible in the viewport
            </li>
            <li>
              If a user clicks on a product before it has been fully exposed,
              both view and click events are sent (assuming intent to view)
            </li>
            <li>Prevented duplicated view event triggers for the same item</li>
            <li>
              <b>
                Excluded view events when product visibility occurs through
                non-user-driven interactions
              </b>{" "}
              (e.g., scrolling via `Back to Top` button)
            </li>
          </ul>
        ),
        size: "md",
      },
      {
        type: "image",
        src: "/assets/event-track/snowplow_example.png",
        description:
          "Collaborated with data platform engineers to validate event accuracy and perform QA",
        size: "md",
      },
    ],
    tech: ["React", "Vite", "Snowplow"],
  },
  {
    title: "Angular-to-React Migration",
    description:
      "Migrated Angular to React with seven My Page sub-sections - Document Issuance, Membership Level, Coupons, Mileage, 1:1 Inquiries, Product Q&A, and Announcements",
    impacts:
      "Replacing the legacy codebase with React has dramatically simplified future feature work—team members can now extend My Page without wrestling with outdated Angular.",
    previews: [
      "/assets/angular-to-react/inquiry.webp",
      // "/assets/angular-to-react/mileage.webp",
      // "/assets/angular-to-react/my-coupons.webp",
    ],
    tech: ["React", "Angular", "CSS-in-JS", "TypeScript"],
    demo: [
      {
        type: "image",
        src: "/assets/angular-to-react/my-coupon.webp",
        description: "",
        size: 'sm'
      },
      {
        type: "image",
        src: "/assets/angular-to-react/mileage.webp",
        description: "",
        size: 'sm'
      },
      {
        type: "image",
        src: "/assets/angular-to-react/inquiry.webp",
        description: (
          <ul className="mt-10 list-disc text-left">
            <li>
              <b>Solo end-to-end delivery</b>: Without any designer or backend
              support, I reverse-engineered the existing Angular logic,
              documented every workflow in Notion, then re-implemented it in
              React.
            </li>
            <li>
              <b>Complex inquiry handling</b>: The 1:1 Inquiry page supports
              multiple types (order inquiries—exchanges, returns, etc.—and
              product questions). Also page have to display user's Order &
              Shipping List for order inquiries. I audited each legacy case,
              verified expected behaviors, and built robust components.
            </li>
            <li>
              <b>QA & launch</b>: Led my own QA process, deployed the React
              version, and rolled it out with zero critical issues.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Pay Promotion Management - Admin",
    description:
      "Improved the existing legacy payment benefits structure to build a system that aggregates payment benefits data in real time and tracks costs. also added a monthly calendar and date-based payment graphs to support profit management.",

    previews: ["/assets/admin/pay_promotion_preview.webp"],
    tech: ["React", "CSS-in-JS", "TypeScript"],
    impacts:
      "With these changes, payment benefits data can be viewed and costs tracked instantly, and teams can monitor contribution profit day by day via the new calendar and graphs.",
    demo: [
      {
        type: "component",
        component: <PayPromotionSummarySection />,
        description: (
          <div className="text-left">
            <span className="text-gray-400 text-sm">* This is sample</span>
            <p className="my-2">
              Date/Calendar Chart: an interactive timeline graph that displays
              each promotion’s start and end dates across the month, giving
              admins an at-a-glance overview of monthly promotion status.
              <br />
              Searchable Table View: a responsive table to list, filter, and
              sort all active and inactive promotions.
            </p>
            Users can also create and edit payment promotions via a form-based
            interface that adapts to different payment types and offer
            configurations.
          </div>
        ),
      },
    ],
  },
  {
    title: "Brand Home",
    demo: [
      {
        type: "video",
        src: "/assets/brand-home/brand_news.mp4",
        description:
          "A banner showcasing the latest brand updates along with related items, with the final design chosen based on A/B testing results",
        size: "sm",
      },
      {
        type: "video",
        src: "/assets/brand-home/brand_new_items.mp4",
        description:
          "A product carousel featuring newly released items from the brand",
        size: "sm",
      },
      {
        type: "video",
        src: "/assets/brand-home/brand_best_items.mp4",
        description:
          "Brand's best-selling items along with real-time, daily, weekly, and monthly rankings",
        size: "sm",
      },
    ],
    description:
      "Each brand has a dedicated detail page featuring brand news, new items, and best-selling products.\nThe final layout was determined through A/B testing using Amplitude",
    previews: [
      "/assets/brand-home/brand_home_preview1.webp",
      "/assets/brand-home/brand_home_preview2.webp",
    ],
    tech: ["Nextjs", "CSS-in-JS", "TypeScript"],
  },
];
