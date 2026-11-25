import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy, Globe2, Mail, MapPin, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DisciplineKey, ProjectCountry, RfpFormData } from '../types';

export const ContactPage: React.FC = () => {
  const { t, lang, prefilledDisciplines } = useApp();

  const [form, setForm] = useState<RfpFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: 'egypt',
    projectType: t.contactPage.projectTypes[0],
    disciplines: prefilledDisciplines,
    message: '',
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      disciplines: prefilledDisciplines,
      projectType: t.contactPage.projectTypes[0],
    }));
  }, [prefilledDisciplines, t.contactPage.projectTypes]);

  const [errors, setErrors] = useState<Partial<Record<keyof RfpFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, val: string) => {
    try {
      await navigator.clipboard.writeText(val);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      // ignore clipboard errors
    }
  };

  const toggleDiscipline = (dk: DisciplineKey) => {
    setForm((prev) => {
      const exists = prev.disciplines.includes(dk);
      const next = exists
        ? prev.disciplines.filter((d) => d !== dk)
        : [...prev.disciplines, dk];
      return { ...prev, disciplines: next };
    });
    if (errors.disciplines) {
      setErrors((e) => ({ ...e, disciplines: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof RfpFormData, string>> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = t.contactPage.errors.name;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t.contactPage.errors.email;
    }
    if (!/^[\d+\-\s()]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = t.contactPage.errors.phone;
    }
    if (form.disciplines.length === 0) {
      nextErrors.disciplines = t.contactPage.errors.disciplines;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `RFP Inquiry — ${form.company || form.fullName} (${form.country.toUpperCase()})`
    );
    const body = encodeURIComponent(
      `Name: ${form.fullName}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nCountry: ${form.country}\nSector: ${form.projectType}\nDisciplines: ${form.disciplines.join(', ')}\n\nScope:\n${form.message}`
    );
    return `mailto:info@redowlco.com?subject=${subject}&body=${body}`;
  };

  const disciplineList: { key: DisciplineKey; label: string }[] = [
    { key: 'fire', label: t.projectsPage.disciplines.fire },
    { key: 'hvac', label: t.projectsPage.disciplines.hvac },
    { key: 'plumbing', label: t.projectsPage.disciplines.plumbing },
    { key: 'electrical', label: t.projectsPage.disciplines.electrical },
    { key: 'infrastructure', label: t.projectsPage.disciplines.infrastructure },
  ];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">
            {t.contactPage.pageKicker}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-[#191B1F] text-balance sm:text-4xl">
            {t.contactPage.pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4B505B] sm:text-base">
            {t.contactPage.pageDesc}
          </p>
        </div>
      </section>

      {/* Main Split: Contact Directory + RFP Form */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          {/* Charcoal Contact Details Card (Matching Page 69) */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-xl border border-[#2E323B] bg-[#191B1F] p-7 text-white sm:p-9">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  {t.contactPage.infoTitle}
                </h2>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      key: 'phone',
                      icon: Phone,
                      label: t.contactPage.phoneLabel,
                      val: '01000695256',
                      ltr: true,
                    },
                    {
                      key: 'email',
                      icon: Mail,
                      label: t.contactPage.emailLabel,
                      val: 'info@redowlco.com',
                      ltr: true,
                    },
                    {
                      key: 'web',
                      icon: Globe2,
                      label: t.contactPage.websiteLabel,
                      val: 'www.redowlco.com',
                      ltr: true,
                    },
                    {
                      key: 'addr',
                      icon: MapPin,
                      label: t.contactPage.addressLabel,
                      val: t.contactPage.addressValue,
                      ltr: false,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D11A22] text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold tracking-wider text-[#8C93A0]">
                              {item.label}
                            </p>
                            <p
                              className="mt-1 text-base font-medium text-white tabular-nums"
                              dir={item.ltr ? 'ltr' : undefined}
                            >
                              {item.val}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(item.key, item.val)}
                          className="mt-1 inline-flex shrink-0 items-center gap-1 rounded border border-[#2E323B] bg-[#25282E] px-2.5 py-1 text-[11px] font-semibold text-[#C5C9D3] transition-colors hover:border-white hover:text-white"
                          aria-label={`${t.contactPage.copy} ${item.label}`}
                        >
                          {copiedKey === item.key ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span>{t.contactPage.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>{t.contactPage.copy}</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 border-t border-[#2E323B] pt-6">
                <div className="inline-block rounded-md bg-white p-3.5">
                  <img
                    src="./assets/redowl/obj_1723.jpg"
                    alt="Red Owl Construction"
                    referrerPolicy="no-referrer"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RFP Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-7 sm:p-9">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D11A22] text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-bold text-[#191B1F]">
                    {t.contactPage.successTitle}
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#4B505B]">
                    {t.contactPage.successDesc}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={buildMailtoHref()}
                      className="rounded-md bg-[#191B1F] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D11A22]"
                    >
                      {t.contactPage.openEmailClient}
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          ...form,
                          fullName: '',
                          company: '',
                          email: '',
                          phone: '',
                          message: '',
                        });
                      }}
                      className="rounded-md border border-[#E2E4E9] bg-white px-5 py-3 text-sm font-semibold text-[#191B1F] hover:border-[#191B1F]"
                    >
                      {t.contactPage.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="font-display text-2xl font-bold text-[#191B1F]">
                    {t.contactPage.formTitle}
                  </h2>
                  <p className="mt-1.5 text-sm text-[#4B505B]">{t.contactPage.formDesc}</p>

                  <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#191B1F]">
                        {t.contactPage.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder={t.contactPage.namePlaceholder}
                        className="mt-1.5 w-full rounded-md border border-[#E2E4E9] bg-white px-3.5 py-2.5 text-sm text-[#191B1F] focus:border-[#D11A22] focus:outline-none"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs font-semibold text-[#D11A22]">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191B1F]">
                        {t.contactPage.companyLabel}
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder={t.contactPage.companyPlaceholder}
                        className="mt-1.5 w-full rounded-md border border-[#E2E4E9] bg-white px-3.5 py-2.5 text-sm text-[#191B1F] focus:border-[#D11A22] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191B1F]">
                        {t.contactPage.emailInputLabel}
                      </label>
                      <input
                        type="email"
                        dir="ltr"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@company.com"
                        className="mt-1.5 w-full rounded-md border border-[#E2E4E9] bg-white px-3.5 py-2.5 text-sm text-[#191B1F] focus:border-[#D11A22] focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs font-semibold text-[#D11A22]">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191B1F]">
                        {t.contactPage.phoneInputLabel}
                      </label>
                      <input
                        type="tel"
                        dir="ltr"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+20 10..."
                        className="mt-1.5 w-full rounded-md border border-[#E2E4E9] bg-white px-3.5 py-2.5 text-sm text-[#191B1F] focus:border-[#D11A22] focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs font-semibold text-[#D11A22]">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191B1F]">
                        {t.contactPage.countryLabel}
                      </label>
                      <div className="mt-1.5 grid grid-cols-2 gap-2">
                        {(
                          [
                            { k: 'egypt', l: t.projectsPage.egypt },
                            { k: 'ksa', l: t.projectsPage.ksa },
                          ] as { k: ProjectCountry; l: string }[]
                        ).map((c) => (
                          <button
                            key={c.k}
                            type="button"
                            onClick={() => setForm({ ...form, country: c.k })}
                            className={`rounded-md border px-3 py-2.5 text-xs font-semibold transition-colors ${
                              form.country === c.k
                                ? 'border-[#191B1F] bg-[#191B1F] text-white'
                                : 'border-[#E2E4E9] bg-white text-[#4B505B]'
                            }`}
                          >
                            {c.l}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191B1F]">
                        {t.contactPage.projectTypeLabel}
                      </label>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-[#E2E4E9] bg-white px-3.5 py-2.5 text-sm text-[#191B1F] focus:border-[#D11A22] focus:outline-none"
                      >
                        {t.contactPage.projectTypes.map((pt) => (
                          <option key={pt} value={pt}>
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Required Disciplines */}
                  <div className="mt-6">
                    <label className="block text-xs font-bold text-[#191B1F]">
                      {t.contactPage.disciplinesLabel}
                    </label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {disciplineList.map((d) => {
                        const checked = form.disciplines.includes(d.key);
                        return (
                          <button
                            key={d.key}
                            type="button"
                            onClick={() => toggleDiscipline(d.key)}
                            className={`rounded-md border px-3.5 py-2 text-xs font-semibold transition-colors ${
                              checked
                                ? 'border-[#D11A22] bg-[#D11A22] text-white'
                                : 'border-[#E2E4E9] bg-white text-[#191B1F] hover:border-[#4B505B]'
                            }`}
                          >
                            {d.label}
                          </button>
                        );
                      })}
                    </div>
                    {errors.disciplines && (
                      <p className="mt-1.5 text-xs font-semibold text-[#D11A22]">
                        {errors.disciplines}
                      </p>
                    )}
                  </div>

                  {/* Notes */}
                  <div className="mt-6">
                    <label className="block text-xs font-bold text-[#191B1F]">
                      {t.contactPage.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contactPage.messagePlaceholder}
                      className="mt-1.5 w-full rounded-md border border-[#E2E4E9] bg-white px-3.5 py-2.5 text-sm text-[#191B1F] focus:border-[#D11A22] focus:outline-none"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[#D11A22] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#B0141B] sm:w-auto"
                    >
                      {t.contactPage.submitBtn}
                    </button>
                    <span className="hidden text-xs text-[#6E7482] sm:inline">
                      {lang === 'ar'
                        ? 'استجابة هندسية خلال 24 ساعة عمل'
                        : '24-hour engineering response'}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
