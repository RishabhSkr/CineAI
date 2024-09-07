import React from 'react';
import '../ShimmerLoader.css'; // Import the CSS for shimmer effect

const ShimmerLoader = () => {
  return (
    <div className="shimmer-loader">
      <div className="shimmer-loader-item" />
      <div className="shimmer-loader-item" />
      <div className="shimmer-loader-item" />
    </div>
  );
};

export default ShimmerLoader;
