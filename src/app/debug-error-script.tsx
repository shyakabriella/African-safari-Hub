"use client";

import Script from "next/script";

export default function DebugErrorScript() {
  return (
    <Script id="debug-errors" strategy="beforeInteractive">{`
      (function () {
        try {
          var params = new URLSearchParams(location.search);
          if (params.get("debug") !== "1") return;

          function mountBox() {
            var box = document.getElementById("__debug_error_box");
            if (box) return box;

            box = document.createElement("div");
            box.id = "__debug_error_box";
            box.style.cssText =
              "position:fixed;left:12px;right:12px;bottom:12px;z-index:999999;" +
              "background:#111;color:#fff;padding:12px;border-radius:12px;" +
              "font:12px/1.4 system-ui;box-shadow:0 10px 30px rgba(0,0,0,.35);" +
              "max-height:45vh;overflow:auto;white-space:pre-wrap;";
            box.innerHTML = "✅ Debug mode ON. Waiting for errors...";
            document.documentElement.appendChild(box);
            return box;
          }

          function show(title, msg) {
            var box = mountBox();
            box.innerHTML = "❌ " + title + "\\n\\n" + msg;
          }

          window.addEventListener("error", function (e) {
            show("window.onerror", (e && (e.message || e.error && e.error.stack)) || String(e));
          });

          window.addEventListener("unhandledrejection", function (e) {
            var r = e && e.reason;
            show("unhandledrejection", (r && (r.stack || r.message)) || String(r));
          });
        } catch (err) {}
      })();
    `}</Script>
  );
}