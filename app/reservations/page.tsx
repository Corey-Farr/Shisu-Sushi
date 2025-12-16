import { Section } from "@/components/Section";
import { site } from "@/content/site";

export default function ReservationsPage() {
  return (
    <>
      <Section
        eyebrow="Reservations"
        title="Thirteen seats, held for you."
        description="We release counter seats on a rolling 30-day calendar. For parties of five or more, or same-day requests, please call us directly."
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <div className="space-y-4 text-sm text-white/70">
            <p>
              Online reservations are available for parties of up to four
              guests. Omakase begins promptly at the time of your booking;
              please arrive a few minutes early so we can welcome you properly.
            </p>
            <p>
              We are happy to accommodate most dietary restrictions with advance
              notice. We are not able to offer a fully vegan omakase, but we can
              thoughtfully adjust the menu for many guests.
            </p>
            <p className="text-xs text-white/60">
              If you&apos;re celebrating something, let us know in advance—we
              love quietly marking the moment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
              Book by phone
            </p>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="block text-base font-medium text-shisu-ivory hover:text-shisu-gold"
            >
              {site.phone}
            </a>
            <p className="mt-2 text-xs text-white/60">
            If you like this site and wish to inquire about my other work, <br />please call or email{" "}
            <br />
              <a href={`mailto:${site.reservationsEmail}`}>
                {site.reservationsEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

