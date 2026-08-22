import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductDetail } from "@/components/site/ProductDetail";
import { productBySlug } from "@/components/site/products";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — OrbitIQ Labs` : "OrbitIQ Labs";
    const description = p?.metaDescription ?? p?.tagline ?? "OrbitIQ Labs";
    // Twitter truncates around 200 chars; keep a trimmed variant.
    const twitterDescription =
      description.length > 197 ? `${description.slice(0, 197).trimEnd()}...` : description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: twitterDescription },
      ],
    };
  },
  component: ProductRoute,
});

function ProductRoute() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
