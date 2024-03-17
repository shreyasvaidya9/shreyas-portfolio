import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-section-context";
import type { activeSectionType } from "@/lib/types";

type useSectionInViewProps = {
  sectionName: activeSectionType;
  threshold: number;
};

const useSectionInView = ({
  sectionName,
  threshold = 0.75,
}: useSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { updateActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      updateActiveSection(sectionName);
    }
  }, [inView, updateActiveSection, timeOfLastClick, sectionName]);

  return { ref };
};

export default useSectionInView;
