export interface NewsItem {
  title: string;
  date: string;
  image: string;
  slug: string;
  body: string[];
}

export const newsItems: NewsItem[] = [
  {
    title: "CRecTech Showcases Integrated Pre-Pilot System",
    date: "December 8, 2025",
    image: "/images/news/pre-pilot-system.jpg",
    slug: "crectech-showcases-integrated-pre-pilot-system",
    body: [
      "CRecTech proudly unveiled its integrated pre-pilot reactor system at a private showcase event held in Singapore on December 8, 2025. The system represents a significant engineering milestone, combining the company’s proprietary catalytic CO₂ hydrogenation technology with a fully automated control architecture for the first time at this scale.",
      "“This is the culmination of two years of intensive R&D,” said Dr. Lim Kang Hui, co-founder and CEO of CRecTech. “Our pre-pilot system validates the core chemistry and process design that will underpin our commercial-scale plants. We’re now able to demonstrate continuous methanol synthesis from captured CO₂ and green hydrogen under realistic operating conditions.”",
      "The Breakthrough Energy Fellows program, which has supported CRecTech’s development since October 2024, played a key role in enabling this achievement. “The BE Fellows network gave us access to world-class mentorship and resources that accelerated our timeline by at least six months,” noted Dr. Lim.",
      "Attendees at the showcase included representatives from maritime shipping companies, energy majors, and government agencies interested in low-carbon fuel pathways. Several potential offtake partners expressed strong interest in CRecTech’s roadmap toward a full pilot plant expected to begin operations in 2026.",
      "The pre-pilot system is capable of producing methanol at a rate sufficient for detailed techno-economic analysis and lifecycle assessment, two critical steps on the path to commercial deployment. CRecTech plans to use data from this system to finalize the design of its pilot facility, which will target production volumes relevant to the maritime sector.",
    ],
  },
  {
    title: "CRecTech Featured on CNBC",
    date: "November 13, 2025",
    image: "/images/news/cnbc-feature.jpg",
    slug: "crectech-featured-on-cnbc",
    body: [
      "CRecTech was featured on CNBC on November 13, 2025, as part of a segment exploring innovative climate-tech startups tackling hard-to-abate emissions in the shipping and heavy industry sectors. The feature highlighted CRecTech’s novel approach to converting captured CO₂ into green methanol, a drop-in marine fuel that can significantly reduce the carbon footprint of global shipping.",
      "During the interview, Dr. Lim Kang Hui discussed the urgency of decarbonizing maritime transport, which accounts for nearly 3% of global greenhouse gas emissions. He explained how CRecTech’s catalytic process offers a commercially viable pathway to produce low-carbon methanol at scale, using renewable hydrogen and waste CO₂ as feedstocks.",
      "The CNBC feature brought significant visibility to CRecTech’s mission and technology, generating inbound interest from potential investors, strategic partners, and maritime operators across Asia and Europe. The segment underscored the growing momentum behind alternative marine fuels as the International Maritime Organization’s 2030 and 2050 emissions targets draw closer.",
    ],
  },
  {
    title: "IES Sustainability Award 2025 – Promising Start-Ups for Sustainability",
    date: "November 7, 2025",
    image: "/images/news/ies-award.png",
    slug: "ies-sustainability-award-2025",
    body: [
      "CRecTech was honored with the IES Sustainability Award 2025 in the “Promising Start-Ups for Sustainability” category, presented by the Institution of Engineers, Singapore (IES) on November 7, 2025. The award recognizes early-stage companies that demonstrate exceptional potential to contribute to environmental sustainability through engineering innovation.",
      "The IES panel commended CRecTech for its integrated approach to carbon recycling, noting the company’s ability to bridge fundamental catalysis research with practical, scalable reactor engineering. The judges highlighted the relevance of CRecTech’s technology to Singapore’s national sustainability agenda, particularly in the context of the maritime and petrochemical industries.",
      "Receiving this award from one of Singapore’s most established engineering institutions validates CRecTech’s technical rigor and strengthens its credibility as it engages with enterprise customers and regulatory bodies in the region.",
    ],
  },
  {
    title: "iPitch@ACES Award – Best Disruptive Startup",
    date: "November 7, 2025",
    image: "/images/news/ipitch-award.png",
    slug: "ipitch-aces-award-best-disruptive-startup",
    body: [
      "CRecTech won the “Best Disruptive Startup” award at the iPitch@ACES competition on November 7, 2025. The event, held as part of the Asia Clean Energy Summit (ACES), featured startups from across the Asia-Pacific region presenting breakthrough technologies in the clean energy and sustainability space.",
      "CRecTech’s pitch focused on its proprietary catalytic process for converting CO₂ and green hydrogen into methanol, emphasizing the technology’s potential to disrupt traditional methanol production, which currently relies almost entirely on fossil-fuel feedstocks. The judges recognized the startup’s clear path to commercialization and the massive addressable market in maritime decarbonization.",
      "The iPitch@ACES award adds to CRecTech’s growing list of accolades and further positions the company as a leading innovator in the carbon capture and utilization (CCU) space within Southeast Asia.",
    ],
  },
  {
    title: "Feature on Manifold Times",
    date: "October 23, 2025",
    image: "/images/news/manifold-times.png",
    slug: "feature-on-manifold-times",
    body: [
      "CRecTech was featured in Manifold Times, a leading publication covering the marine fuels and bunker industry, on October 23, 2025. The article explored CRecTech’s technology for producing green methanol from captured CO₂ and its relevance to the maritime sector’s decarbonization journey.",
      "The feature provided an in-depth look at CRecTech’s business model and technology roadmap, helping to raise awareness among key decision-makers in the shipping and bunkering industries about the viability of green methanol as a near-term alternative marine fuel.",
    ],
  },
  {
    title: "Hudson Shipping Lines Expresses Support for CRecTech",
    date: "October 23, 2025",
    image: "/images/news/hudson-shipping.png",
    slug: "hudson-shipping-lines-expresses-support",
    body: [
      "Hudson Shipping Lines, a prominent Asia-Pacific shipping operator, publicly expressed its support for CRecTech and its green methanol technology on October 23, 2025. The endorsement signals growing interest from the maritime industry in securing future supplies of low-carbon fuels.",
      "Hudson Shipping Lines highlighted CRecTech’s innovative approach to methanol production as a promising solution for meeting upcoming IMO emissions regulations. The company noted that methanol-fueled vessels are already entering the global fleet, creating near-term demand for green methanol supplies.",
      "“We see CRecTech as a potential key partner in our decarbonization strategy,” said a Hudson Shipping Lines representative. “Their technology addresses a critical gap in the green fuel supply chain, and we look forward to exploring collaboration opportunities.”",
      "This expression of support from a major shipping operator strengthens CRecTech’s position as it works to secure offtake agreements and strategic partnerships ahead of its pilot plant deployment.",
    ],
  },
  {
    title: "CRecTech and Green Lagoon Technology Sign MOU to Pilot Bio-Methanol Production from Biogas in Malaysia",
    date: "June 27, 2025",
    image: "/images/news/green-lagoon-mou.avif",
    slug: "crectech-green-lagoon-mou",
    body: [
      "CRecTech and Green Lagoon Technology (GLT) signed a Memorandum of Understanding (MOU) on June 27, 2025, to jointly pilot bio-methanol production using biogas as a feedstock in Malaysia. The partnership combines CRecTech’s catalytic CO₂-to-methanol technology with GLT’s expertise in biogas production from palm oil mill effluent (POME).",
      "Under the MOU, the two companies will co-develop a pilot system that captures CO₂ from biogas streams and converts it into bio-methanol using green hydrogen. This approach not only produces a valuable low-carbon fuel but also upgrades biogas quality by removing CO₂, a common impurity that reduces biogas energy content.",
      "Malaysia’s palm oil industry generates vast quantities of POME, making it an ideal location for deploying this integrated bio-methanol production pathway. The pilot project aims to demonstrate technical and economic feasibility, with a view toward commercial-scale deployment across Southeast Asia’s palm oil sector.",
      "The CRecTech-GLT partnership exemplifies the kind of cross-sector collaboration needed to build a circular carbon economy, turning waste streams into clean fuels and creating value for multiple industries simultaneously.",
    ],
  },
  {
    title: "CRecTech and 3Y Energy Sign MOU to Jointly Advance Bio-Methanol as a Low-Carbon Marine Fuel",
    date: "June 27, 2025",
    image: "/images/news/3y-energy-mou.avif",
    slug: "crectech-3y-energy-mou",
    body: [
      "On June 27, 2025, CRecTech and 3Y Energy signed a Memorandum of Understanding to collaborate on advancing bio-methanol as a low-carbon marine fuel. 3Y Energy, a company focused on sustainable energy solutions for the maritime sector, will work with CRecTech to explore the integration of green methanol into marine fuel supply chains.",
      "The MOU outlines plans for joint feasibility studies, technology validation, and market development activities aimed at establishing a reliable supply of bio-methanol for shipping operators in the Asia-Pacific region. Both companies recognize that the maritime industry’s transition to cleaner fuels requires coordinated action across the value chain, from production to distribution to end-use.",
      "This partnership with 3Y Energy complements CRecTech’s broader strategy of building an ecosystem of partners spanning feedstock suppliers, technology integrators, and fuel distributors to enable large-scale green methanol adoption in shipping.",
    ],
  },
  {
    title: "Co-founder/ CEO Dr. Lim Kang Hui named Forbes 30 under 30 Asia 2025",
    date: "May 15, 2025",
    image: "/images/news/forbes-30-under-30.png",
    slug: "forbes-30-under-30-asia-2025",
    body: [
      "Dr. Lim Kang Hui, co-founder and CEO of CRecTech, was named to the prestigious Forbes 30 Under 30 Asia 2025 list on May 15, 2025. The recognition highlights Dr. Lim’s exceptional contributions to climate technology and sustainable energy, placing him among the region’s most impactful young entrepreneurs and innovators.",
      "The Forbes 30 Under 30 Asia list celebrates outstanding individuals under the age of 30 who are reshaping industries and driving positive change across the Asia-Pacific region. Dr. Lim’s inclusion reflects both his personal achievements and CRecTech’s rapid progress in developing commercially viable green methanol production technology.",
    ],
  },
  {
    title: "CRecTech Co-founders enrolled in the flagship Breakthrough Energy Fellowship",
    date: "October 28, 2024",
    image: "/images/news/breakthrough-energy.avif",
    slug: "breakthrough-energy-fellowship",
    body: [
      "CRecTech’s co-founders were selected for the prestigious Breakthrough Energy Fellows program on October 28, 2024. Founded by Bill Gates, Breakthrough Energy supports innovative companies working on technologies with the potential to significantly reduce global greenhouse gas emissions.",
      "The Breakthrough Energy Fellows program provides early-stage climate-tech innovators with funding, mentorship, and access to a global network of experts in science, engineering, and business. Fellows receive up to two years of support to advance their technologies from the lab toward commercial readiness.",
      "CRecTech was selected for the fellowship based on the strength of its catalytic CO₂ hydrogenation technology, which offers a scalable pathway to produce green methanol from waste CO₂ and renewable hydrogen. The fellowship committee recognized the technology’s potential impact on decarbonizing the maritime and chemical sectors.",
      "Being part of the Breakthrough Energy Fellows cohort places CRecTech alongside some of the world’s most promising climate-tech ventures and provides invaluable resources to accelerate the company’s path to pilot-scale demonstration and beyond.",
    ],
  },
  {
    title: "Top 8 selected for Shell Startup Engine 2024",
    date: "August 2024",
    image: "/images/news/shell-startup-engine.avif",
    slug: "shell-startup-engine-2024",
    body: [
      "CRecTech was selected as one of the top 8 startups for the Shell Startup Engine 2024 program, a highly competitive accelerator that connects promising energy-tech startups with Shell’s global network of experts, facilities, and market access. The selection recognizes CRecTech’s innovative approach to green methanol production and its potential to contribute to the energy transition.",
      "Through the Shell Startup Engine program, CRecTech gained access to mentorship from Shell’s technical and commercial teams, opportunities to pilot its technology within Shell’s operations, and exposure to Shell’s extensive partner network in the energy and maritime sectors.",
    ],
  },
  {
    title: "CRecTech in Smart Manufacturing Summit 2024",
    date: "June 2024",
    image: "/images/news/smart-manufacturing.avif",
    slug: "smart-manufacturing-summit-2024",
    body: [
      "CRecTech participated in the Smart Manufacturing Summit 2024 held in June 2024, presenting its advanced catalytic reactor technology to an audience of manufacturing and process engineering professionals. The summit provided a platform to discuss the role of smart manufacturing principles in scaling up green chemical production.",
      "During the event, CRecTech demonstrated how its reactor design incorporates advanced process control, real-time monitoring, and data-driven optimization to maximize methanol yield and energy efficiency. These smart manufacturing approaches are essential for achieving the cost targets needed to make green methanol competitive with fossil-derived alternatives.",
      "The Smart Manufacturing Summit provided valuable networking opportunities with potential technology partners and equipment suppliers, supporting CRecTech’s ongoing efforts to build a robust supply chain for its pilot and commercial-scale reactor systems.",
    ],
  },
  {
    title: "Signed Engagement Agreement with Goldbell/MoveSG",
    date: "April 2024",
    image: "/images/news/goldbell-movesg.avif",
    slug: "goldbell-movesg-agreement",
    body: [
      "In April 2024, CRecTech signed an engagement agreement with Goldbell and its sustainability-focused subsidiary MoveSG to explore the application of green methanol in land transport and logistics. The partnership investigates the potential for methanol-powered vehicles and equipment in Singapore’s commercial fleet operations.",
      "This collaboration with Goldbell/MoveSG demonstrates the versatility of CRecTech’s green methanol beyond the maritime sector, opening up additional market opportunities in urban logistics and last-mile delivery where low-carbon fuel alternatives are increasingly sought after.",
    ],
  },
  {
    title: "CRecTech NUS GRIP Run 7 Lift Off Day",
    date: "March 2024",
    image: "/images/news/nus-grip.avif",
    slug: "nus-grip-run-7-lift-off-day",
    body: [
      "CRecTech participated in the NUS GRIP (Global Research Innovation Programme) Run 7 Lift Off Day in March 2024, marking an important milestone in the company’s journey from university research to commercial venture. The event celebrated the official launch of CRecTech as a startup emerging from the National University of Singapore’s deep-tech ecosystem.",
    ],
  },
  {
    title: "Exclusive sharing for BLOCK71 Chinese EMBA",
    date: "February 2024",
    image: "/images/news/block71-emba.avif",
    slug: "block71-chinese-emba",
    body: [
      "In February 2024, CRecTech was invited to deliver an exclusive presentation to the BLOCK71 Chinese EMBA cohort, sharing insights on climate-tech entrepreneurship, the green methanol market opportunity, and the journey of building a deep-tech startup in Singapore. The session sparked engaging discussions about cross-border collaboration opportunities in the clean energy sector.",
    ],
  },
  {
    title: "Awarded Startup SG Founder Grant",
    date: "December 2023",
    image: "/images/news/startup-sg-grant.avif",
    slug: "startup-sg-founder-grant",
    body: [
      "CRecTech was awarded the Startup SG Founder Grant in December 2023, a government-backed initiative administered by Enterprise Singapore to support first-time entrepreneurs building innovative, scalable businesses. The grant provides early-stage funding and mentorship to help startups validate their business models and achieve initial market traction.",
      "The Startup SG Founder Grant is a competitive program that evaluates applicants on the novelty of their technology, the strength of their team, and the size of the addressable market. CRecTech’s selection reflects the government’s confidence in the company’s potential to contribute to Singapore’s green economy objectives.",
      "The grant funding has been instrumental in supporting CRecTech’s early R&D activities, including catalyst development, reactor prototyping, and initial techno-economic modeling that laid the groundwork for the company’s subsequent fundraising and partnership efforts.",
    ],
  },
  {
    title: "First Runner up in PIER71 Smart Port Challenge 2023",
    date: "November 2023",
    image: "/images/news/pier71-runner-up.avif",
    slug: "pier71-smart-port-challenge-first-runner-up",
    body: [
      "CRecTech achieved First Runner-up status at the PIER71 Smart Port Challenge 2023 finals held in November 2023. The competition, organized by PIER71™ (Port Innovation Ecosystem Reimagined @ BLOCK71), brings together startups offering innovative solutions for the maritime and port industries.",
      "CRecTech’s pitch highlighted its green methanol production technology as a practical solution for decarbonizing port operations and marine fuel supply chains. The strong finish in this prestigious maritime innovation competition validated CRecTech’s value proposition and opened doors to further engagement with industry stakeholders in the port and shipping sectors.",
    ],
  },
  {
    title: "Selected as top finalists of 2023 Smart Port Challenge PIER71",
    date: "September 2023",
    image: "/images/news/pier71-finalist.avif",
    slug: "pier71-smart-port-challenge-finalists",
    body: [
      "CRecTech was selected as one of the top finalists for the 2023 Smart Port Challenge organized by PIER71™ in September 2023. The challenge attracted applications from startups worldwide, with finalists chosen based on the innovation, feasibility, and market potential of their proposed solutions for the maritime industry.",
      "As a finalist, CRecTech presented its CO₂-to-methanol technology to a panel of judges comprising industry leaders from major port operators, shipping companies, and maritime technology investors. The selection as a top finalist provided valuable exposure and validation for CRecTech’s technology and business model.",
      "The PIER71™ Smart Port Challenge has been a launchpad for numerous successful maritime-tech startups, and CRecTech’s participation helped establish the company’s reputation in Singapore’s vibrant maritime innovation ecosystem.",
    ],
  },
  {
    title: "Showcased CRecTech’s technology in World Conference on Clean Energy Equipment 2022",
    date: "October 2022",
    image: "/images/news/clean-energy-2022.avif",
    slug: "world-conference-clean-energy-2022",
    body: [
      "CRecTech showcased its catalytic CO₂-to-methanol technology at the World Conference on Clean Energy Equipment held in October 2022. The conference brought together researchers, engineers, and industry professionals from around the globe to discuss the latest advances in clean energy technology and equipment.",
      "Presenting at this international conference provided CRecTech with early validation of its technology from the global research community and helped establish connections with potential academic and industry collaborators working on complementary technologies in carbon capture, hydrogen production, and catalyst development.",
    ],
  },
  {
    title: "SWITCH 2022",
    date: "October 2022",
    image: "/images/news/switch-2022.avif",
    slug: "switch-2022",
    body: [
      "CRecTech participated in SWITCH 2022 (Singapore Week of Innovation and Technology) in October 2022, one of Asia’s premier innovation festivals. The event provided a platform for CRecTech to showcase its early-stage technology to a diverse audience of investors, corporate innovators, government officials, and fellow entrepreneurs.",
      "SWITCH 2022 marked one of CRecTech’s earliest public appearances as a startup, helping the founding team build awareness for their CO₂-to-methanol vision and make initial connections with Singapore’s vibrant startup ecosystem, which would prove instrumental in the company’s subsequent growth.",
    ],
  },
];
