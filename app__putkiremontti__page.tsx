import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { ServicePageView } from "@/components/ServicePageView";

const service = getService("putkiremontti");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/putkiremontti",
});

export default function Page() {
  return <ServicePageView service={service} />;
}
