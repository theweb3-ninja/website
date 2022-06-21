export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

type EventType = {
  action: any;
  category: any;
  label: any;
  value: any;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventType) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
