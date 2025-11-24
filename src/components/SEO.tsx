import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
    twitterHandle?: string;
    schema?: object;
    noindex?: boolean;
}

const SEO = ({
    title = "يوسف عصام - مطور واجهات أمامية",
    description = "موقع يوسف عصام - مطور واجهات أمامية متخصص في بناء مواقع سريعة وعصرية باستخدام أحدث التقنيات.",
    keywords = "يوسف عصام, مطور واجهات, React, Frontend Developer, Web Development, Portfolio",
    image = "/og-image.png",
    url = "https://youssefessam.com", // Replace with actual domain if known, or leave as placeholder
    type = "website",
    author = "Youssef Essam",
    twitterHandle = "@youssefessam", // Replace with actual handle if known
    schema,
    noindex = false
}: SEOProps) => {
    const siteTitle = title === "يوسف عصام - مطور واجهات أمامية" ? title : `${title} | يوسف عصام`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Language */}
            <html lang="ar" dir="rtl" />

            {/* Mobile & PWA */}
            <meta name="theme-color" content="#0F172A" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={siteTitle} />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
