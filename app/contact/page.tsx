import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Visit"
        title="Hours, address, and contact."
        description="Reach out for reservations, private events, or any questions about the menu."
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div className="space-y-6 text-sm text-white/70">
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.25em] text-white/60">
                Address
              </h3>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-shisu-ivory hover:text-shisu-gold"
              >
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block">{site.cityLine}</span>
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.25em] text-white/60">
                Hours
              </h3>
              <p>{site.hoursSummary}</p>
              <p className="text-xs text-white/60">{site.seatingsSummary}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.25em] text-white/60">
                Contact
              </h3>
              <p>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-shisu-gold"
                >
                  {site.phone}
                </a>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-shisu-gold"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

