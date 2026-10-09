import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { ServicePageView } from "@/components/ServicePageView";

const service = getService("astianpesukoneen-asennus");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/astianpesukoneen-asennus",
});

export default function Page() {
  return <ServicePageView service={service} />;
}
