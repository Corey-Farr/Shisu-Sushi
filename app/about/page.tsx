import { Section } from "@/components/Section";
import { ImageCard } from "@/components/ImageCard";

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A room built around a counter."
        description="Shisu Sushi is a small omakase bar in Orlando, designed so every detail—light, sound, and pacing—supports what happens on the cutting board."
      >
        {/* Story + chef */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-6 text-sm text-white/70">
            <p>
              The restaurant is anchored by a single counter and a handful of
              cooks who have worked together for years. We keep the room small
              on purpose; fewer seats mean more attention for each guest and
              every piece of fish that crosses the board.
            </p>
            <p>
              Our menu is written around relationships rather than concepts. We
              buy from a short list of fishmongers and farmers who call when
              something special comes in, then build that night&apos;s omakase
              around those deliveries.
            </p>
            <p>
              The goal isn&apos;t to surprise you with tricks; it&apos;s to make
              every bite feel inevitable—like there was no other way for that
              piece of fish and that grain of rice to meet.
            </p>
          </div>
          <div className="space-y-4 lg:-mt-32">
            <ImageCard
              src="/images/head-chef.jpg"
              alt="The head chef at Shisu Sushi standing behind the omakase counter."
              label="Head chef"
              description="Quietly directing the room from behind the board."
            />
          </div>
        </div>

        {/* Room & craft strip */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div className="space-y-4">
            <ImageCard
              src="/images/interior-detail.jpg"
              alt="Close-up of the omakase counter, chopsticks, and ceramic ware."
              label="The room"
              description="Warm wood, hand-thrown ceramics, and low light: a backdrop that disappears behind the food."
            />
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Craft
            </p>
            <p>
              Rice is cooked in small batches throughout the night, seasoned
              slightly differently as the temperature of the room changes. Fish
              is cut to order, often seconds before it reaches your plate.
            </p>
            <p>
              We taste constantly, adjusting seasoning and pacing as we read the
              counter. Some guests move quickly, some linger. The menu is the
              same, but the rhythm shifts to match the conversation.
            </p>
            <p className="text-xs text-white/55">
              Shisu Sushi is meant to feel less like a performance and more
              like being invited into someone&apos;s nightly routine—one that
              happens to involve very good fish.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

