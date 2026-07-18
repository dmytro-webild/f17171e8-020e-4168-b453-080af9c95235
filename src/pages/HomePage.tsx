import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import FooterBasic from '@/components/sections/footer/FooterBasic';
import { Truck, Wrench, Building2, Package } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
            tag="Güvenilir Tedarikçiniz"
            title="Güvenilir Demir, Çimento, Tuğla, Kum, Mıcır ve Kireç Tedarikçisi"
            description="Kaliteli ürün, hızlı teslimat ve yılların tecrübesiyle inşaat projeleriniz için güvenilir çözüm ortağınız."
            primaryButton={{ text: "Hemen Ara", href: "tel:+90000000000" }}
            secondaryButton={{ text: "WhatsApp'tan Yaz", href: "https://wa.me/90000000000" }}
            items={[{ imageSrc: "http://img.b2bpic.net/free-photo/pallets-with-stacked-gray-paving-slabs-selective-focus-stack-paving-slabs-warehouse-road-repair-finished-tile-sale-space-text_166373-3193.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-14512.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/man-using-excavator-digging-day-light_23-2149194783.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/construction-work-site_1398-3934.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/diagonal-concrete-texture-abstract-gray-pattern-design_84443-55427.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/waste-stack-contract-development-background_1142-727.jpg" }]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="kurumsal-foto" data-section="kurumsal-foto">
        <SectionErrorBoundary name="kurumsal-foto">
          <AboutFeaturesSplit
            tag="Selçuk Ticaret"
            title="Yılların Tecrübesiyle Güvenilir Hizmet"
            description="Selçuk Ticaret olarak Yalova ve çevresinde kaliteli ürün, güvenilir hizmet ve zamanında teslimat anlayışıyla müşterilerimize hizmet veriyoruz."
            items={[]}
            imageSrc="http://img.b2bpic.net/free-photo/industrial-park-factory-building-warehouse_1417-1929.jpg"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="neden-biz" data-section="neden-biz">
        <SectionErrorBoundary name="neden-biz">
          <FeaturesRevealCards
            tag="Neden Selçuk Ticaret?"
            title="İnşaat Projelerinizin Temel Taşı"
            description="Bizi tercih etmeniz için temel nedenler."
            items={[
              { title: "Kaliteli Ürün", description: "Standartlara uygun, en yüksek kaliteli malzemeler.", imageSrc: "http://img.b2bpic.net/free-photo/man-room-with-solid-fuel-boiler-working-biofuel-economical-heating_169016-14582.jpg" },
              { title: "Güvenilir Hizmet", description: "Söz verdiğimiz zamanda ve kalitede teslimat.", imageSrc: "http://img.b2bpic.net/free-photo/side-view-plus-size-people-working-construction_23-2150772854.jpg" },
              { title: "Hızlı Teslimat", description: "Geniş araç filomuzla hızlı sevkiyat.", imageSrc: "http://img.b2bpic.net/free-photo/focused-ceo-formal-suit-hardhat-standing-warehouse-talking-mobile-phone_74855-16370.jpg" },
              { title: "Uygun Fiyat", description: "Rekabetçi fiyat politikasıyla bütçe dostu.", imageSrc: "http://img.b2bpic.net/free-photo/people-taking-care-warehouse-logistics-together_23-2149128297.jpg" },
              { title: "Deneyimli Ekip", description: "Profesyonel kadromuzla teknik destek.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-working-construction_23-2150772880.jpg" }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="hizmetler" data-section="hizmetler">
        <SectionErrorBoundary name="hizmetler">
          <AboutFeaturesSplit
            tag="Hizmetlerimiz"
            title="Sektörün Güvenilir Adı"
            description="Profesyonel ekibimizle tüm inşaat ihtiyaçlarınıza yönelik çözümler sunuyoruz."
            items={[
              { icon: Truck, title: "Çimento Satışı", description: "Her türlü çimento ihtiyacınız için hızlı tedarik." },
              { icon: Wrench, title: "İnşaat Malzemeleri", description: "Geniş ürün yelpazemizle eksiksiz çözüm." },
              { icon: Building2, title: "Şantiye Tedariki", description: "Şantiyenize yerinde ve zamanında teslimat." },
              { icon: Package, title: "Toplu Sipariş", description: "Büyük ölçekli projeler için özel fiyat teklifleri." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/worker-holding-wood-plank-working-furniture-factory-wood-processing-industry_342744-205.jpg"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="urunler" data-section="urunler">
        <SectionErrorBoundary name="urunler">
          <FeaturesImageBento
            tag="Ürünlerimiz"
            title="Geniş Ürün Yelpazesi"
            description="İnşaatınızın ihtiyacı olan her şey burada."
            items={[
              { title: "İnşaat Demiri", description: "Dayanıklı ve sertifikalı.", imageSrc: "http://img.b2bpic.net/free-photo/triple-x-architecture-design-building_122409-15.jpg" },
              { title: "Çimento", description: "Endüstriyel standartlarda.", imageSrc: "http://img.b2bpic.net/free-photo/worker-builds-cinder-block-wall-new-home_661209-381.jpg" },
              { title: "Beyaz Çimento", description: "Dekoratif ve sağlam.", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-clay-smudge_23-2148862878.jpg" },
              { title: "Gazbeton", description: "Enerji tasarruflu.", imageSrc: "http://img.b2bpic.net/free-photo/old-rusty-metallic-surface-close-up_23-2148846146.jpg" },
              { title: "Kireç", description: "Harçlarınız için ideal.", imageSrc: "http://img.b2bpic.net/free-photo/unfinished-brick-building-site_23-2147694730.jpg" },
              { title: "Tuğla", description: "Yüksek mukavemetli.", imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-12640.jpg" },
              { title: "Kum & Mıcır", description: "Doğal ve kaliteli.", imageSrc: "http://img.b2bpic.net/free-photo/grained-stone-surface_23-2147626094.jpg" }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="surec" data-section="surec">
        <SectionErrorBoundary name="surec">
          <FeaturesRevealCards
            tag="Nasıl Çalışıyoruz?"
            title="4 Adımda Teslimat"
            description="Süreci hızlandırarak inşaatınızı durdurmuyoruz."
            items={[
              { title: "Talebinizi Alıyoruz", description: "İhtiyaçlarınızı uzman ekibimize iletin.", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-holding-tablet-notebook-office_176420-935.jpg" },
              { title: "Teklif Hazırlıyoruz", description: "En uygun fiyat seçenekleriyle.", imageSrc: "http://img.b2bpic.net/free-photo/business-owner-working-their-strategy_23-2149241314.jpg" },
              { title: "Ürünleri Hazırlıyoruz", description: "Kalite kontrol süreçlerimizle.", imageSrc: "http://img.b2bpic.net/free-photo/happy-employee-dancing-warehouse_482257-81048.jpg" },
              { title: "Hızlı Teslim Ediyoruz", description: "Sahada hızlı ve güvenli teslimat.", imageSrc: "http://img.b2bpic.net/free-photo/transport-logistics-concept_23-2151541898.jpg" }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
            tag="Başarılarımız"
            title="Güvenle Büyüyoruz"
            description="Yılların birikimi ve binlerce teslimat."
            metrics={[
              { value: "34+", title: "Yıllık Deneyim", features: ["Tecrübeli uzman kadro", "Sektör bilgisi"] },
              { value: "1000+", title: "Mutlu Müşteri", features: ["Sadık iş ortakları", "Referanslı projeler"] },
              { value: "5000+", title: "Teslimat", features: ["Zamanında sevkiyat", "Güvenli lojistik"] },
              { value: "100%", title: "Müşteri Memnuniyeti", features: ["Hızlı destek", "Kalite odaklı"] }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
            tag="Müşteri Yorumları"
            title="Bizi Müşterilerimize Sorun"
            description="Müşterilerimizin memnuniyeti en büyük motivasyonumuz."
            testimonials={[
              { name: "Ahmet Yılmaz", role: "Müteahhit", quote: "Yıllardır Selçuk Ticaret ile çalışıyoruz, çok profesyoneller.", imageSrc: "http://img.b2bpic.net/free-photo/mature-manager-communicating-with-female-distribution-warehouse-worker-industrial-building_637285-4899.jpg" },
              { name: "Ayşe Kaya", role: "Mimari Tasarım", quote: "İhtiyaçlarımıza tam zamanında cevap veriyorlar, teşekkürler.", imageSrc: "http://img.b2bpic.net/free-photo/architect-her-working-desk-with-blueprints-front-her-working-new-projects-architecture-design_482257-33166.jpg" },
              { name: "Mehmet Demir", role: "Şantiye Şefi", quote: "Malzeme kaliteleri ve hızları tartışılmaz, mükemmel.", imageSrc: "http://img.b2bpic.net/free-photo/engineer-oversees-assembly-tools-tablet-industry-plant-surrounded-by-metal-steel-machinery_482257-135546.jpg" },
              { name: "Zeynep Arslan", role: "İnşaat Mühendisi", quote: "Projemizin en büyük destekçisi, çözüm ortağımızdır.", imageSrc: "http://img.b2bpic.net/free-photo/female-engineer-helmet-gear-holding-construction-plan-pointing-it_114579-24439.jpg" },
              { name: "Canan Çelik", role: "Firma Sahibi", quote: "Güler yüzlü ve uzman ekiple çalışmak çok keyifli.", imageSrc: "http://img.b2bpic.net/free-photo/my-big-dream-is-working-big-company_329181-11421.jpg" }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="iletisim" data-section="iletisim">
        <SectionErrorBoundary name="iletisim">
          <ContactCta
            tag="Bize Ulaşın"
            text="İhtiyaçlarınız için profesyonel çözümler sunuyoruz. Hemen iletişime geçin."
            primaryButton={{ text: "WhatsApp'tan Yaz", href: "https://wa.me/90000000000" }}
            secondaryButton={{ text: "Hemen Ara", href: "tel:+90000000000" }}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="footer" data-section="footer">
        <FooterBasic
            columns={[
              { title: "Hizmetler", items: [{ label: "Çimento Satışı", href: "#" }, { label: "İnşaat Malzemeleri", href: "#" }, { label: "Şantiye Tedariki", href: "#" }] },
              { title: "İletişim", items: [{ label: "Gazi Osman Paşa, Bursa Yolu, 77100 Yalova Merkez/Yalova", href: "#" }, { label: "selcukinsaatmalzemeleri@gmail.com", href: "mailto:selcukinsaatmalzemeleri@gmail.com" }, { label: "+90 542 744 42 77", href: "tel:+90000000000" }]}
            ]}
            leftText="© 2026 Selçuk Ticaret Beton & Çimento. Tüm Hakları Saklıdır."
            rightText="Gizlilik Politikası"
        />
      </div>
    </>
  );
}