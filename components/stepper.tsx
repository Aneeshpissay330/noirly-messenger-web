
import React from "react";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepChange?: (step: number) => void;
  className?: string;
}


const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepChange, className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={`w-8 h-8 flex items-center justify-center rounded-full font-display text-base font-semibold transition-colors duration-150
                ${idx === currentStep ? "bg-black text-white" : "border border-slate-300 text-slate-400 bg-white"}
              `}
              onClick={() => onStepChange && onStepChange(idx)}
              aria-current={idx === currentStep ? "step" : undefined}
              aria-label={`Step ${idx + 1}: ${step}`}
              tabIndex={onStepChange ? 0 : -1}
              disabled={!onStepChange}
            >
              {idx < currentStep ? (
                <Icon path={mdiCheck} size={1} color={idx === currentStep ? "#fff" : "#4B5563"} />
              ) : (
                idx + 1
              )}
            </button>
            <span className={`font-semibold ${idx === currentStep ? "text-black" : "text-slate-400"}`}>{step}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className="flex-1 flex items-center mx-2 min-w-[32px]">
              <div className="w-full h-0.5 bg-slate-300" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
