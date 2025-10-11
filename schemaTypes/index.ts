// index.ts

// 🧩 Objects
import {seo} from './objects/seo'
import {heroBlock} from './objects/heroBlock'
import {portableTextBlocks} from './objects/portableTextBlocks'
import {imageBlock} from './objects/imageBlock'
import {galleryBlock} from './objects/galleryBlock'
import {videoBlock} from './objects/videoBlock'
import {documentBlock} from './objects/documentBlock'
import {ctaBlock} from './objects/ctaBlock'
import {featureBlock} from './objects/featureBlock'
import {testimonialBlock} from './objects/testimonialBlock'
import {teamMemberBlock} from './objects/teamMemberBlock'

// 📄 Documents
import {video} from './documents/video'
import {documentUpload} from './documents/documentUpload'
import { loginPage } from './documents/loginPage'
import { category } from './documents/category'
import { videoHeaderText } from './documents/videoHeaderText'
import { downloadUrls } from './documents/downloadUrls'
import { aboutPage } from './documents/AboutPage/aboutPage'
import { companyStorySection } from './objects/About/companyStorySection'
import { teamIntroSection } from './objects/About/teamIntroSection'
import { teamMembersGrid } from './objects/About/teamMembersGrid'
import { contactHRSection } from './objects/About/contactHRSection'
import { featuresPage } from './documents/FeaturesPage/featuresPage'
import { heroCallToAction } from './objects/Features/heroCallToAction'
import { featuresGrid } from './objects/Features/featuresGrid'
import { whatsNewSection } from './objects/Features/whatsNewSection'
import { appScreensGallery } from './objects/Features/appScreensGallery'
import { experienceConnectoCarousel } from './objects/Features/experienceConnectoCarousel'
import { homePage } from './documents/HomePage/homePage'
import { contentFeaturesGrid } from './objects/HomePage/contentFeaturesGrid'
import { networkSmarterHero } from './objects/HomePage/networkSmarterHero'
import { qrProfileCard } from './objects/HomePage/qrProfileCard'
import { platformLearning } from './objects/HomePage/platformLearning'
import { pricingPlans } from './objects/HomePage/pricingPlans'
import { trustStatistics } from './objects/HomePage/trustStatistics'
import { userTestimonials } from './objects/HomePage/userTestimonials'
import { appShowcaseSection } from './objects/HomePage/appShowcaseSection'
import footerDocument from './documents/Footer/footerDocument' 
import { article } from './documents/article'
import { supportPageType } from './documents/SupportPage/supportPage'
import { newsletterSubscription } from './documents/newsLetterSubscription'
import { blogPageHeader } from './documents/blogPageHeader'
import { signupPageType } from './documents/SignUpPage/signupPageType'
import { ourPartners } from './objects/HomePage/ourPartners'


// Export everything as schemaTypes
export const schemaTypes = [
  // Objects
  seo,
  heroBlock,
  portableTextBlocks,
  imageBlock,
  galleryBlock,
  videoBlock,
  documentBlock,
  ctaBlock,
  featureBlock,
  testimonialBlock,
  teamMemberBlock,

  // Documents
 

  video,
  documentUpload,
  loginPage,
  category,
  videoHeaderText ,
  downloadUrls , 

  //aboutPage
  aboutPage,
  companyStorySection,
  teamIntroSection,
  teamMembersGrid,
  contactHRSection,

  //featuresPage
  featuresPage,
  heroCallToAction,
  featuresGrid,
  whatsNewSection,
  appScreensGallery,
  experienceConnectoCarousel,

  //homepage
  homePage,
  ourPartners, 
  contentFeaturesGrid,
  networkSmarterHero,
  qrProfileCard,
  pricingPlans,
  trustStatistics,
  platformLearning,
  userTestimonials,
  appShowcaseSection,

  //footer
  footerDocument ,
  article ,
  blogPageHeader,
  //support
  supportPageType,
  newsletterSubscription,

  //signupPage
  signupPageType
]
