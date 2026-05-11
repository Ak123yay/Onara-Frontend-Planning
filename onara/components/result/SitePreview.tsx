import MikesPizzaPreview from "@/components/site-preview/MikesPizzaPreview";
import BrowserMock from "@/components/site-preview/BrowserMock";

interface Props {
  height?: number;
  url?: string;
}

export default function SitePreview({ height = 480, url = "mikes-pizza-a3f2.pages.dev" }: Props) {
  return (
    <BrowserMock url={url} className="w-full">
      <MikesPizzaPreview height={height} />
    </BrowserMock>
  );
}
