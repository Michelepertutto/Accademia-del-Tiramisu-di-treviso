import React from 'react';
import { GraduationCap, MonitorPlay, Users, Building2, Check, TrendingUp, QrCode, Barcode, Calendar } from 'lucide-react';

interface SlideProps {
    isActive: boolean;
}

const SectionBadge = () => (
    <div className="relative mt-8 mb-4 mx-auto w-fit md:mx-0 md:mt-0 md:mb-0 md:absolute md:top-8 md:right-8 bg-amber-600 text-white px-6 py-2 rounded-full shadow-lg z-20 font-sans font-bold tracking-wider text-sm md:text-base uppercase flex items-center gap-2 animate-fade-in self-center md:self-auto">
        <GraduationCap size={20} />
        Tiramisù Experience
    </div>
);

// --- NEW COMPONENT: Realistic Ticket Mockup ---
interface TicketProps {
    title: string;
    subtitle: string;
    price: string;
    colorTheme: 'light' | 'dark' | 'amber';
    icon: React.ElementType;
    notchColor: string; // The color of the semi-circles to match slide bg
}

const RealisticTicket: React.FC<TicketProps> = ({ title, subtitle, price, colorTheme, icon: Icon, notchColor }) => {

    // Theme configurations
    const themes = {
        light: {
            bg: 'bg-cream-50',
            border: 'border-coffee-200',
            textMain: 'text-coffee-900',
            textSub: 'text-coffee-600',
            accent: 'text-amber-600',
            stubBg: 'bg-coffee-100'
        },
        dark: {
            bg: 'bg-coffee-800',
            border: 'border-coffee-600',
            textMain: 'text-cream-50',
            textSub: 'text-gray-300',
            accent: 'text-savoiardo',
            stubBg: 'bg-coffee-900'
        },
        amber: {
            bg: 'bg-white',
            border: 'border-amber-200',
            textMain: 'text-coffee-900',
            textSub: 'text-gray-500',
            accent: 'text-amber-600',
            stubBg: 'bg-amber-50'
        }
    };

    const t = themes[colorTheme];

    return (
        <div className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
            <div className={`relative flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-2xl ${t.bg}`}>

                {/* Left Section (Main Info) */}
                <div className="flex-1 p-6 md:p-8 relative border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-400/50 flex flex-col justify-between min-h-[220px]">
                    {/* Top Notch */}
                    <div className={`absolute -top-3 md:-top-4 left-1/2 md:left-auto md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full ${notchColor} z-10 transform -translate-x-1/2 md:translate-x-0`}></div>
                    {/* Bottom Notch */}
                    <div className={`absolute -bottom-3 md:-bottom-4 left-1/2 md:left-auto md:-right-4 w-6 h-6 md:w-8 md:h-8 rounded-full ${notchColor} z-10 transform -translate-x-1/2 md:translate-x-0`}></div>

                    <div>
                        <div className={`flex items-center gap-3 mb-4 uppercase tracking-widest text-xs font-bold ${t.accent}`}>
                            <Icon size={18} />
                            <span>Accademia Pass</span>
                        </div>
                        <h3 className={`text-3xl md:text-4xl font-serif font-bold mb-2 ${t.textMain} leading-none`}>{title}</h3>
                        <p className={`text-sm ${t.textSub}`}>{subtitle}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-4 opacity-60">
                        <Barcode className={t.textMain} size={48} />
                        <span className={`text-[10px] tracking-[0.2em] ${t.textMain}`}>0092837192</span>
                    </div>
                </div>

                {/* Right Section (Stub/Price) */}
                <div className={`w-full md:w-40 ${t.stubBg} p-6 flex flex-col items-center justify-center relative border-l-0 md:border-l-2 border-dashed border-white/0`}>
                    <div className="text-center">
                        <span className={`block text-xs uppercase font-bold mb-1 ${t.textSub}`}>Prezzo</span>
                        <span className={`block text-3xl md:text-4xl font-serif font-bold ${t.accent}`}>{price}</span>
                    </div>

                    <div className="mt-6 bg-white p-2 rounded-lg shadow-sm">
                        <QrCode size={40} className="text-coffee-900" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for the Business Insight Box
const BusinessInsightBox = ({ target, value, isDark = false }: { target: string, value: string, isDark?: boolean }) => (
    <div className={`mt-8 p-6 rounded-xl border-l-4 ${isDark ? 'bg-coffee-900/40 border-savoiardo' : 'bg-amber-50 border-amber-600'}`}>
        <div className="flex items-start mb-2">
            <TrendingUp size={24} className={`${isDark ? 'text-savoiardo' : 'text-amber-600'} mr-3 mt-1 flex-shrink-0`} />
            <div>
                <h4 className={`font-bold uppercase tracking-wider text-sm mb-1 ${isDark ? 'text-savoiardo' : 'text-amber-700'}`}>Target & Opportunità</h4>
                <p className={`text-lg font-bold leading-tight ${isDark ? 'text-white' : 'text-coffee-900'}`}>{target}</p>
            </div>
        </div>
        <div className="pl-9">
            <p className={`text-base ${isDark ? 'text-gray-300' : 'text-coffee-700'}`}>{value}</p>
        </div>
    </div>
);

// 1. Course Intro
export const CoursesIntroSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col justify-center items-center p-8 pt-8 md:pt-24 bg-stone-100 text-coffee-900 text-center relative">
            <SectionBadge />
            <GraduationCap size={100} className="text-amber-600 mb-8 mt-4 md:mt-0" />
            <h2 className="text-6xl md:text-7xl font-serif mb-8">Tiramisù Experience</h2>
            <p className="text-3xl text-coffee-600 max-w-4xl leading-relaxed">
                Offerta di esperienze continue tutto l'anno. <br />
                Non vendiamo semplici corsi, ma <strong>percorsi di certificazione</strong>.
            </p>
        </div>
    );
};

