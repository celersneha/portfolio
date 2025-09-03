import React from "react";

const SkeletonProject = () => (
  <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-t-lg border border-border/30">
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 rounded-lg bg-muted-foreground/10 animate-pulse flex items-center justify-center">
        <svg
          className="w-8 h-8 text-primary/40"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M4 17l4-4a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 0 2.8 0L20 13" />
        </svg>
      </div>
      <span className="text-xs text-muted-foreground/60 font-medium">
        Project Image
      </span>
    </div>
  </div>
);

export default SkeletonProject;
