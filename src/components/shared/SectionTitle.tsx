interface SectionTitleProps {
    subtitle?: string;
    title: string;
    description?: string;

    className?: string;
    subtitleClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    align?: "left" | "center";
}

const SectionTitle = ({ subtitle, title, description, className, subtitleClassName, titleClassName, descriptionClassName, align = "center"}: SectionTitleProps) => {
    return (
        <div
            className={`mx-auto mb-12 max-w-3xl ${align === "center" ? "text-center" : "text-left"} ${className ?? ""}`}>
            {subtitle && (
                <p className={`mb-2 font-semibold uppercase tracking-widest text-white ${subtitleClassName ?? ""}`}>
                    {subtitle}
                </p>
            )}

            <h2 className={`text-4xl font-bold text-gray-900 md:text-5xl ${titleClassName ?? ""}`}>
                {title}
            </h2>

            {description && (
                <p className={`mt-4 leading-7 text-gray-600 ${descriptionClassName ?? ""}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
