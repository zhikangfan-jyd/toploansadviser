export const tracking = (label, event, event_category) => {

  let pathname = window.location.pathname;
  event = event ? event : 'Click';
  event_category = event_category ? event_category : pathname.split('/')[1] === '' ? 'index' : pathname.split('/')[1];

  if (label && event) {
    gtag('event', event, {
      'event_category': event_category,
      'event_label': label
    });
  }
}
