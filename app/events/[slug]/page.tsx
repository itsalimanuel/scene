import { eventsList } from "@/lib/eventsData";
import EventClientPage from "./EventClientPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return eventsList.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsList.find((e) => e.slug === slug);
  if (!event) return {};

  return {
    title: `${event.title.en} | Scene Medical Supplies`,
    description: event.shortDesc.en,
    openGraph: {
      title: `${event.title.en} — Dubai, UAE`,
      description: event.shortDesc.en,
      images: [{ url: event.image }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = eventsList.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return <EventClientPage event={event} />;
}
