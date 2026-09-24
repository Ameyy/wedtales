import React, { useState } from 'react';
import { Check, Mail, Phone, MapPin, Calendar, Heart, Send } from 'lucide-react';

export const InquirePage: React.FC = () => {
  const [coupleNames, setCoupleNames] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDates, setWeddingDates] = useState('');
  const [cityVenue, setCityVenue] = useState('');
  const [celebrationDays, setCelebrationDays] = useState('3 Days');
  const [estimatedGuests, setEstimatedGuests] = useState('200 - 400 Guests');
  const [storyNote, setStoryNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 px-6 md:px-14 max-w-[1440px] mx-auto min-h-screen bg-[#FAF6F0] text-[#1A1615]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Letter & Principles */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#50111B] uppercase block mb-1">
              COMMISSION INQUIRIES · [2026 - 2027]
            </span>
            <h1 className="font-cinzel text-4xl sm:text-5xl font-light tracking-tight text-[#1A1615] mb-4">
              Write to Us
            </h1>
            <p className="font-serif italic text-base text-[#50111B] mb-4">
              "We take on only 12 weddings each year so we can immerse ourselves wholly in your family's story."
            </p>
            <p className="font-sans text-xs md:text-sm text-stone-700 leading-relaxed">
              Every inquiry is read personally by our lead visual directors. Tell us about your journey, your vision for the celebrations, the palace or location, and what you hope your photographs feel like fifty years from now.
            </p>
          </div>

          {/* Studio Locations */}
          <div className="pt-8 border-t border-black/10 space-y-4">
            <h3 className="font-cinzel text-xs font-semibold uppercase tracking-widest text-[#50111B]">
              Direct Coordinates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-stone-700">
              <div className="p-4 bg-white rounded-sm border border-black/10">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#50111B] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Rajasthan Studio</span>
                </div>
                <p>Near Lake Pichola, Old City, Udaipur, Rajasthan 313001</p>
              </div>

              <div className="p-4 bg-white rounded-sm border border-black/10">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#50111B] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Mumbai Archive</span>
                </div>
                <p>Bandra West, Mumbai, Maharashtra 400050</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 text-xs font-mono text-stone-600">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#50111B]" />
                <span>commissions@weddingtales.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#50111B]" />
                <span>+91 98200 45812 (Direct Studio WhatsApp)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Royal Inquiries Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-sm border border-black/10 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#50111B]/10 flex items-center justify-center text-[#50111B]">
                <Check className="w-7 h-7" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#50111B] block">
                LETTER RECEIVED
              </span>
              <h2 className="font-cinzel text-3xl font-light text-[#1A1615]">
                Thank you, {coupleNames || 'Beloved Couple'}.
              </h2>
              <p className="font-sans text-xs md:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Your wedding note has been received by our lead photographers. We check calendar availability and typically respond within 24 to 48 hours with our bespoke portfolio monograph.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#50111B] text-[#FAF6F0] font-cinzel text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#3E0C14] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="font-mono text-[10px] text-[#50111B] uppercase tracking-[0.25em] block mb-1">
                  WEDDING COMMISSION APPLICATION
                </span>
                <h2 className="font-cinzel text-2xl md:text-3xl font-light text-[#1A1615]">
                  Tell Us About Your Celebration
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    Couple's Names *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya & Kabir"
                    value={coupleNames}
                    onChange={(e) => setCoupleNames(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +1 / +44 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    Wedding Dates *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nov 24–27, 2026"
                    value={weddingDates}
                    onChange={(e) => setWeddingDates(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    City & Palace / Venue *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Udaipur, Taj Lake Palace"
                    value={cityVenue}
                    onChange={(e) => setCityVenue(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    Celebration Span
                  </label>
                  <select
                    value={celebrationDays}
                    onChange={(e) => setCelebrationDays(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors cursor-pointer"
                  >
                    <option>2 Days (Intimate)</option>
                    <option>3 Days (Traditional)</option>
                    <option>4+ Days (Grand Royal)</option>
                    <option>Single Day Ceremony</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors cursor-pointer"
                  >
                    <option>Under 100 Guests</option>
                    <option>100 - 300 Guests</option>
                    <option>300 - 600 Guests</option>
                    <option>600+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-cinzel font-semibold tracking-wider text-stone-700 uppercase mb-1">
                  Tell Us Your Story & Vision *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How did you two meet? What are the key rituals (Mehendi, Sangeet, Phere, Reception)? What emotions matter most to you?"
                  value={storyNote}
                  onChange={(e) => setStoryNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-black/15 rounded-sm text-xs font-sans text-stone-900 focus:outline-none focus:border-[#50111B] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#50111B] hover:bg-[#3E0C14] text-[#FAF6F0] text-xs font-cinzel font-semibold tracking-[0.25em] uppercase rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <span>TRANSMIT COMMISSION LETTER</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