// 2. Digital Course
export const CourseDigitalSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col md:flex-row p-0 bg-coffee-900 relative">
            <SectionBadge />

            {/* Left Content */}
            <div className="w-full md:w-1/2 bg-coffee-800 p-8 md:p-16 flex flex-col justify-center pt-8 md:pt-0 z-10">
                <div className="flex items-center gap-4 mb-4">
                    <MonitorPlay size={40} className="text-savoiardo" />
                    <h3 className="text-2xl text-savoiardo uppercase tracking-widest">Il Corso Online</h3>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Accademia Digitale</h2>

                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    Per chi vuole studiare i segreti da casa propria, seguendo i propri ritmi.
                </p>

                <div className="bg-coffee-900/50 p-6 rounded-xl border border-coffee-700 mb-2">
                    <h4 className="font-bold text-white mb-2">Cosa Riceve il Cliente:</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center"><Check size={18} className="mr-2 text-green-500" /> Certificato Digitale Ufficiale</li>
                        <li className="flex items-center"><Check size={18} className="mr-2 text-green-500" /> Poster High-Res Stampabile</li>
                        <li className="flex items-center"><Check size={18} className="mr-2 text-green-500" /> E-Book Completo & Slide</li>
                    </ul>
                </div>

                <BusinessInsightBox
                    isDark={true}
                    target="Appassionati nel mondo, Regalo Last-Minute."
                    value="Prodotto scalabile a costo marginale zero. Vendita automatica h24."
                />
            </div>

            {/* Right Visual - TICKET MOCKUP */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-12 bg-coffee-900 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-coffee-800 to-coffee-900 opacity-50 animate-pulse"></div>

                <RealisticTicket
                    title="Video Corso Tiramisù"
                    subtitle="Accesso illimitato + Ebook"
                    price="€ 49"
                    colorTheme="dark"
                    icon={MonitorPlay}
                    notchColor="bg-coffee-900"
                />
            </div>
        </div>
    );
};

