"use client";


import React from "react";
import TextInput from "@/components/textinput";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light text-black">
      {/* Header & Footer are part of the same layout, so only main content here */}
      <div className="flex h-full grow flex-col">
        <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">
          {/* Left Side: Info/Testimonial */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-[#f7fafd] px-16 py-12">
            <div className="max-w-lg w-full">
              <h1 className="text-black tracking-tight text-4xl font-bold leading-tight text-left pb-4 pt-6">Secure Conversations, Simplified.</h1>
              <p className="text-slate-600 text-base font-light leading-relaxed pb-3 pt-1">Welcome to our secure chat platform. Log in to connect with your team and friends in a safe and private environment.</p>
            </div>
          </div>
          {/* Right Side: Login Form */}
          <div className="flex items-center justify-center bg-white px-8 py-12">
            <div className="max-w-md w-full">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-black mb-4">Create your account</h1>
                <div className="flex items-center justify-center space-x-8 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">1</div>
                    <span className="font-semibold text-black">Phone Verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300">2</div>
                    <span>Google Account</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-black font-display mb-1 ml-1">
                    Phone Number
                  </label>
                  <div className="flex gap-3">
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
                      className="flex-1"
                      aria-label="Phone number"
                    />
                  </div>
                </div>
                <button className="w-full h-12 px-6 rounded-lg bg-black text-white font-semibold hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Send Code</button>
              </div>
              <div className="flex items-center my-8">
                <hr className="flex-grow border-slate-200" />
                <span className="mx-4 text-sm text-slate-500 font-light">or</span>
                <hr className="flex-grow border-slate-200" />
              </div>
              <button className="w-full h-12 px-6 flex items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white text-black hover:bg-slate-50 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.818 10.0455C21.818 9.36364 21.7554 8.74545 21.6309 8.12727H12V11.7H17.5927C17.3491 12.8345 16.6345 13.7855 15.6091 14.4673V16.9182H18.6855C20.5364 15.2218 21.818 12.8527 21.818 10.0455Z" fill="#4285F4"></path><path d="M12 22C14.9455 22 17.4545 21.0182 19.2727 19.3818L15.6091 16.9182C14.6582 17.5364 13.4345 17.9318 12 17.9318C9.52364 17.9318 7.41818 16.2873 6.64909 14.1H3.45V16.62C4.91455 19.68 8.18182 22 12 22Z" fill="#34A853"></path><path d="M6.64909 14.1C6.38182 13.3945 6.22364 12.6255 6.22364 11.8318C6.22364 11.0382 6.38182 10.2691 6.64909 9.56364V7.04545H3.45C2.52545 8.78182 2 10.2455 2 11.8318C2 13.4182 2.52545 14.8818 3.45 16.62L6.64909 14.1Z" fill="#FBBC05"></path><path d="M12 5.72727C13.5655 5.72727 14.9382 6.25818 16.0364 7.29273L19.3545 4C17.4545 2.29091 14.9455 1 12 1C8.18182 1 4.91455 3.32 3.45 6.38182L6.64909 8.9C7.41818 6.71273 9.52364 5.72727 12 5.72727Z" fill="#EA4335"></path></svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
