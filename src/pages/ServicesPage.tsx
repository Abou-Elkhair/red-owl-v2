import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Flame, Network, Wrench, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Reveal, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';
import { DisciplineKey } from '../types';

type TabKey = 'mechanical' | 'electrical' | 'lowcurrent' | 'testing';

const TAB_CONFIG: Record<
  TabKey,
  {
    image: string;
    icon: React.ComponentType<{ className?: string }>;
    prefill: DisciplineKey[];
  }
> = {
  mechanical: {
    image: './assets/redowl/obj_324.jpg',
    icon: Flame,
    prefill: ['hvac', 'fire', 'plumbing'],
  },
  electrical: {
    image: './assets/redowl/obj_375.jpg',
    icon: Zap,
    prefill: ['electrical'],
  },
  lowcurrent: {
    image: './assets/redowl/obj_1497.jpg',
    icon: Network,
    prefill: ['electrical'],
  },
  testing: {
    image: './assets/redowl/obj_281.jpg',
    icon: Wrench,
    prefill: ['fire', 'hvac'],
  },
};

export const ServicesPage: React.FC = () => {
  const { t, isRtl, navigate } = useApp();
  const [activeTab, setActiveTab] = useState<TabKey>('mechanical');

  const ForwardArrow = isRtl ? ArrowLeft : ArrowRight;

  const getTabContent = () => {
    if (activeTab === 'mechanical') {
      return { title: t.services.mechanicalTitle, items: t.services.mechanicalItems };
    }
    if (activeTab === 'electrical') {
      return { title: t.services.electricalTitle, items: t.services.electricalItems };
    }
    if (activeTab === 'lowcurrent') {
      return { title: t.services.lowCurrentTitle, items: t.services.lowCurrentItems };
    }
    return { title: t.services.testingTitle, items: t.services.testingItems };
  };

  const content = getTabContent();
  const currentConfig = TAB_CONFIG[activeTab];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E2E4E9] bg-[#F4F5F7] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-wider text-[#D11A22]">{t.services.pageKicker}</p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-bold text-[#191B1F] text-balance sm:text-4xl">
            {t.services.pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4B505B] sm:text-base">
            {t.services.pageDesc}
          </p>
        </div>
      </section>

      {/* Interactive Scope Switcher */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Segmented Discipline Tabs */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.tabs.map((tab) => {
              const active = activeTab === tab.id;
              const Icon = TAB_CONFIG[tab.id].icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-start rounded-xl border p-5 text-start transition-colors duration-150 ${
                    active
                      ? 'border-[#191B1F] bg-[#191B1F] text-white'
                      : 'border-[#E2E4E9] bg-[#F4F5F7] text-[#191B1F] hover:border-[#4B505B]'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      active ? 'bg-[#D11A22] text-white' : 'bg-white text-[#D11A22]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="mt-3 text-base font-bold">{tab.title}</h2>
                  <p className={`mt-1 text-xs ${active ? 'text-[#C5C9D3]' : 'text-[#4B505B]'}`}>
                    {tab.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-8 grid grid-cols-1 items-stretch gap-8 rounded-xl border border-[#E2E4E9] bg-[#F4F5F7] p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="overflow-hidden rounded-lg bg-[#191B1F] lg:col-span-5">
                <img
                  src={currentConfig.image}
                  alt={content.title}
                  referrerPolicy="no-referrer"
                  className="h-72 w-full object-cover lg:h-full lg:max-h-[460px]"
                />
              </div>

              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#191B1F] sm:text-3xl">
                    {content.title}
                  </h3>

                  <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {content.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-[#E2E4E9] bg-white p-4 text-sm font-medium text-[#191B1F]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D11A22]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E4E9] pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      navigate('contact', { prefillDisciplines: currentConfig.prefill })
                    }
                    className="inline-flex items-center gap-2 rounded-md bg-[#D11A22] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B0141B]"
                  >
                    <span>{t.services.requestServiceCta}</span>
                    <ForwardArrow className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('projects')}
                    className="text-sm font-semibold text-[#191B1F] hover:text-[#D11A22]"
                  >
                    {t.home.viewAllProjects}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Delivery Lifecycle */}
      <section className="border-t border-[#E2E4E9] bg-[#191B1F] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {t.services.lifecycleTitle}
            </h2>
          </Reveal>

          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.lifecycleSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="flex h-full flex-col rounded-xl border border-[#2E323B] bg-[#25282E] p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D11A22] text-sm font-bold text-white tabular-nums">
                    {step.num}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B8BDC7]">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
};
