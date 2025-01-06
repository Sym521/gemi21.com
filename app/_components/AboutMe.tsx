import { BentoGrid } from "@/components/ui/bento-grid";

export const AboutMe = () => {
    return (
        <div>
            <h1 className=" text-3xl font-Poppins font-black flex justify-center items-center">About Me</h1>
            <div>
                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                    {/* {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={cn("[&>p:text-lg]", item.className)}
                            icon={item.icon}
                        />
                    ))} */}
                </BentoGrid>
            </div>
        </div>
    );
};
