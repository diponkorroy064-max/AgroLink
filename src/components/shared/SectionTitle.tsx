interface SectionTitleProps {
    subtitle?: string;
    title: string;
    description?: string;
}

const SectionTitle = ({
    subtitle,
    title,
    description,
}: SectionTitleProps) => {
    return (
        <div className="max-w-3xl mx-auto text-center mb-12">
            {subtitle && (
                <p className="text-green-600 font-semibold uppercase tracking-widest mb-2">
                    {subtitle}
                </p>
            )}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-gray-600 leading-7">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
