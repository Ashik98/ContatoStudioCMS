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
  category
]
