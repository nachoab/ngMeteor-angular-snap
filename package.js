Package.describe({
    summary: "AngularJS directive for snap.js repackaged for meteor"
});

Package.on_use(function (api, where) {
    api.use("ngMeteor", "client");

    // snap files.
    api.add_files("lib/angular-snap.js", "client");
    api.add_files(["lib/angular-snap.css"], "client");

    // Client files.
    api.add_files("init.js", "client");
});
