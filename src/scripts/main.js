import React from "react";
import {render} from "react-dom";

import PortfolioItems from "../components/PortfolioItems.js";

const PortfolioItemsWrapper = document.getElementById("PortfolioItemsWrapper");
render(<PortfolioItems />, PortfolioItemsWrapper);
