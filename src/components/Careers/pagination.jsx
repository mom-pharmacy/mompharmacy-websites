import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Importing Font Awesome arrow icons

export function SimplePagination() {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <FaArrowLeft className="h-4 w-4" /> {/* Using a React Icon component */}
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of
        <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === 10}
      >
        <FaArrowRight className="h-4 w-4" /> {/* Using a React Icon component */}
      </IconButton>
    </div>
  );
}
