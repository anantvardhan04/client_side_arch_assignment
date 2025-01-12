import { create } from 'zustand';

const getPremiumStore = create((set) => ({
  premium: null,
  setPremium: (newPremium) => set({ premium: newPremium }),
}));

export default getPremiumStore;