// 3. Live Course
export const CourseLiveSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col md:flex-row p-0 bg-amber-600 relative">
            <SectionBadge />

            {/* Left Visual (on Desktop) - TICKET MOCKUP */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-12 bg-amber-700 relative order-2 md:order-1 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>

                <RealisticTicket
                    title="Masterclass LIVE"
                    subtitle="Presenza a Treviso • 3h"
                    price="€ 89"
                    colorTheme="amber"
                    icon={Users}
                    notchColor="bg-amber-700"
                />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-1 md:order-2 pt-8 md:pt-0 text-cream-50 z-10">
                <div className="flex items-center gap-4 mb-4">
                    <Users size={40} className="text-white" />
                    <h3 className="text-2xl text-amber-100 uppercase tracking-widest font-bold">Esperienza in Presenza</h3>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Masterclass "LIVE"</h2>

                <p className="text-xl text-amber-50 mb-8 leading-relaxed font-light">
                    Mettere le mani in pasta con i Maestri.
                    Modalità: 1-to-1, Gruppi o "On Tour" in ville private.
                </p>

                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 mb-6">
                    <h4 className="font-bold text-white mb-4 text-lg">Distribuzione & Visibilità Automatica:</h4>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start">
                            <div className="bg-white p-1.5 rounded-full mr-3 mt-1 text-amber-600">
                                <Calendar size={16} />
                            </div>
                            <p className="text-amber-50 leading-snug">
                                Creazione eventi sincronizzata su canali globali:
                            </p>
                        </div>

                        {/* Brand Logos */}
                        <div className="flex gap-4 mt-1 pl-11">
                            <div className="bg-white px-3 py-1.5 rounded-md shadow-lg hover:scale-105 transition-transform cursor-pointer" title="TripAdvisor">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TripAdvisor_Logo.svg/1024px-TripAdvisor_Logo.svg.png" alt="TripAdvisor" className="h-6 w-auto object-contain" />
                            </div>
                            <div className="bg-white px-3 py-1.5 rounded-md shadow-lg hover:scale-105 transition-transform cursor-pointer" title="GetYourGuide">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/GetYourGuide_company_logo.png" alt="GetYourGuide" className="h-6 w-auto object-contain" />
                            </div>
                        </div>

                        <div className="flex items-start mt-2">
                            <div className="bg-white p-1.5 rounded-full mr-3 mt-1 text-amber-600">
                                <Check size={16} />
                            </div>
                            <p className="text-amber-50 leading-snug">
                                Include: Teoria rapida, Pratica intensiva, Degustazione e Certificato.
                            </p>
                        </div>
                    </div>
                </div>

                <BusinessInsightBox
                    target="Turisti a Treviso, Foodies & Coppie."
                    value="Esperienza Premium ad alto valore percepito. Il ricordo indelebile del viaggio."
                    isDark={true}
                />
            </div>
        </div>
    );
};

// 4. Corporate Course
export const CourseCorpSlide: React.FC<SlideProps> = ({ isActive }) => {
    // Removed early return
    return (
        <div className="min-h-full flex flex-col md:flex-row bg-stone-100 relative">
            <SectionBadge />

            {/* Right Visual - TICKET MOCKUP - Changed width to 50% (md:w-1/2) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-12 bg-stone-200 relative order-2 md:order-2 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2000')" }}></div>

                <RealisticTicket
                    title="Team Building"
                    subtitle="Format Aziendale • 16 Pax"
                    price="€ 1.500"
                    colorTheme="light"
                    icon={Building2}
                    notchColor="bg-stone-200"
                />
            </div>

            {/* Left Content - Changed width to 50% (md:w-1/2) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 order-1 md:order-1 pt-8 md:pt-0 z-10">
                <div className="flex items-center mb-6">
                    <Building2 size={50} className="text-coffee-600 mr-4" />
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif text-coffee-900 leading-tight">Team Building &<br />Grandi Eventi</h2>
                        <p className="text-xl text-amber-700 mt-1 font-bold">Format "Tradizione & Innovazione"</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                        <span className="text-3xl font-serif text-amber-200 mr-4">1</span>
                        <p className="text-gray-600 leading-snug"><strong>Teoria & Assaggio:</strong> Storia e degustazione.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                        <span className="text-3xl font-serif text-amber-200 mr-4">2</span>
                        <p className="text-gray-600 leading-snug"><strong>La Regola:</strong> Si impara la ricetta sacra.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-amber-500 flex items-center">
                        <span className="text-3xl font-serif text-amber-500 mr-4">3</span>
                        <p className="text-gray-600 leading-snug"><strong>Il Gioco Creativo:</strong> I team creano la variante.</p>
                    </div>
                </div>

                <BusinessInsightBox
                    target="Aziende Locali, Convention, Gruppi Incentive."
                    value="Ticket elevato B2B. Ottimo per PR e visibilità aziendale."
                />
            </div>
        </div>
    );
};