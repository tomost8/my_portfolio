import { site } from "@/data/site";
import { TextRollLink } from "./TextRollLink";

/**
 * Fixed to the bottom of the viewport, behind the page (z-index 1 against the
 * page's 2). The page ends with a spacer of the same height, so scrolling to
 * the end lifts the content like a curtain and reveals this footer.
 */
export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-[1] h-(--footer-h) bg-neutral-950 text-white">
      <div className="container-l flex flex-col gap-[60px] pt-20 pb-[30px]">
        <div className="flex flex-col gap-6">
          <h2 className="t-h3">Project in mind?</h2>
          <p className="t-body max-w-[400px] text-balance tablet:max-w-none">
            Feel free to reach out for freelance work, or just to chat
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <ul className="flex flex-wrap items-center gap-5">
            <li>
              <TextRollLink href={site.links.linkedin} external>
                Linkedin
              </TextRollLink>
            </li>
            <li>
              <TextRollLink href={`mailto:${site.email}`} external>
                Email
              </TextRollLink>
            </li>
            <li>
              <TextRollLink href={site.links.savee} external>
                Savee
              </TextRollLink>
            </li>
            <li>
              <TextRollLink href={site.links.x} external>
                X
              </TextRollLink>
            </li>
          </ul>
          <p className="t-body">©{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
