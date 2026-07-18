import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Ana Sayfa",
    "href": "#hero"
  },
  {
    "name": "Hizmetler",
    "href": "#hizmetler"
  },
  {
    "name": "Ürünler",
    "href": "#urunler"
  },
  {
    "name": "İletişim",
    "href": "#iletisim"
  },
  {
    "name": "Kurumsal Foto",
    "href": "#kurumsal-foto"
  },
  {
    "name": "Neden Biz",
    "href": "#neden-biz"
  },
  {
    "name": "Surec",
    "href": "#surec"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Selçuk Ticaret"
      ctaButton={{
        text: "Teklif Al",
        href: "#iletisim",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>

    </StyleProvider>
  );
}
