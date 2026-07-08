import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, Heart, MessageSquare, AlertCircle, Check, Copy, Info, Lock, Building } from 'lucide-react';
import SuccessScreen from './SuccessScreen';

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory (FCT)"
];

const COUNTRIES = [
  "Nigeria", "United States", "United Kingdom", "Canada", "Ghana", "Kenya", 
  "South Africa", "Germany", "Australia", "France", "United Arab Emirates", 
  "Saudi Arabia", "Ireland", "Netherlands", "Belgium", "Ukraine", "Other"
];

const COMMITMENT_OPTIONS = [
  "₦10,000", "₦20,000", "₦30,000", "₦40,000", "₦50,000", 
  "₦60,000", "₦70,000", "₦80,000", "₦90,000", "₦100,000", "Above ₦100,000"
];

interface FormState {
  fullName: string;
  phoneNumber: string;
  address: string;
  state: string;
  country: string;
  wantsToJoinTeam: string;
  monthlyCommitment: string;
  joinWhatsAppCommunity: string;
}

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    address: '',
    state: '',
    country: 'Nigeria',
    wantsToJoinTeam: '',
    monthlyCommitment: '',
    joinWhatsAppCommunity: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const paymentCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (form.monthlyCommitment && paymentCardRef.current) {
      const timer = setTimeout(() => {
        paymentCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [form.monthlyCommitment]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`✅ ${label} copied successfully!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Country Search Dropdown States
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(country =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Full name is required';
      case 'phoneNumber':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^(?:\+234|0)[789][01]\d{8}$/;
        return phoneRegex.test(value.replace(/\s+/g, ''))
          ? ''
          : 'Invalid Nigerian number format (e.g. 08031234567)';
      case 'address':
        return value.trim() ? '' : 'Residential address is required';
      case 'state':
        return value ? '' : 'Please select your state of residence';
      case 'country':
        return value ? '' : 'Please select/search a country';
      case 'wantsToJoinTeam':
        return value ? '' : 'Please select if you wish to join the team';
      case 'monthlyCommitment':
        return value ? '' : 'Please select a monthly partnership commitment';
      case 'joinWhatsAppCommunity':
        return value ? '' : 'Please select your WhatsApp community preference';
      default:
        return '';
    }
  };

  const handleInputChange = (name: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const formErrors: Partial<FormState> = {};
    Object.keys(form).forEach(key => {
      const field = key as keyof FormState;
      const errorMsg = validateField(field, form[field]);
      if (errorMsg) {
        formErrors[field] = errorMsg;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      const firstErrorKey = Object.keys(formErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0] || document.getElementById(firstErrorKey);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      if (!scriptUrl) {
        console.warn("VITE_GOOGLE_SCRIPT_URL not found. Utilizing local storage backup.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const currentSubmissions = JSON.parse(localStorage.getItem('youth_awake_registrations') || '[]');
        currentSubmissions.push({
          ...form,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('youth_awake_registrations', JSON.stringify(currentSubmissions));
      } else {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        });
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      const currentSubmissions = JSON.parse(localStorage.getItem('youth_awake_registrations') || '[]');
      currentSubmissions.push({
        ...form,
        timestamp: new Date().toISOString(),
        backup: true
      });
      localStorage.setItem('youth_awake_registrations', JSON.stringify(currentSubmissions));
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      phoneNumber: '',
      address: '',
      state: '',
      country: 'Nigeria',
      wantsToJoinTeam: '',
      monthlyCommitment: '',
      joinWhatsAppCommunity: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  if (isSubmitted) {
    return (
      <SuccessScreen
        fullName={form.fullName}
        wantsWhatsApp={form.joinWhatsAppCommunity === 'Yes'}
        onReset={handleReset}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glassmorphism p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl max-w-3xl mx-auto shadow-2xl relative w-full"
    >
      {/* Ribbon Banner Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <h3 className="font-montserrat text-xl sm:text-3xl font-extrabold text-white text-center mb-1.5 px-2">
        Become a Kingdom Partner
      </h3>
      <p className="font-poppins text-slate-400 text-xs sm:text-sm text-center mb-8 sm:mb-10 px-4">
        Fill out the registration details below to join Youth Awake Financial Giants.
      </p>

      {submitError && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-200 text-sm font-poppins rounded-xl flex items-center space-x-3 w-full">
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 w-full" noValidate>
        
        {/* Row 1: Full Name & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="space-y-1.5 w-full">
            <label htmlFor="fullName" className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
              Full Name <span className="text-brand-gold">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full h-12 px-4 rounded-xl bg-white/5 border ${
                errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-brand-gold/60'
              } text-white font-poppins text-base placeholder-slate-500 focus:outline-none transition-all`}
              placeholder="e.g. John Doe"
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div className="space-y-1.5 w-full">
            <label htmlFor="phoneNumber" className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
              Phone Number <span className="text-brand-gold">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className={`w-full h-12 px-4 rounded-xl bg-white/5 border ${
                errors.phoneNumber ? 'border-red-500' : 'border-white/10 focus:border-brand-gold/60'
              } text-white font-poppins text-base placeholder-slate-500 focus:outline-none transition-all`}
              placeholder="e.g. 08031234567"
              disabled={isSubmitting}
            />
            {errors.phoneNumber && (
              <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.phoneNumber}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Residential Address */}
        <div className="space-y-1.5 w-full">
          <label htmlFor="address" className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
            Residential Address <span className="text-brand-gold">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            value={form.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className={`w-full min-h-[96px] py-3 px-4 rounded-xl bg-white/5 border ${
              errors.address ? 'border-red-500' : 'border-white/10 focus:border-brand-gold/60'
            } text-white font-poppins text-base placeholder-slate-500 focus:outline-none transition-all resize-none`}
            placeholder="House Number, Street Name, City/Town"
            disabled={isSubmitting}
          />
          {errors.address && (
            <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.address}</span>
            </p>
          )}
        </div>

        {/* Row 3: State of Residence & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* State of Residence */}
          <div className="space-y-1.5 w-full">
            <label htmlFor="state" className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
              State of Residence <span className="text-brand-gold">*</span>
            </label>
            <select
              id="state"
              name="state"
              value={form.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={`w-full h-12 px-4 rounded-xl bg-white/5 border ${
                errors.state ? 'border-red-500' : 'border-white/10 focus:border-brand-gold/60'
              } text-slate-100 font-poppins text-base focus:outline-none transition-all [&>option]:bg-[#030d22] [&>option]:text-white`}
              disabled={isSubmitting}
            >
              <option value="" className="text-slate-400">-- Select State --</option>
              {NIGERIAN_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.state}</span>
              </p>
            )}
          </div>

          {/* Country Searchable Dropdown */}
          <div className="space-y-1.5 w-full relative" ref={countryDropdownRef} id="country">
            <label className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
              Country <span className="text-brand-gold">*</span>
            </label>
            
            {/* Custom Input */}
            <div className="relative">
              <input
                type="text"
                value={isCountryDropdownOpen ? countrySearch : form.country}
                onFocus={() => {
                  setIsCountryDropdownOpen(true);
                  setCountrySearch('');
                }}
                onChange={(e) => {
                  setCountrySearch(e.target.value);
                  setForm(prev => ({ ...prev, country: e.target.value }));
                }}
                className={`w-full h-12 pl-4 pr-10 rounded-xl bg-white/5 border ${
                  errors.country ? 'border-red-500' : 'border-white/10 focus:border-brand-gold/60'
                } text-white font-poppins text-base placeholder-slate-500 focus:outline-none transition-all`}
                placeholder="Search or type country..."
                disabled={isSubmitting}
              />
              <Search className="absolute right-3.5 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
            </div>

            {/* Dropdown Options */}
            <AnimatePresence>
              {isCountryDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 right-0 mt-1.5 max-h-48 overflow-y-auto bg-[#030d22] border border-white/10 rounded-xl z-20 shadow-xl"
                >
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          handleInputChange('country', c);
                          setIsCountryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-base text-slate-300 hover:bg-brand-gold/15 hover:text-white font-poppins transition-colors flex items-center h-12"
                      >
                        {c}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-slate-500 font-poppins">
                      No country found. Type to add custom value.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {errors.country && (
              <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{errors.country}</span>
              </p>
            )}
          </div>
        </div>

        {/* Question: Wants to join the team */}
        <div className="space-y-2.5 w-full" id="wantsToJoinTeam">
          <label className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
            Do you wish to become part of this team? <span className="text-brand-gold">*</span>
          </label>
          <div className="flex flex-wrap gap-4 items-center">
            {['Yes', 'No'].map((option) => (
              <label 
                key={option} 
                onClick={() => handleInputChange('wantsToJoinTeam', option)}
                className={`flex items-center space-x-3 py-2.5 px-4 rounded-xl border transition-all cursor-pointer group select-none min-h-[48px] ${
                  form.wantsToJoinTeam === option
                    ? 'border-brand-gold/50 bg-brand-gold/5'
                    : 'border-white/5 hover:bg-white/5'
                }`}
              >
                <input
                  type="radio"
                  name="wantsToJoinTeam"
                  value={option}
                  checked={form.wantsToJoinTeam === option}
                  onChange={() => {}}
                  className="sr-only"
                  disabled={isSubmitting}
                />
                <span className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                  form.wantsToJoinTeam === option
                    ? 'border-brand-gold'
                    : 'border-white/20 group-hover:border-white/40'
                }`}>
                  {form.wantsToJoinTeam === option && (
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                  )}
                </span>
                <span className="font-poppins text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.wantsToJoinTeam && (
            <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.wantsToJoinTeam}</span>
            </p>
          )}
        </div>

        {/* Commitment Cards selection */}
        <div className="space-y-4 w-full" id="monthlyCommitment">
          <div>
            <label className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
              Monthly Partnership Commitment <span className="text-brand-gold">*</span>
            </label>
            <p className="font-poppins text-slate-400 text-xs mt-1">
              Select your preferred monthly partnership amount to support the advancement of God's work among the youth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {COMMITMENT_OPTIONS.map((val) => {
              const isSelected = form.monthlyCommitment === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleInputChange('monthlyCommitment', val)}
                  className={`py-3.5 px-3 rounded-xl border font-poppins font-semibold text-sm transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99] min-h-[48px] w-full ${
                    isSelected
                      ? 'gold-glow-active bg-brand-gold/10 text-brand-gold'
                      : 'border-white/5 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                  disabled={isSubmitting}
                >
                  <span>{val}</span>
                  {isSelected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex-shrink-0"
                    >
                      <Check className="h-4 w-4 stroke-[3]" />
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
          {errors.monthlyCommitment && (
            <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.monthlyCommitment}</span>
            </p>
          )}

          {/* Dynamic Payment Card & Selected Badge */}
          <AnimatePresence>
            {form.monthlyCommitment && (
              <motion.div
                ref={paymentCardRef}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 space-y-4 w-full"
              >
                {/* Highlighted Badge */}
                <div className="p-4 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs sm:text-sm font-poppins rounded-xl font-semibold flex items-center justify-center text-center shadow-inner leading-relaxed">
                  🎉 You have chosen to partner with {form.monthlyCommitment} monthly. Thank you for supporting the Youth Awake outreach mandate!
                </div>

                {/* Premium Payment Card */}
                <div className="glassmorphism border border-brand-gold/20 p-5 sm:p-8 rounded-2xl relative overflow-hidden shadow-2xl w-full">
                  {/* Subtle ambient glow inside card */}
                  <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
                  
                  {/* Title & Description */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 mb-6 w-full">
                    <div className="p-2.5 bg-brand-gold/15 rounded-xl border border-brand-gold/30 text-brand-gold flex-shrink-0">
                      <Building className="h-5.5 w-5.5" />
                    </div>
                    <div className="text-center sm:text-left space-y-1 w-full">
                      <h4 className="font-montserrat font-bold text-base sm:text-lg text-white">
                        Complete Your Partnership
                      </h4>
                      <p className="font-poppins text-xs text-slate-350 leading-relaxed">
                        Thank you for choosing to partner with Youth Awake Financial Giants. Kindly use the account details below to make your monthly partnership donation.
                      </p>
                    </div>
                  </div>

                  {/* Payment Details Box */}
                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 sm:p-5 space-y-3.5 mb-6 w-full">
                    {/* Bank Name */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 border-b border-white/5 gap-1 sm:gap-0">
                      <span className="font-poppins text-xs text-slate-400">Bank Name</span>
                      <span className="font-poppins text-sm font-semibold text-slate-200">Moniepoint Microfinance Bank</span>
                    </div>

                    {/* Account Name */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 border-b border-white/5 gap-1 sm:gap-0">
                      <span className="font-poppins text-xs text-slate-400">Account Name</span>
                      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                        <span className="font-poppins text-sm font-semibold text-slate-200 break-words max-w-[200px] sm:max-w-none">Chinenye Racheal Igweokolo</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('Chinenye Racheal Igweokolo', 'Account Name')}
                          className="text-slate-400 hover:text-brand-gold p-2 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0 h-10 w-10 flex items-center justify-center"
                          title="Copy Account Name"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Account Number */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 gap-1 sm:gap-0">
                      <span className="font-poppins text-xs text-slate-400">Account Number</span>
                      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                        <span className="font-poppins text-base sm:text-lg font-bold text-brand-gold tracking-wider select-all">9078382145</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('9078382145', 'Account Number')}
                          className="text-slate-400 hover:text-brand-gold p-2 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0 h-10 w-10 flex items-center justify-center"
                          title="Copy Account Number"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full">
                    <button
                      type="button"
                      onClick={() => copyToClipboard('9078382145', 'Account Number')}
                      className="py-3 px-4 rounded-xl border border-white/15 hover:border-brand-gold/40 hover:bg-brand-gold/5 font-poppins font-semibold text-sm text-slate-200 hover:text-brand-gold transition-all h-12 w-full flex items-center justify-center active:scale-[0.99]"
                    >
                      Copy Account Number
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const details = `Youth Awake Financial Giants Partnership\nBank: Moniepoint Microfinance Bank\nAccount Name: Chinenye Racheal Igweokolo\nAccount Number: 9078382145`;
                        copyToClipboard(details, 'All Payment Details');
                      }}
                      className="py-3 px-4 rounded-xl border border-white/15 hover:border-brand-gold/40 hover:bg-brand-gold/5 font-poppins font-semibold text-sm text-slate-200 hover:text-brand-gold transition-all h-12 w-full flex items-center justify-center active:scale-[0.99]"
                    >
                      Copy All Payment Details
                    </button>
                  </div>

                  {/* Payment Confirmation Notice */}
                  <div className="p-4 bg-[#0a2e73]/20 border border-[#0a2e73]/40 text-slate-350 text-xs sm:text-sm font-poppins rounded-xl flex flex-col sm:flex-row items-start gap-3 shadow-inner leading-relaxed">
                    <Info className="h-5 w-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h5 className="font-bold text-white">After Making Your Transfer</h5>
                      <p className="text-slate-300">
                        Kindly complete and submit this registration form after making your transfer. Our team will review your registration and contact you if necessary. Your partnership helps advance God's Kingdom and impact the lives of young people.
                      </p>
                    </div>
                  </div>

                  {/* Secure visual indicator at bottom right */}
                  <div className="flex items-center justify-end gap-1.5 text-slate-500 text-xxs font-poppins uppercase tracking-wider mt-4">
                    <Lock className="h-3.5 w-3.5" />
                    <span>Secure Kingdom Transaction</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question: WhatsApp Community */}
        <div className="space-y-2.5 w-full" id="joinWhatsAppCommunity">
          <label className="block font-poppins font-medium text-xs sm:text-sm text-slate-300">
            Would you like to be added to the official Youth Awake Financial Giants WhatsApp Community? <span className="text-brand-gold">*</span>
          </label>
          <div className="flex flex-wrap gap-4 items-center">
            {['Yes', 'No'].map((option) => (
              <label 
                key={option} 
                onClick={() => handleInputChange('joinWhatsAppCommunity', option)}
                className={`flex items-center space-x-3 py-2.5 px-4 rounded-xl border transition-all cursor-pointer group select-none min-h-[48px] ${
                  form.joinWhatsAppCommunity === option
                    ? 'border-brand-gold/50 bg-brand-gold/5'
                    : 'border-white/5 hover:bg-white/5'
                }`}
              >
                <input
                  type="radio"
                  name="joinWhatsAppCommunity"
                  value={option}
                  checked={form.joinWhatsAppCommunity === option}
                  onChange={() => {}}
                  className="sr-only"
                  disabled={isSubmitting}
                />
                <span className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                  form.joinWhatsAppCommunity === option
                    ? 'border-brand-gold'
                    : 'border-white/20 group-hover:border-white/40'
                }`}>
                  {form.joinWhatsAppCommunity === option && (
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                  )}
                </span>
                <span className="font-poppins text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.joinWhatsAppCommunity && (
            <p className="text-red-400 text-xs font-poppins flex items-center gap-1 mt-1">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.joinWhatsAppCommunity}</span>
            </p>
          )}
        </div>

        {/* Interactive WhatsApp invitation card */}
        <AnimatePresence>
          {form.joinWhatsAppCommunity === 'Yes' && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden w-full"
            >
              <div className="p-5 sm:p-6 bg-[#075e54]/10 border border-[#075e54]/30 rounded-2xl shadow-inner w-full">
                <div className="flex items-center space-x-2.5 text-[#25d366] mb-3">
                  <MessageSquare className="h-5.5 w-5.5 fill-[#25d366]" />
                  <h4 className="font-poppins font-bold text-sm sm:text-base">
                    Join Our Official WhatsApp Community
                  </h4>
                </div>
                <p className="font-poppins text-xs sm:text-sm text-slate-350 leading-relaxed mb-4">
                  Thank you for choosing to become part of our online family.
                  Join our official Youth Awake Financial Giants WhatsApp Community to receive updates, 
                  prayer sessions, teachings, fellowship announcements, testimonies, and other ministry activities.
                </p>
                <a
                  href="https://chat.whatsapp.com/KlC4finQZLA1pvGDnFS5BU?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full h-12 rounded-full font-poppins font-bold text-sm text-white bg-[#25d366] hover:bg-[#128c7e] transition-colors shadow-md shadow-[#25d366]/20 active:scale-[0.99]"
                >
                  Join WhatsApp Community
                </a>
                <p className="font-poppins text-xxs sm:text-xs text-slate-400 mt-3 italic leading-relaxed">
                  After joining the group, kindly return to this page and submit your registration.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <div className="pt-4 w-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 h-14 rounded-full font-poppins font-bold text-base text-[#030d22] bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold hover:from-yellow-400 hover:to-brand-gold shadow-lg shadow-brand-gold/20 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Submitting your registration...</span>
              </>
            ) : (
              <>
                <Heart className="h-5 w-5 fill-current text-[#030d22] group-hover:scale-110 transition-transform" />
                <span>Become a Kingdom Partner</span>
              </>
            )}
            
            <span className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
          </button>
        </div>

      </form>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0c2f16] border border-emerald-500/30 text-emerald-200 px-5 py-3 rounded-2xl shadow-2xl shadow-black/80 font-poppins text-sm flex items-center gap-2"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
