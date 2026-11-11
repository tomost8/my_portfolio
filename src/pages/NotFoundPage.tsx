import { ButtonLink } from "@/components/ButtonLink";
import { PageMeta } from "@/components/PageMeta";

export function NotFoundPage() {
  return (
    <main id="main" className="flex min-h-svh flex-col items-start justify-center gap-6 bg-white pt-24">
      <PageMeta title="Page not found" description="That page doesn't exist or has moved." />
      <div className="container-l flex flex-col items-start gap-6">
        <h1 className="t-h1">Page not found</h1>
        <p className="t-lead text-neutral-500">That page doesn&apos;t exist or has moved.</p>
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </main>
  );
}
