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
import {article} from './documents/article'
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
import {blogPageHeader} from './documents/blogPageHeader'
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
  article,
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
  blogPageHeader,
  homeFeatureHeader,
  homeFeatureBlocks,
  homeVideoBlock,
  homeTestimonialHeader,
  homeTestimonialBlocks,
  homePricingHeader,homePricingBlocks,homePricingFooter,
  footerHeader,footerAddressBlock,footerNavLinksBlock,footerSocialMediaLinksBlock,footerCopyrightText ,
  videoHeaderText ,aboutUsHeadBlock ,aboutUsTeam ,
  signupHeaderBlock ,signUpHeroBlock ,
  downloadUrls 
]
