import { site } from "@/data/site";

const defaultDescription = `Portfolio of ${site.name}, a ${site.role.toLowerCase()} with 9+ years of experience building ${site.focus}.`;

type PageMetaProps = {
  /** Page name. Omitted on the home page, which uses the default title. */
  title?: string;
  description?: string;
};

/** Document title and description. React 19 hoists these into the document head. */
export function PageMeta({ title, description = defaultDescription }: PageMetaProps) {
  const documentTitle = title ? `${title} | ${site.name}` : `${site.name}, ${site.role}`;

  return (
    <>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
    </>
  );
}
