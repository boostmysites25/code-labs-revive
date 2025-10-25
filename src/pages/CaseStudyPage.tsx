import { useParams } from "react-router-dom";
import { webPortfolio, appPortfolio, blockchainPortfolio, gamePortfolio } from "@/content";
import CaseStudy from "@/components/CaseStudy";
import NotFound from "./NotFound";

const CaseStudyPage = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  
  // Combine all portfolios
  const allPortfolios = [
    ...webPortfolio.map(item => ({ ...item, category: "web" })),
    ...appPortfolio.map(item => ({ ...item, category: "app" })),
    ...blockchainPortfolio.map(item => ({ ...item, category: "blockchain" })),
    ...gamePortfolio.map(item => ({ ...item, category: "game" })),
  ];

  // Find the project
  const project = allPortfolios.find(
    p => p.category === category && p.id === parseInt(id || "0")
  );

  console.log(project)

  if (!project) {
    return <NotFound />;
  }

  return <CaseStudy project={project} />;
};

export default CaseStudyPage;
