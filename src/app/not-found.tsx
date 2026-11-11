import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-svh flex-col items-start justify-center gap-6 bg-white pt-24">
      <div className="container-l flex flex-col items-start gap-6">
        <h1 className="t-h1">Page not found</h1>
        <p className="t-lead text-neutral-500">That page doesn&apos;t exist or has moved.</p>
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </main>
  );
}
