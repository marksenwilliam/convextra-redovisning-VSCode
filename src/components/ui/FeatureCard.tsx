import { Check } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white hover:bg-[#3a3a3a] p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-2 transition-all duration-500 ease-out group h-full">
      {icon && <div className="mb-4 text-[#8c7b60] group-hover:text-white transition-colors duration-500 ease-out">{icon}</div>}
      <h3 className="text-xl text-[#1a1a1a] group-hover:text-white mb-4 font-playfair font-medium transition-colors duration-500 ease-out">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed font-geist font-light transition-colors duration-500 ease-out">
        {description}
      </p>
    </div>
  );
}

interface BenefitItemProps {
  title: string;
  description: string;
}

export function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-6 h-6 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-1 shrink-0">
        <Check className="w-4 h-4 text-[#8c7b60]" strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-lg text-[#1a1a1a] mb-2 font-playfair font-medium">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed font-geist font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 rounded-full bg-[#8c7b60] flex items-center justify-center shrink-0">
          <span className="text-white text-lg font-playfair font-medium">
            {number}
          </span>
        </div>
        <div>
          <h4 className="text-xl text-[#1a1a1a] mb-2 font-playfair font-medium">
            {title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed font-geist font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
