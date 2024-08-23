//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";
 
// Near entry of your product, init Mixpanel
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_APP_KEY, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true

});

export default mixpanel;