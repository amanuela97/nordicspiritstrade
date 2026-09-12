"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { sendContactEmail } from "@/app/actions/contact";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const t = useTranslations("modal");
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  /* trap focus / close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    const result = await sendContactEmail(form);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      setForm(EMPTY);
    } else {
      setSendError(result.error ?? "Failed to send. Please email us directly.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact us"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="bg-navy px-8 py-6 rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-crimson text-xs font-semibold tracking-widest uppercase mb-1">
                {t("partnerEyebrow")}
              </p>
              <h2 className="text-white text-2xl font-bold">
                {t("heading")}
              </h2>
              <p className="text-off-white/70 text-sm mt-1">
                {t("reachUs")}{" "}
                <a
                  href="mailto:director@nordicspiritstrade.com"
                  className="text-off-white underline hover:text-white"
                >
                  director@nordicspiritstrade.com
                </a>
                {" · "}
                <a
                  href="tel:+358452067538"
                  className="text-off-white underline hover:text-white"
                >
                  +358 45 206 7538
                </a>
              </p>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer text-white/60 hover:text-white transition-colors shrink-0 mt-1"
              aria-label={t("closeLabel")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-8 py-7 space-y-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-navy text-xl font-bold mb-2">{t("successTitle")}</h3>
              <p className="text-text-muted text-sm max-w-sm mx-auto">{t("successBody")}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="cursor-pointer mt-5 text-sm text-navy underline hover:text-crimson"
              >
                {t("sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-navy font-semibold text-sm uppercase tracking-widest">
                {t("inquiryTitle")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(
                  [
                    { name: "name",    label: t("fieldName"),    type: "text",  required: true  },
                    { name: "company", label: t("fieldCompany"), type: "text",  required: true  },
                    { name: "email",   label: t("fieldEmail"),   type: "email", required: true  },
                    { name: "phone",   label: t("fieldPhone"),   type: "tel",   required: false },
                  ] as { name: keyof FormState; label: string; type: string; required: boolean }[]
                ).map(({ name, label, type, required }) => (
                  <div key={name}>
                    <label className="block text-xs font-medium text-text-muted mb-1.5">
                      {label} {required && <span className="text-crimson">*</span>}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      required={required}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-medium text-text-muted mb-1.5">
                  {t("fieldMessage")} <span className="text-crimson">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors resize-none"
                />
              </div>
              {sendError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2">
                  {sendError}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="cursor-pointer w-full sm:w-auto px-8 py-3 bg-crimson text-white text-sm font-semibold rounded-full hover:bg-crimson-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>{t("submitBtn")} →</>
                )}
              </button>
            </form>
          )}

          {/* Disclaimer */}
          <p className="text-[10px] text-text-muted leading-relaxed border-t border-gray-100 pt-4">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </div>
  );
}
