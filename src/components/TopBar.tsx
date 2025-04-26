import React from "react";

const TopBar: React.FC = () => (
  <div className="w-full bg-[#3fbb38] h-7 flex items-center justify-end px-4 text-xs text-white">
    Free Shipping On Orders Over $100
    <div className="ml-auto flex gap-2">
      {/* Social icons placeholder */}
      <span>FB</span><span>TW</span><span>LN</span>
    </div>
  </div>
);

export default TopBar;
