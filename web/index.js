window.addEventListener('load', function(ev) {
    // Download main.dart.js
    _flutter.loader.loadEntrypoint({
      serviceWorker: {
        serviceWorkerVersion: serviceWorkerVersion,
      },
      onEntrypointLoaded: function(engineInitializer) {
        engineInitializer.initializeEngine().then(function(appRunner) {
          appRunner.runApp();
        });
      }
    });
  });

// Optional: Open links in new tab
const links = document.querySelectorAll("a");

links.forEach(link => {
  link.target = "_blank";
});
