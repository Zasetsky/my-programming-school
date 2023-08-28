import React from 'react';

const CheckList: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 60 60">
    {
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 6L21 6.00072M11 12L21 12.0007M11 18L21 18.0007M3 11.9444L4.53846 13.5L8 10M3 5.94444L4.53846 7.5L8 4M4.5 18H4.51M5 18C5 18.2761 4.77614 18.5 4.5 18.5C4.22386 18.5 4 18.2761 4 18C4 17.7239 4.22386 17.5 4.5 17.5C4.77614 17.5 5 17.7239 5 18Z"
          stroke="var(--primary-contrastText)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    }
  </svg>
);

export default CheckList;
