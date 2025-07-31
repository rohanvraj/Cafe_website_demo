import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Import all blog article components
import AntiAgingTreatments from './blog/anti-aging-treatments';
import SkincareTips from './blog/10-essential-skincare-tips-for-healthy-glowing-skin';
import AcneCausesTreatment from './blog/acne-causes-treatment';
import ChemicalPeels from './blog/chemical-peels';
import HairLossCauses from './blog/hair-loss-causes';
import LaserHairRemoval from './blog/laser-hair-removal';
import PrpTherapy from './blog/prp-therapy';
import SkincareRoutine from './blog/skincare-routine';
import SunProtectionBeyondSpf from './blog/sun-protection-beyond-spf';
import MicroneedlingGuide from './blog/microneedling-guide';
import ChemicalVsMineralSunscreens from './blog/chemical-sunscreens-vs-mineral-sunscreens';

// Map slugs to components
const articleComponents: Record<string, React.ComponentType> = {
  'anti-aging-treatments': AntiAgingTreatments,
  '10-essential-skincare-tips-for-healthy-glowing-skin': SkincareTips,
  'acne-causes-treatment': AcneCausesTreatment,
  'chemical-peels': ChemicalPeels,
  'hair-loss-causes': HairLossCauses,
  'laser-hair-removal': LaserHairRemoval,
  'prp-therapy': PrpTherapy,
  'skincare-routine': SkincareRoutine,
  'sun-protection-beyond-spf': SunProtectionBeyondSpf,
  'microneedling-guide': MicroneedlingGuide,
 'chemical-sunscreens-vs-mineral-sunscreens': ChemicalVsMineralSunscreens,
};

const BlogArticle = () => {
  const { slug } = useParams();
  const ArticleComponent = slug ? articleComponents[slug] : undefined;

  if (!ArticleComponent) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline flex items-center justify-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    );
  }

  return <ArticleComponent />;
};

export default BlogArticle;