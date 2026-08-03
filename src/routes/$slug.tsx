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
    const description = p?.tagline ?? "OrbitIQ Labs";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductRoute,
});

function ProductRoute() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
