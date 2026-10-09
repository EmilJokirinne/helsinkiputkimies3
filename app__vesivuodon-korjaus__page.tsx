import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { ServicePageView } from "@/components/ServicePageView";

const service = getService("vesivuodon-korjaus");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/vesivuodon-korjaus",
});

export default function Page() {
  return <ServicePageView service={service} />;
}
