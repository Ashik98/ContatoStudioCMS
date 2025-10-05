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
import {homepage} from './documents/homepage'
import {page} from './documents/page'
import {jobListing} from './documents/jobListing'
import {caseStudy} from './documents/caseStudy'
import {profile} from './documents/profile'
import {company} from './documents/company'
import {teamMember} from './documents/teamMember'
import {gallery} from './documents/gallery'
import {video} from './documents/video'
import {documentUpload} from './documents/documentUpload'
import {siteSettings} from './documents/siteSettings'
import { loginPage } from './documents/loginPage'
import { signupPage } from './documents/signupPage'
import {landingPageHero} from './documents/landingPageHero'
import { heroImageGallery } from './documents/heroImageGallery'
import { statSectionHeader } from './documents/statSectionHeader'
import { statSectionBlock } from './documents/statSectionBlock'
import { category } from './documents/category'
import { homeFeatureHeader } from './documents/homeFeatureHeader'
import { homeFeatureBlocks } from './documents/homeFeatureBlocks'
import { homeVideoBlock } from './documents/homeVideoBlock'
import {homeTestimonialHeader} from './documents/homeTestimonialHeader'
import { homeTestimonialBlocks } from './documents/homeTestimonialBlocks'
import { homePricingHeader } from './documents/homePricingHeader'
import { homePricingBlocks } from './documents/homePricingBlocks'
import { homePricingFooter } from './documents/homePricingFooter'
import { footerHeader } from './documents/footerHeader'
import { footerAddressBlock } from './documents/footerAddressBlock'
import { footerNavLinksBlock } from './documents/footerNavLinksBlock'
import { footerSocialMediaLinksBlock } from './documents/footerSocialMediaLinksBlock'
import { footerCopyrightText } from './documents/footerCopyrightText'
import { videoHeaderText } from './documents/videoHeaderText'
import { aboutUsHeadBlock } from './documents/aboutUsHeadBlock'
import { aboutUsTeam } from './documents/aboutUsTeam'
import { signupHeaderBlock } from './documents/signupHeaderBlock'
import { signUpHeroBlock } from './documents/signUpHeroBlock'
import { downloadUrls } from './documents/downloadUrls'
import { featureHeaderText } from './documents/featureHeaderText'
import { featureMainBlock } from './documents/featureMainBlock'
import { featureListing } from './documents/featureListing'
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
import { article } from './objects/Blogs/article'
import { blogPageHeader } from './objects/Blogs/blogPageHeader'
import { blogPage } from './documents/BlogPage/blogPage'
import { VideoObject } from './objects/Videos/VideoObject'
import { VideoHeaderObject } from './objects/Videos/VideoHeaderObject'
import { videoPage } from './documents/Video/videoPage'
import footerDocument from './documents/Footer/footerDocument'


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
  homepage,
  page,
  jobListing,
  caseStudy,
  profile,
  company,
  teamMember,
  gallery,
  video,
  documentUpload,
  siteSettings,
  loginPage,
  signupPage,
  landingPageHero,
  heroImageGallery,
  statSectionHeader,
  statSectionBlock,
  category,
  homeFeatureHeader,
  homeFeatureBlocks,
  homeVideoBlock,
  homeTestimonialHeader,
  homeTestimonialBlocks,
  homePricingHeader,homePricingBlocks,homePricingFooter,
  footerHeader,footerAddressBlock,footerNavLinksBlock,footerSocialMediaLinksBlock,footerCopyrightText ,
  videoHeaderText ,aboutUsHeadBlock ,aboutUsTeam ,
  signupHeaderBlock ,signUpHeroBlock ,
  downloadUrls , featureHeaderText , featureMainBlock ,featureListing ,

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
  contentFeaturesGrid,
  networkSmarterHero,
  qrProfileCard,
  pricingPlans,
  trustStatistics,
  platformLearning,
  userTestimonials,
  appShowcaseSection,

  //blogPage
  article,
  blogPageHeader,
  blogPage,

  //videoPage
  VideoObject,
  VideoHeaderObject,
  videoPage,
  //footer
  footerDocument 
  
]
