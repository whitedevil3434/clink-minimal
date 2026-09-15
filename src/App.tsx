/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Mic, Heart, User, Hourglass, Check, ArrowRight, Package, Camera, Image as ImageIcon, Building, ReceiptText, X, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}>
    {children}
  </div>
);

const CircleIcon = ({ icon: Icon }: { icon: any }) => (
  <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
    <Icon className="w-5 h-5 text-gray-600" strokeWidth={1.2} />
  </div>
);

const Label = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`text-[11px] text-gray-500 tracking-[0.1em] uppercase font-medium ${className}`}>
    {children}
  </span>
);

const VLine = ({ dotted, height = "h-8" }: { dotted?: boolean, height?: string }) => (
  <div className={`${height} w-px ${dotted ? 'border-l-[1.5px] border-dotted border-gray-300' : 'bg-gray-200'} my-1`}></div>
);

const Layout = ({ 
  children, 
  statusText, 
  bottomInputPlaceholder = "Tell C-Link...", 
  topRightContent = null 
}: { 
  children: React.ReactNode, 
  statusText?: string, 
  bottomInputPlaceholder?: string,
  topRightContent?: React.ReactNode
}) => {
  return (
    <div className="h-full w-full bg-[#FCFAF8] text-[#1A1A1A] font-sans flex flex-col relative overflow-hidden select-none">
      <header className="pt-12 pb-6 px-6 shrink-0 flex justify-center relative">
        <h1 className="tracking-[0.3em] text-sm font-medium text-gray-800">C-LINK</h1>
        {topRightContent && (
           <div className="absolute right-6 top-12 -translate-y-1/2">
             {topRightContent}
           </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-md mx-auto flex flex-col relative px-6 overflow-y-auto pb-48 hide-scrollbar">
        {children}
      </main>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#FCFAF8] via-[#FCFAF8] to-transparent pt-16 pb-8 px-6 flex flex-col items-center pointer-events-none">
        <div className="w-full max-w-md flex flex-col gap-5 pointer-events-auto">
          {statusText && (
            <div className="flex items-start gap-2 text-gray-500 text-sm px-2">
              <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />
              <p>{statusText}</p>
            </div>
          )}

          <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-5 py-4 flex items-center gap-3 w-full">
            <Sparkles className="w-5 h-5 text-gray-300" />
            <input
              type="text"
              placeholder={bottomInputPlaceholder}
              className="flex-1 outline-none bg-transparent placeholder:text-gray-400 text-gray-800 pointer-events-none"
              readOnly
            />
            <Mic className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};


// --- Screens ---

const Screen0 = () => (
  <Layout bottomInputPlaceholder="Tell C-Link...">
    <div className="flex-1 flex items-center justify-center -mt-20">
      <div className="flex items-center gap-2 text-gray-400">
        <Sparkles className="w-5 h-5" />
        <span>Tell C-Link what needs to happen</span>
      </div>
    </div>
  </Layout>
);

const Screen1 = () => (
  <Layout statusText="30kg is committed. 20kg still needs a source.">
    <div className="flex flex-col items-center w-full pb-8">
      <Card className="p-5 w-full max-w-[280px]">
        <div className="flex gap-4 items-center">
          <CircleIcon icon={Heart} />
          <div>
            <Label>WANT</Label>
            <h2 className="text-xl font-medium mt-0.5 text-gray-800">50kg Rice</h2>
            <p className="text-gray-500 text-[13px] mt-0.5">Office · Tomorrow 10 AM</p>
          </div>
        </div>
      </Card>
      
      <VLine dotted height="h-6" />
      
      <Card className="p-5 w-full max-w-[280px]">
        <div className="flex gap-4 items-center">
          <CircleIcon icon={User} />
          <div>
            <Label>WHO</Label>
            <h2 className="text-xl font-medium mt-0.5 text-gray-800">Rahim</h2>
            <p className="text-[15px] mt-0.5 text-gray-800">30kg</p>
            <p className="text-green-700 text-[13px] mt-0.5 flex items-center gap-1 font-medium">
              <Check className="w-3.5 h-3.5" strokeWidth={3} /> agreed
            </p>
          </div>
        </div>
      </Card>
      
      <VLine dotted height="h-6" />
      
      <Card className="p-5 w-full max-w-[280px]">
        <div className="flex gap-4 items-center">
          <CircleIcon icon={Hourglass} />
          <div>
            <Label>GAP</Label>
            <h2 className="text-xl font-medium mt-0.5 text-gray-800">20kg</h2>
            <Label className="mt-1 block">OPEN</Label>
            <p className="mt-1 font-medium text-[15px] text-gray-800">Find</p>
          </div>
        </div>
      </Card>
    </div>
  </Layout>
);

const Screen2 = () => (
  <Layout statusText="20kg still needs a source.">
    <div className="flex flex-col items-center w-full pb-8">
      <Card className="px-6 py-5 w-full max-w-[280px]">
        <Label>WANT</Label>
        <h2 className="text-xl font-medium mt-0.5 text-gray-800">50kg Rice</h2>
        <p className="text-gray-500 text-[13px] mt-0.5">Office · Tomorrow 10 AM</p>
      </Card>
      
      <div className="h-6 w-px bg-gray-200 relative my-1">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
      </div>
      
      <Card className="px-6 py-5 w-full max-w-[280px]">
        <Label>WHO</Label>
        <h2 className="text-xl font-medium mt-0.5 text-gray-800">Rahim</h2>
        <p className="text-[15px] mt-0.5 text-gray-800">30kg</p>
        <p className="text-gray-800 text-[13px] mt-0.5 flex items-center gap-1 font-medium">
          <Check className="w-3.5 h-3.5" strokeWidth={3} /> agreed
        </p>
      </Card>
      
      <div className="h-6 w-px bg-gray-200 relative my-1">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
      </div>
      
      <Card className="px-6 py-6 w-full max-w-[280px] border border-gray-50">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">GAP</h2>
        <h3 className="text-2xl mt-1 text-gray-800 font-medium">20kg</h3>
        <Label className="mt-4 block tracking-widest text-gray-400">STILL OPEN</Label>
        <div className="h-px bg-gray-100 w-full my-4"></div>
        <div className="flex items-center gap-2 font-medium text-gray-800">
          Find <ArrowRight className="w-4 h-4" />
        </div>
      </Card>
    </div>
  </Layout>
);

const Screen3 = () => (
  <Layout statusText="Looking for actors who can cover the remaining 20kg.">
    <div className="flex flex-col items-center w-full mt-2 pb-8">
      <Card className="w-full max-w-[320px] p-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">GAP</h2>
        <h3 className="text-xl mt-1 mb-6 text-gray-600 font-medium">20kg OPEN</h3>
        
        <div className="flex flex-col gap-2.5 text-sm border-b border-gray-100 pb-6">
          <div className="flex justify-between">
            <span className="text-gray-500">Need:</span>
            <span className="text-gray-800 font-medium">50kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Covered:</span>
            <span className="text-gray-800 font-medium">30kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Missing:</span>
            <span className="text-[#C84A31] font-medium">20kg</span>
          </div>
        </div>

        <div className="mt-6">
          <Label className="text-gray-800 tracking-widest">WHY?</Label>
          <div className="mt-4 space-y-2 text-[13px] text-gray-700">
            <p>Rahim committed 30kg.</p>
            <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0"/> 20kg remains</p>
            <p className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-gray-400 shrink-0"/> No second commitment yet</p>
          </div>
        </div>

        <div className="flex gap-2 mt-8">
          <button className="flex-1 bg-white hover:bg-gray-50 py-3 rounded-xl text-sm font-medium shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-gray-100 transition-colors text-gray-700">Find</button>
          <button className="flex-1 bg-white hover:bg-gray-50 py-3 rounded-xl text-sm font-medium shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-gray-100 transition-colors text-gray-700">Ask</button>
          <button className="flex-1 bg-white hover:bg-gray-50 py-3 rounded-xl text-sm font-medium shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-gray-100 transition-colors text-gray-700">Trace</button>
        </div>
      </Card>
    </div>
  </Layout>
);

const Screen4 = () => (
  <Layout statusText="2 possible actors found.">
    <div className="flex flex-col items-center w-full mt-12">
      <Label className="tracking-widest">GAP</Label>
      <h2 className="text-xl text-gray-400 mt-1 font-medium tracking-wide">20kg OPEN</h2>
      
      <svg className="w-full max-w-[240px] h-20 mt-2 overflow-visible" viewBox="0 0 240 80" fill="none">
        <path d="M120 0 C120 40, 50 40, 50 80" stroke="#E5E7EB" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M120 0 C120 40, 190 40, 190 80" stroke="#E5E7EB" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="flex gap-4 w-full justify-center -mt-1">
        <Card className="flex-1 max-w-[140px] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-medium tracking-wide">MA</div>
            <span className="text-[13px] font-medium tracking-[0.1em] text-gray-700">MINA</span>
          </div>
          <div className="w-8 h-px bg-gray-300 mb-3"></div>
          <Label className="tracking-[0.1em]">POSSIBLE</Label>
          <p className="text-xl mt-1 text-gray-600 font-medium">20kg</p>
        </Card>
        
        <Card className="flex-1 max-w-[140px] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-medium tracking-wide">HA</div>
            <span className="text-[13px] font-medium tracking-[0.1em] text-gray-700">HASAN</span>
          </div>
          <div className="w-8 h-px bg-gray-300 mb-3"></div>
          <Label className="tracking-[0.1em]">POSSIBLE</Label>
          <p className="text-xl mt-1 text-gray-600 font-medium">20kg</p>
        </Card>
      </div>
    </div>
  </Layout>
);

const Screen5 = () => (
  <Layout statusText="Mina can cover the remaining 20kg tomorrow at 10 AM.">
    <div className="flex flex-col items-center w-full mt-4 relative">
      <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-start pt-6 z-0 pointer-events-none opacity-80">
        <h2 className="text-[4rem] leading-none text-gray-300 font-serif tracking-tight">GAP</h2>
        <h1 className="text-[7rem] leading-none text-gray-300 font-serif -mt-4 mb-2">20kg</h1>
        <p className="text-[13px] text-gray-400 tracking-wide">(now quieter / almost closing)</p>
        <div className="w-full max-w-[280px] h-px bg-gray-200 mt-8"></div>
      </div>
      
      <div className="mt-48 w-full flex flex-col items-center z-10 relative">
        <Card className="text-center p-8 w-full max-w-[280px] bg-white/95 backdrop-blur-sm">
          <h3 className="tracking-[0.2em] font-medium text-[13px] text-gray-800 uppercase">MINA</h3>
          <p className="text-5xl font-serif mt-2 mb-3 text-gray-800">20kg</p>
          <Label className="tracking-[0.15em]">OFFERED</Label>
          <div className="w-full h-px bg-gray-200 my-5"></div>
          <p className="text-[13px] text-gray-500">Tomorrow · 10 AM</p>
        </Card>
        
        <button className="mt-8 bg-white/50 hover:bg-white backdrop-blur-sm border border-gray-200 px-8 py-3 rounded-xl text-gray-700 font-medium shadow-sm transition-colors text-sm tracking-wide">
          [ Accept ]
        </button>
      </div>
    </div>
  </Layout>
);

const Screen6 = () => (
  <Layout statusText="Rice is fully covered. Transport is now the critical frontier.">
    <div className="flex flex-col items-start w-full max-w-[300px] mx-auto mt-12 space-y-6">
      <div>
        <h3 className="tracking-[0.2em] text-[13px] font-medium text-gray-800">MINA</h3>
        <p className="text-4xl font-serif mt-1 text-gray-400">20kg</p>
        <p className="text-[13px] font-medium mt-3 flex items-center gap-1.5 text-gray-700">
          <Check className="w-4 h-4" strokeWidth={2.5}/> COMMITTED
        </p>
        <p className="text-[13px] text-gray-500 mt-1">Tomorrow · 10 AM</p>
      </div>
      
      <div className="w-full h-px bg-gray-200"></div>
      
      <div className="py-2">
        <div className="flex items-baseline gap-3">
           <span className="text-3xl font-serif text-gray-400">50kg</span>
           <span className="tracking-[0.15em] text-[13px] text-gray-600 font-medium uppercase">COVERED</span>
        </div>
        <p className="text-gray-500 text-[13px] mt-1">(quiet confirmation)</p>
      </div>
      
      <div className="w-full h-px bg-gray-200"></div>
      
      <Card className="p-6 w-full shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-gray-400"/>
          <Label className="tracking-widest">TRANSPORT</Label>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-700">BLOCKED</h2>
        <p className="text-gray-500 text-sm mt-1.5">no driver</p>
      </Card>
    </div>
  </Layout>
);

const Screen7 = () => (
  <Layout statusText="Transport is now the critical frontier." bottomInputPlaceholder="Tell C-Link what should happen...">
    <div className="flex flex-col items-center w-full transform scale-[0.80] origin-top mt-0 pb-10">
      <Card className="p-5 text-center max-w-[200px] w-full">
        <Label>WANT</Label>
        <h2 className="text-xl font-medium mt-1 text-gray-800">50kg Rice</h2>
        <p className="text-[12px] text-gray-500 mt-1">Office · Tomorrow 10 AM</p>
      </Card>
      
      <svg className="w-full max-w-[240px] h-12 overflow-visible" viewBox="0 0 240 48" fill="none">
        <path d="M120 0 C120 24, 50 24, 50 48" stroke="#E5E7EB" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M120 0 C120 24, 190 24, 190 48" stroke="#E5E7EB" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      
      <div className="flex gap-4 w-full justify-center max-w-[320px]">
        <Card className="p-5 flex-1 text-center">
          <Label className="tracking-widest">RAHIM</Label>
          <h2 className="text-2xl mt-1 text-gray-800 font-medium">30kg</h2>
          <p className="text-[10px] font-medium mt-2 flex items-center justify-center gap-1 text-gray-700 tracking-wider">
            <Check className="w-3 h-3" strokeWidth={3}/> COMMITTED
          </p>
        </Card>
        <Card className="p-5 flex-1 text-center">
          <Label className="tracking-widest">KARIM</Label>
          <h2 className="text-2xl mt-1 text-gray-800 font-medium">20kg</h2>
          <p className="text-[10px] font-medium mt-2 flex items-center justify-center gap-1 text-gray-500 tracking-wider">
            <Hourglass className="w-3 h-3"/> OFFERED
          </p>
        </Card>
      </div>

      <svg className="w-full max-w-[240px] h-12 overflow-visible" viewBox="0 0 240 48" fill="none">
        <path d="M50 0 C50 24, 120 24, 120 48" stroke="#E5E7EB" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d="M190 0 C190 24, 120 24, 120 48" stroke="#E5E7EB" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      
      <Card className="p-3 text-center w-auto inline-block min-w-[180px]">
        <span className="text-[13px] font-medium tracking-widest text-gray-800 uppercase">50kg COVERED</span>
      </Card>
      
      <VLine height="h-6" />
      
      <Card className="p-5 text-center bg-[#FCF7F5] border border-orange-50 w-full max-w-[240px] shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
        <Label className="tracking-widest">TRANSPORT</Label>
        <h2 className="text-2xl font-bold tracking-tight mt-1 text-gray-800">BLOCKED</h2>
        <p className="text-[13px] text-gray-500 mt-1">no driver</p>
      </Card>
      
      <VLine dotted height="h-6" />
      
      <Card className="p-3 text-center min-w-[180px]">
        <span className="text-[13px] font-medium tracking-widest text-gray-800 uppercase">DRIVER GAP</span>
      </Card>
    </div>
  </Layout>
);

const Screen8 = () => (
  <Layout statusText="Karim is available to drive tomorrow at 9:30 AM.">
    <div className="flex flex-col items-start w-full max-w-[280px] mx-auto mt-24">
      <h3 className="tracking-[0.2em] text-[13px] text-gray-700 font-medium uppercase">TRANSPORT</h3>
      
      <div className="h-32 w-px bg-gray-200 ml-[18px] my-4"></div>
      
      <div className="ml-12 mt-2">
        <Label className="tracking-[0.2em]">DRIVER</Label>
        <h2 className="text-4xl font-light tracking-tight mt-1 text-gray-800">Karim</h2>
        <p className="text-[11px] font-medium text-gray-500 tracking-[0.15em] mt-6 uppercase">AVAILABLE</p>
        <p className="text-gray-500 mt-2 flex items-center gap-2 text-[13px]">
           <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0"></span> 9:30 AM
        </p>
        
        <button className="mt-8 bg-white hover:bg-gray-50 border border-gray-100 px-6 py-3 rounded-xl text-gray-700 font-medium shadow-sm transition-colors text-sm tracking-wide">
          [ Assign ]
        </button>
      </div>
    </div>
  </Layout>
);

const Screen9 = () => (
  <Layout statusText="ProseDriver assigned. Proof is now required after delivery.">
    <div className="flex flex-col items-start w-full max-w-[300px] mx-auto mt-16 space-y-8">
      <div>
        <Label className="tracking-[0.2em]">DRIVER</Label>
        <div className="flex items-center gap-4 mt-1">
          <h2 className="text-4xl font-light text-gray-800">Karim</h2>
          <div className="flex items-center gap-2 pt-2">
             <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
               <Check className="w-3 h-3 text-gray-800" strokeWidth={2.5}/>
             </div>
             <Label className="tracking-widest">ASSIGNED</Label>
          </div>
        </div>
        <p className="text-[13px] text-gray-500 mt-4">Tomorrow · 9:30 AM</p>
      </div>
      
      <div className="w-full h-px bg-gray-200"></div>
      
      <div>
        <Label className="tracking-[0.2em]">TRANSPORT</Label>
        <h2 className="text-3xl mt-2 text-gray-500 font-serif tracking-widest font-light">READY</h2>
      </div>
      
      <Card className="p-6 w-full shadow-[0_4px_24px_rgb(0,0,0,0.06)] mt-2">
        <Label className="tracking-[0.2em]">PROOF</Label>
        <h2 className="text-xl mt-3 tracking-tight text-gray-700">REQUIRED Beneath it,</h2>
        <p className="text-gray-500 mt-1.5 text-sm">Photo + Weight</p>
      </Card>
    </div>
  </Layout>
);

const Screen10 = () => (
  <Layout statusText="Karim can't drive tomorrow. The transport gap is open again. Looking for alternatives.">
    <div className="flex flex-col items-start w-full max-w-[300px] mx-auto mt-20 space-y-8 relative">
      <div>
        <h2 className="text-3xl tracking-[0.15em] text-gray-800 font-light">KARIM</h2>
        <p className="text-gray-500 mt-2 text-[15px]">Driver</p>
      </div>
      
      <div>
        <Label className="tracking-[0.2em]">DECLINED</Label>
        <p className="text-2xl mt-2 font-light text-gray-800"><X className="w-5 h-5" strokeWidth={1.5} /></p>
      </div>
      
      <div className="w-full relative py-2 flex items-center">
        <div className="w-full h-px bg-gray-200"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bg-[#FCFAF8] px-3 text-gray-400 font-light text-sm">×</div>
      </div>
      
      <div>
        <Label className="tracking-[0.2em]">TRANSPORT</Label>
        <h2 className="text-xl mt-2 tracking-[0.1em] text-gray-700 font-medium">GAP REOPENED</h2>
        <p className="text-gray-500 mt-1 text-[15px]">no driver</p>
      </div>
      
      <div className="w-56 h-12 rounded-[100%] bg-gray-300/30 blur-2xl absolute -bottom-16 left-1/2 -translate-x-1/2 pointer-events-none"></div>
    </div>
  </Layout>
);

const Screen11 = () => (
  <Layout statusText="Proof accepted. Reality is settling.">
    <div className="flex flex-col items-start w-full max-w-[300px] mx-auto mt-16 space-y-8 pb-8">
      <div>
        <h2 className="text-5xl font-light tracking-widest text-gray-800">PROOF</h2>
        <div className="flex items-center gap-2 mt-4">
           <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
             <Check className="w-3 h-3 text-gray-600" strokeWidth={2.5}/>
          </div>
          <Label className="tracking-[0.15em] mt-0.5">SUBMITTED</Label>
        </div>
      </div>
      
      <div className="flex gap-4 items-center">
        <Card className="w-auto p-4 shrink-0 shadow-sm border border-gray-50">
          <ImageIcon className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
        </Card>
        <div>
           <p className="text-gray-700 text-[15px]">Photo + Weight</p>
           <p className="text-[13px] text-gray-500 mt-1">10:03 AM</p>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-200"></div>
      
      <div>
        <Label className="tracking-[0.2em]">DELIVERY</Label>
        <h2 className="text-2xl mt-2 tracking-widest text-gray-700 font-light">COMPLETE</h2>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-4 text-gray-700">
             <ShoppingBag className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
             <span className="text-[15px]">50kg Rice</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
             <Building className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
             <span className="text-[15px]">Office</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

const Screen12 = () => (
  <Layout statusText="Reality settled">
    <div className="flex flex-col items-center w-full max-w-[300px] mx-auto mt-12 pb-8">
      <Card className="p-8 w-full">
        <Label className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> DONE
        </Label>
        <h2 className="text-[2.5rem] leading-tight font-serif text-gray-800 mt-4 tracking-tight">50kg Rice</h2>
        <p className="text-2xl text-gray-400 mt-1 font-light">Delivered</p>
        
        <div className="w-full h-px bg-gray-200 mt-8 mb-4"></div>
        
        <div className="flex items-center gap-3 text-[13px] text-gray-500">
           <ReceiptText className="w-4 h-4 shrink-0" strokeWidth={1.5}/>
           <span>Office · 10:03 AM</span>
        </div>
      </Card>
      
      <div className="mt-8 space-y-4 w-full px-4 text-[15px]">
        <p className="flex items-center gap-3 text-gray-700">
          <Check className="w-4 h-4 text-gray-800" strokeWidth={2}/> Rahim 30kg
        </p>
        <p className="flex items-center gap-3 text-gray-700">
          <Check className="w-4 h-4 text-gray-800" strokeWidth={2}/> Mina 20kg
        </p>
        <p className="flex items-center gap-3 text-gray-700">
          <Check className="w-4 h-4 text-gray-800" strokeWidth={2}/> Karim (Driver)
        </p>
        <p className="flex items-center gap-3 text-gray-700">
          <Check className="w-4 h-4 text-gray-800" strokeWidth={2}/> Proof accepted
        </p>
      </div>
    </div>
  </Layout>
);

const Screen13 = () => (
  <Layout 
    statusText="Your 30kg is committed. Delivery still needs a driver."
    topRightContent={
      <div className="flex items-center gap-2 text-[13px] text-gray-600">
        You are Rahim <User className="w-4 h-4 shrink-0" strokeWidth={1.5} />
      </div>
    }
  >
    <div className="flex flex-col items-start w-full max-w-[340px] mx-auto mt-16 space-y-8 pb-8">
      <div className="w-full">
        <Label className="tracking-widest">MY RESPONSIBILITY</Label>
        <Card className="mt-4 p-5 flex gap-5 w-full max-w-none items-center shadow-sm">
           <div className="w-12 h-12 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-center shrink-0">
             <ShoppingBag className="w-6 h-6 text-gray-500" strokeWidth={1.2} />
           </div>
           <div>
             <h2 className="text-[17px] text-gray-800 tracking-wide">30kg Rice</h2>
             <p className="text-[11px] font-medium mt-1 flex items-center gap-1.5 text-gray-600 tracking-widest uppercase">
               <Check className="w-3.5 h-3.5" strokeWidth={2.5}/> AGREED
             </p>
           </div>
        </Card>
      </div>
      
      <div className="w-full h-px bg-gray-200"></div>
      
      <div className="w-full">
        <Label className="tracking-widest">PREPARE</Label>
        <Card className="mt-4 p-5 flex gap-5 w-full max-w-none items-center shadow-sm">
           <div className="w-12 h-12 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-center shrink-0 relative">
             <Package className="w-6 h-6 text-gray-500" strokeWidth={1.2} />
             <div className="absolute -bottom-1.5 -right-1.5 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm">
               <div className="w-[18px] h-[18px] rounded-full border border-gray-400 flex items-center justify-center">
                 <Check className="w-2.5 h-2.5 text-gray-600" strokeWidth={3}/>
               </div>
             </div>
           </div>
           <div>
             <h2 className="text-[17px] text-gray-800 tracking-wide">Ready for dispatch</h2>
           </div>
        </Card>
      </div>

      <div className="w-full h-px bg-gray-200"></div>
      
      <div className="w-full">
        <Label className="tracking-widest">PROOF</Label>
        <Card className="mt-4 p-5 flex gap-5 w-full max-w-none items-center shadow-sm">
           <div className="w-12 h-12 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-center shrink-0">
             <Camera className="w-6 h-6 text-gray-500" strokeWidth={1.2} />
           </div>
           <div>
             <h2 className="text-[17px] text-gray-800 tracking-wide">Photo + Weight required</h2>
           </div>
        </Card>
      </div>
    </div>
  </Layout>
);

const screens = [
  Screen0,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, screens.length - 1));
  };

  const handlePrev = () => {
    setCurrentScreen((prev) => Math.max(prev - 1, 0));
  };

  const CurrentComponent = screens[currentScreen];

  return (
    <div className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#FCFAF8]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Zones */}
      <div 
        className="absolute inset-y-0 left-0 w-24 z-50 flex items-center justify-start pl-4 cursor-pointer group hover:bg-black/5 transition-colors" 
        onClick={handlePrev}
      >
         {currentScreen > 0 && <ChevronLeft className="w-8 h-8 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </div>
      
      <div 
        className="absolute inset-y-0 right-0 w-24 z-50 flex items-center justify-end pr-4 cursor-pointer group hover:bg-black/5 transition-colors" 
        onClick={handleNext}
      >
         {currentScreen < screens.length - 1 && <ChevronRight className="w-8 h-8 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </div>
      
      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 pointer-events-none">
         {screens.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentScreen ? 'bg-gray-400' : 'bg-gray-200'}`} />
         ))}
      </div>
    </div>
  );
}
