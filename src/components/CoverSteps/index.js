import React, { useState } from "react";
import PageOne from "./AboutStep";
import PageTwo from "./DescriptionStep";
import PageThree from "./WritingStep";
import PageFour from "./Letter";

import MultiStepProgressBar from "./Progress";

function App() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
        case "4":
       setPage("pagefour");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="progress-container">
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <PageFour onButtonClick={nextPage} />,
        }[page]
      }
    </div>
  );
}

export default App;
