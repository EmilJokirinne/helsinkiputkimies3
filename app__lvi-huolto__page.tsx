import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { ServicePageView } from "@/components/ServicePageView";

const service = getService("lvi-huolto");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/lvi-huolto",
});

export default function Page() {
  return <ServicePageView service={service} />;
}
