import * as sentry from "@sentry/react";

function init() {
  sentry.init({
    dsn:
      "https://981dbdd6fcd849899c19e22588fd80e2@o425662.ingest.sentry.io/5364022",
  });
}

function log(error) {
  sentry.captureException(error);
}

export default {
  init,
  log,
};
