import * as Sentry from "@sentry/tanstackstart-react";

Sentry.init({
    dsn: "https://7c5b9d7cd12e63eb50548226fb571280@o4512479987040256.ingest.us.sentry.io/4512479993135104",


    integrations: [
        Sentry.replayIntegration(),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production.
    // Learn more at https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
    tracesSampleRate: 1.0,

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error.
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});