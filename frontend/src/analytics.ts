import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || "";

export const initGA = () => {
    ReactGA.initialize(TRACKING_ID);
};
