import React from "react";

const DescriptionItem = ({ desc }: { desc: string }) => {
  return (
    <div className="mt-4">
      <p className="text-lg font-light">{desc}</p>
    </div>
  );
};

export default DescriptionItem;
