import { Section } from "@/components/Section";
import { ImageCard } from "@/components/ImageCard";
import { menuCategories } from "@/content/menu";

export default function MenuPage() {
  const [omakase, ...rest] = menuCategories;

  return (
    <>
      <Section
        eyebrow="Menu"
        title="Omakase and à la carte."
        description="A selection from the current menu. Availability may vary nightly based on the market."
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          <div className="space-y-10">
            <MenuCategoryBlock category={omakase} />
            {rest.map((category) => (
              <MenuCategoryBlock key={category.id} category={category} />
            ))}
          </div>
          <div className="space-y-4">
            {/* Food photography: add your sushi plates here */}
            <ImageCard
              src="/images/sushi-platter.jpg"
              alt="A long wooden board lined with assorted nigiri and maki."
              label="Service"
              description="The board changes nightly, written around what the water brings in."
            />
            <ImageCard
              src="/images/omakase-course.jpg"
              alt="A composed omakase course with seasonal garnishes."
              label="Courses"
              description="Small, deliberate courses that move at the pace of conversation."
            />
          </div>
        </div>
      </Section>
    </>
  );
}

type CategoryProps = {
  category: (typeof menuCategories)[number];
};

function MenuCategoryBlock({ category }: CategoryProps) {
  return (
    <div className="space-y-4 text-sm text-white/70">
      <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
        {category.name}
      </h3>
      {category.description && (
        <p className="text-xs text-white/60">{category.description}</p>
      )}
      <div className="space-y-3">
        {category.items.map((item) => (
          <div key={item.id}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium text-shisu-ivory">{item.name}</p>
              {item.price && (
                <p className="text-xs text-white/60">{item.price}</p>
              )}
            </div>
            {item.description && (
              <p className="text-xs text-white/60">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

