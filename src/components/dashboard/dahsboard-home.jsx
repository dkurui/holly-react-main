import { Hero, HeroIllustration } from '@/components/hero'
// import { PartnersCarousel } from '@/components/Carousel'
import { Layout } from '@/components/layout'
// import PartnersCarousel from './../components/carousel/carousel';
import Dashboard from '../layout/dash-left-panel-layout'
import DashboardLeftPanel from '../layout/dash-left-panel-layout'
import DashboardTopPanel from '../layout/dash-top-panel-layout'

export default function DashboardHome() {
  return (
    <>
      <DashboardTopPanel />

      <DashboardLeftPanel />
    </>
  )
}
