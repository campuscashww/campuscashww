import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Offer } from '../types';
import { scoreOffers } from './scoring';

interface QuizState {
  step: number;
  goal: string | null;
  country: string | null;
  experience: string | null;
  risk: string | null;
  time: string | null;
  email: string | null;
  firstName: string | null;
  results: {
    primary: Offer | null;
    secondary: Offer[];
    crossSell: string | null;
  } | null;
  trackingParams: Record<string, string>;
  
  // Actions
  setAnswer: (field: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  submitLead: (firstName: string, email: string) => void;
  computeResults: () => void;
  resetQuiz: () => void;
  setTrackingParams: (params: Record<string, string>) => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      step: 0,
      goal: null,
      country: null,
      experience: null,
      risk: null,
      time: null,
      email: null,
      firstName: null,
      results: null,
      trackingParams: {},

      setAnswer: (field, value) => set((state) => ({ ...state, [field]: value })),
      
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      
      prevStep: () => set((state) => ({ step: Math.max(0, state.step - 1) })),
      
      submitLead: (firstName, email) => {
        // CONNECT: Replace the LeadCapture form submit handler with your email platform API (Mailchimp, ConvertKit, etc.)
        console.log(`Lead captured: ${firstName} - ${email}`);
        set({ firstName, email });
        get().computeResults();
      },
      
      computeResults: () => {
        const state = get();
        // Ensure all required fields have a value (should be handled by UI, but fallback to empty string)
        const answers = {
          goal: state.goal || '',
          country: state.country || '',
          experience: state.experience || '',
          risk: state.risk || '',
          time: state.time || '',
        };
        const calculatedResults = scoreOffers(answers);
        set({ results: calculatedResults });
      },

      resetQuiz: () => set({
        step: 0,
        goal: null,
        country: null,
        experience: null,
        risk: null,
        time: null,
        email: null,
        firstName: null,
        results: null
      }),

      setTrackingParams: (params) => set((state) => ({
        trackingParams: { ...state.trackingParams, ...params }
      }))
    }),
    {
      name: 'campuscash-quiz-storage',
    }
  )
);
