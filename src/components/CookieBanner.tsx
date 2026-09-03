"use client";

import { useState, useEffect } from "react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "elythra-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on initial render
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveAndClose = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setVisible(false);
    setShowManage(false);
  };

  const acceptAll = () => {
    saveAndClose({ essential: true, analytics: true, marketing: true });
  };

  const rejectOptional = () => {
    saveAndClose({ essential: true, analytics: false, marketing: false });
  };

  const savePreferences = () => {
    saveAndClose(preferences);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-border-light overflow-hidden">
        {!showManage ? (
          /* Main banner */
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl flex-shrink-0" role="img" aria-label="Cookie">
                🍪
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-text-primary mb-1">
                  We value your privacy
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  We use cookies to improve your experience, analyze site usage,
                  and assist in our marketing efforts. You can manage your
                  preferences or learn more in our{" "}
                  <a
                    href="/cookies"
                    className="text-brand-core hover:underline"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={acceptAll}
                className="px-5 py-2 bg-brand-core text-white text-sm font-semibold rounded-lg hover:bg-brand-deep transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={rejectOptional}
                className="px-5 py-2 bg-brand-sky text-brand-deep text-sm font-semibold rounded-lg hover:bg-brand-sky/70 transition-colors"
              >
                Reject Optional
              </button>
              <button
                onClick={() => setShowManage(true)}
                className="px-5 py-2 text-text-muted text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        ) : (
          /* Manage preferences */
          <div className="p-5 sm:p-6">
            <h3 className="font-heading text-base font-bold text-text-primary mb-4">
              Manage Cookie Preferences
            </h3>
            <div className="space-y-3 mb-5">
              {/* Essential */}
              <div className="flex items-center justify-between p-3 bg-brand-sky/30 rounded-lg">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Essential
                  </p>
                  <p className="text-xs text-text-muted">
                    Required for site functionality
                  </p>
                </div>
                <span className="text-xs text-brand-core font-medium bg-brand-core/10 px-2 py-1 rounded">
                  Always On
                </span>
              </div>

              {/* Analytics */}
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Analytics
                  </p>
                  <p className="text-xs text-text-muted">
                    Help us understand how you use the site
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((p) => ({
                      ...p,
                      analytics: e.target.checked,
                    }))
                  }
                  className="w-5 h-5 rounded accent-brand-core"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Marketing
                  </p>
                  <p className="text-xs text-text-muted">
                    Personalized content and ads
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((p) => ({
                      ...p,
                      marketing: e.target.checked,
                    }))
                  }
                  className="w-5 h-5 rounded accent-brand-core"
                />
              </label>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={savePreferences}
                className="px-5 py-2 bg-brand-core text-white text-sm font-semibold rounded-lg hover:bg-brand-deep transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowManage(false)}
                className="px-5 py-2 text-text-muted text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
