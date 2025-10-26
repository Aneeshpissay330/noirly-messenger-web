"use client";



import React, { useState } from "react";
import TextInput from "@/components/textinput";
import Stepper from "@/components/stepper";

export default function LoginPage() {
  const [step, setStep] = useState(0);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Handle OTP input change and auto-focus
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value[0];
    setOtp(newOtp);
    // Auto-focus next input
    if (value && idx < 5) {
      const next = document.getElementById(`otp-${idx + 1}`);
      if (next) (next as HTMLInputElement).focus();
    }
    // Removed auto-advance to next step when all OTP digits are filled
  };

  const handleSendCode = () => {
    setShowOtp(true);
  };

  // Handle OTP submit button
  const handleOtpSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (otp.every((d) => d.length === 1)) {
      setStep(1);
    }
  };
  return (
  <div className="relative flex w-full flex-1 flex-col overflow-x-hidden font-display bg-background-light text-black">
      {/* Header & Footer are part of the same layout, so only main content here */}
      <div className="flex grow flex-col h-full min-h-0">
        <main className="grid grid-cols-1 lg:grid-cols-2 w-full flex-1 min-h-0">
          {/* Left Side: Info/Testimonial */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-[#f7fafd] px-12 py-6">
            <div className="max-w-lg w-full">
              <h1 className="text-black tracking-tight text-4xl font-bold leading-tight text-left pb-2 pt-4">Secure Conversations, Simplified.</h1>
              <p className="text-slate-600 text-base font-light leading-relaxed pb-2 pt-1">Welcome to our secure chat platform. Log in to connect with your team and friends in a safe and private environment.</p>
            </div>
          </div>
          {/* Right Side: Login Form */}
          <div className="flex items-center justify-center bg-white px-6 py-6">
            <div className="max-w-md w-full flex flex-col">
              <div className="text-center pt-2 pb-6">
                <h1 className="text-3xl font-bold text-black mb-2">Create your account</h1>
                <Stepper
                  steps={["Phone Verification", "Google Account"]}
                  currentStep={step}
                  onStepChange={undefined}
                  className="mb-2"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
              {step === 0 && !showOtp && (
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-center items-center">
                      <label htmlFor="phone" className="block text-sm font-medium text-black font-display mb-1 ml-1 self-start">
                        Phone Number
                      </label>
                      <div className="flex gap-3 mt-2 justify-center items-center">
                        <TextInput
                          id="country-code"
                          placeholder="+1"
                          type="text"
                          autoComplete="tel-country-code"
                          className="w-24"
                          aria-label="Country code"
                        />
                        <TextInput
                          id="phone"
                          placeholder="(555) 000-1234"
                          type="tel"
                          autoComplete="tel-national"
                          className="w-64"
                          aria-label="Phone number"
                        />
                      </div>
                    </div>
                    <button
                      className="w-full h-12 px-6 rounded-lg bg-black text-white font-semibold hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      onClick={handleSendCode}
                    >
                      Send Code
                    </button>
                  </div>
                </>
              )}
              {step === 0 && showOtp && (
                <>
                  <form
                    className="flex flex-col items-center justify-center min-h-[180px] w-full"
                    onSubmit={handleOtpSubmit}
                  >
                    <div className="space-y-2 w-full flex flex-col items-center">
                      <label className="block text-sm font-medium text-black font-display mb-1 ml-1 text-center w-full">
                        Enter 6-digit OTP
                      </label>
                      <div className="flex gap-2 justify-center items-center w-full">
                        {otp.map((digit, idx) => (
                          <input
                            key={idx}
                            id={`otp-${idx}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="w-12 h-12 text-center border border-slate-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-black"
                            value={digit}
                            onChange={(e) => handleOtpChange(e, idx)}
                          />
                        ))}
                      </div>
                      <button
                        type="submit"
                        className="mt-4 w-full h-12 px-6 rounded-lg bg-black text-white font-semibold hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
                        disabled={!otp.every((d) => d.length === 1)}
                      >
                        Submit OTP
                      </button>
                    </div>
                  </form>
                </>
              )}
              {step === 1 && (
                <>
                  <div className="flex flex-col gap-6">
                    <button className="w-full h-12 px-6 flex items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white text-black hover:bg-slate-50 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.818 10.0455C21.818 9.36364 21.7554 8.74545 21.6309 8.12727H12V11.7H17.5927C17.3491 12.8345 16.6345 13.7855 15.6091 14.4673V16.9182H18.6855C20.5364 15.2218 21.818 12.8527 21.818 10.0455Z" fill="#4285F4"></path><path d="M12 22C14.9455 22 17.4545 21.0182 19.2727 19.3818L15.6091 16.9182C14.6582 17.5364 13.4345 17.9318 12 17.9318C9.52364 17.9318 7.41818 16.2873 6.64909 14.1H3.45V16.62C4.91455 19.68 8.18182 22 12 22Z" fill="#34A853"></path><path d="M6.64909 14.1C6.38182 13.3945 6.22364 12.6255 6.22364 11.8318C6.22364 11.0382 6.38182 10.2691 6.64909 9.56364V7.04545H3.45C2.52545 8.78182 2 10.2455 2 11.8318C2 13.4182 2.52545 14.8818 3.45 16.62L6.64909 14.1Z" fill="#FBBC05"></path><path d="M12 5.72727C13.5655 5.72727 14.9382 6.25818 16.0364 7.29273L19.3545 4C17.4545 2.29091 14.9455 1 12 1C8.18182 1 4.91455 3.32 3.45 6.38182L6.64909 8.9C7.41818 6.71273 9.52364 5.72727 12 5.72727Z" fill="#EA4335"></path></svg>
                      <span>Sign in with Google</span>
                    </button>
                  </div>
                </>
              )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
