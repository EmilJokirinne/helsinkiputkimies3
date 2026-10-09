import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { ServicePageView } from "@/components/ServicePageView";

const service = getService("putkimies-paivystys");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/putkimies-paivystys",
});

export default function Page() {
  return <ServicePageView service={service} />;
}
